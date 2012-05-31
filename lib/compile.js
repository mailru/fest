var compile = (function(){
    "use strict";
    var fs = null, dirname;
    var __fest_log_error = (typeof __fest_error !== 'undefined' ? __fest_error : console.error);
    if (typeof require === 'function'){
        fs = require('fs');
    }

    var readFileSync = function(file, encoding){
        var result = '',
            read_file = (typeof __read_file === 'function' ? __read_file : fs.readFileSync);
        try {
            result = read_file(file, encoding);
        }catch (e){
            __fest_log_error('error open file "' + file + '", ' + e.message);
            return '';
        }
        if (typeof result === 'undefined'){
            __fest_log_error('error check file "' + file + '"');
            return '';
        }
        return result;
    };
    dirname = function(path){
        return path.substring(0, path.lastIndexOf('/'));
    };

    var sax = (new Function(readFileSync(__dirname + '/sax.js').toString() + ' return sax;'))();
    var js_beautify = (new Function(readFileSync(__dirname + '/beautify.js').toString() + ' return js_beautify;'))();

    var fest_ns = 'http://fest.mail.ru';

    var short_tags = {area: true, base: true, br: true, col: true, command: true,
                      embed: true, hr: true, img: true, input: true, keygen: true,
                      link: true, meta: true, param: true, source: true, wbr: true };

    var jschars=/[\\'"\/\n\r\t\b\f<>]/g;

    var jshash = {
        "\"":"\\\"",
        "\\":"\\\\",
        "/" :"\\/",
        "\n":"\\n",
        "\r":"",
        "\t":"\\t",
        "\b":"\\b",
        "\f":"\\f",
        "'" :"\\'",
        "<" :"\\u003C",
        ">" :"\\u003E"
    };

    var htmlhash = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
    };

    var reName = /^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[$A-Z\_a-z][$A-Z\_a-z0-9]*$/;

    function escapeJS(s){
        return s.replace(jschars, function (chr){
            return jshash[chr];
        });
    }

    function getName(name){
        if (/^[a-zA-Z_]+$/.test(name)){
            return '.' + name;
        } else {
            return '["' + escapeJS(name) + '"]';
        }
    }

    function resolve(promise, promises, fn){
        if (promises === 0){
            promise.resolve(fn.join('').replace(/";__fest_str\+="/g, ''));
        }
    }

    function compileAttributes(attrs){
        var i, result = { 'text': '', 'expr': [], 'name': [] }, n = 0, attrValue = '';
        for (i in attrs){
            attrValue = attrs[i].value.replace(/{{/g, "__DOUBLE_LEFT_CURLY_BRACES__").replace(/}}/g, "__DOUBLE_RIGHT_CURLY_BRACES__");

            result.text += ' ' + i + '=\\"'
            attrValue.match(/{[^}]*}|[^{}]*/g).forEach(function (str) {
                if (str !== '') {
                    if (str[0] === '{') {
                        result.name[n] = i;
                        result.expr[n] = str.slice(1, -1).replace(/__DOUBLE_LEFT_CURLY_BRACES__/g, "{").replace(/__DOUBLE_RIGHT_CURLY_BRACES__/g, "}");
                        result.text += '" + __fest_attrs[' + n++ + '] + "';
                    } else {
                        result.text += escapeJS(str).replace(/__DOUBLE_LEFT_CURLY_BRACES__/g, "{").replace(/__DOUBLE_RIGHT_CURLY_BRACES__/g, "}");
                    }
                }
            });
            result.text += '\\"';
        }
        return result;
    }

    function callback(type, data, fn, callbacks){
        if (typeof callbacks[type] !== 'function'){
            return false;
        }
        var result = callbacks[type](data);
        if (result === false){
            return false;
        }
        if (typeof result === 'string'){
            fn[fn.length - 1] += result;
        }
        return true;
    }

    function closetag(stack, name, fn, opentag, context_name){
        if (!opentag){
            return false;
        }
        if (stack.indexOf('attributes') >= 0 || name === 'attributes'){
            return opentag;
        }
        if (stack[stack.length - 1] === 'shorttag'){
            fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"/>");';
        } else if (stack[stack.length - 1] === 'element') {
            fn[fn.length - 1] += '__fest_elementName = __fest_element_stack[__fest_element_stack.length - 1];';
            fn[fn.length - 1] += 'if(__fest_elementName in __fest_short_tags){__fest_pushstr(' + context_name + ',"/")}';
            fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',">");';
        } else {
            fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',">");';
        }
        return false;
    }

    function errorMessage(msg, badLine, file) {
        function zeroPadding(s, len) {
            if (s.toString().length >= len){
                return s + "";
            }
            return String(new Array(len + 1).join('0') + s).slice(-len);
        }

        function numSort(a, b) {
            return a - b;
        }

        function leftWhitespace(s) {
            return s.length - s.trimLeft().length;
        }

        var before = 1, after = 1,
            lines = file.split('\n'),
            badPlace = [],
            num = [];

        for (var i = badLine - before; i <= badLine + after; i++) {
            if (lines[i] !== undefined){
                num.push(i);
            }
        }

        var longest = num.sort(numSort)[num.length - 1].toString().length,
            minWhitespace = num.slice(0)
                               .map(function(n) { return leftWhitespace(lines[n]); })
                               .sort(numSort)[0];

        num.forEach(function(n) {
            badPlace.push(
                        ('%n%: ' + lines[n].slice(minWhitespace)).replace('%n%', zeroPadding(n + 1, longest))
                     );
        });

        return [badPlace.join('\n'), 'At line ' + zeroPadding(badLine + 1, longest) + ': ' + msg].join('\n');
    }

    function getExpr(compile_file, parser) {
        return function(value, where) {
            try {
                (new Function('(' + value + ')'));
            } catch (e) {
                throw new Error(errorMessage((where || 'node') + ' has ' + e, parser.line, compile_file));
            }
            return value;
        };
    }

    function getEval(compile_file, parser) {
        return function(value) {
            try {
                (new Function(value));
            } catch (e) {
                throw new Error(errorMessage('node has ' + e, parser.line, compile_file));
            }
            return value;
        };
    }

    function getAttr(compile_file, parser) {
        return function(node, attr, type) {
            var value;
            try {
                value = node.attributes[attr].value;
            } catch (e) {
                throw new Error(errorMessage('attribute "' + attr + '" is missing', parser.line, compile_file));
            }
            if (type === 'expr') {
                try {
                    (new Function('(' + value + ')'));
                } catch (e) {
                    throw new Error(errorMessage('attribute "' + attr + '" has ' + e, parser.line, compile_file));
                }
            } else if (type === 'var') {
                if (!reName.test(value)) {
                    throw new Error(errorMessage('attribute "' + attr + '" has an invalid identifier', parser.line, compile_file));
                }
            }
            return value;
        };
    }

    function push_debug_info(fn, parser, compile_file, block, debug){
        if (!debug){
            return;
        }
        fn[fn.length - 1] += '__fest_debug_file="' + compile_file + '";';
        fn[fn.length - 1] += '__fest_debug_line="' + parser.line + '";';
        fn[fn.length - 1] += '__fest_debug_block="' + block + '";';
    }

    function _compile (file, context_name, callbacks, options, cb){
        var counters = {counter: 0, promises: 1},
            choose = [],
            fn = [''],
            stack = [],
            opentag = false,
            templateClosed = false,
            parser = sax.parser(options.sax.strict, options.sax),
            compile_file = readFileSync(file, 'utf-8'),
            _getAttr = getAttr(compile_file, parser),
            _getExpr = getExpr(compile_file, parser),
            _getEval = getEval(compile_file, parser),
            attrs;

        parser.onopentag = function (node) {
            if (callback('opentag', node, fn, callbacks)) return;

            push_debug_info(fn, parser, file, node.name, options.debug);


            opentag = closetag(stack, node.local, fn, opentag, context_name);

            if (!opentag && node.local == 'attributes') {
                throw new Error(file + "\n" + errorMessage('fest:attributes must be the first child', parser.line, compile_file));
            }

            if (node.local == 'attributes' && stack[stack.length - 1] == 'attributes') {
                throw new Error(file + "\n" + errorMessage('fest:attributes cannot be nested', parser.line, compile_file));
            }

            if (node.ns[node.prefix] != fest_ns){
                attrs = compileAttributes(node.attributes);
                for (var i = 0; i < attrs.expr.length; i++) {
                    fn[fn.length - 1] += 'try{__fest_attrs[' + i + ']=__fest_escapeHTML(' + _getExpr(attrs.expr[i], 'expression #' + (i + 1) + ' in attribute "' +  attrs.name[i] + '"') + ')}catch(e){__fest_attrs[' + i + ']=""; __fest_log_error(e.message);}';
                }
                stack.push(node.name in short_tags ? 'shorttag' : 'tag');
                opentag = true;
                fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"<' + node.name + attrs.text + '");';
                return;
            }
            stack.push(node.local);

            switch (node.local){
                case 'element':
                    opentag = true;
                    fn[fn.length - 1] += '__fest_elementName="";';
                    fn[fn.length - 1] += 'try{__fest_elementName=' + _getAttr(node, 'select', 'expr') + ';';
                    fn[fn.length - 1] += 'if(typeof __fest_elementName !== "string"){__fest_log_error("Element name must be a string");__fest_elementName="div"}';
                    fn[fn.length - 1] += '}catch(e){__fest_elementName="div";__fest_log_error(e.message);}';
                    fn[fn.length - 1] += '__fest_element_stack.push(__fest_elementName);';
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"<" + __fest_elementName);';
                    return;
                case 'template':
                    node.context_name = context_name;
                    context_name = (node.attributes.context_name ? _getAttr(node, 'context_name', 'var') : context_name);
                    if (context_name !== node.context_name){
                        fn[fn.length - 1] += 'var ' + context_name + '=' + node.context_name + ';';
                    }
                    return;
                case 'doctype':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"<!DOCTYPE ");';
                    return;
                case 'attribute':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + '," ' + escapeJS(_getAttr(node, 'name')) + '=\\"");';
                    return;
                case 'comment':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"<!--");';
                    return;
                case 'cdata':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"<![CDATA[");';
                    return;
                case 'text':
                    fn[fn.length - 1] += node.attributes.value ? '__fest_pushstr(' + context_name + ',"' + escapeJS(_getAttr(node, 'value')) + '");' : '';
                    return;
                case 'space':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + '," ");';
                    return;
                case 'if':
                    fn[fn.length - 1] += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false;__fest_log_error(e.message);}';
                    fn[fn.length - 1] += 'if(__fest_if){';
                    return;
                case 'choose':
                    choose[choose.length] = 0;
                    return;
                case 'when':
                    choose[choose.length - 1]++;
                    fn[fn.length - 1] += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false; __fest_log_error(e.message);}';
                    fn[fn.length - 1] += 'if(__fest_if){';
                    return;
                case 'otherwise':
                    return;
                case 'value':
                    node.__fest_output = node.attributes.output ? node.attributes.output.value : 'html';
                    if (!node.attributes.safe){
                        fn[fn.length - 1] += 'try{';
                    }
                    if (node.__fest_output === 'text'){
                        fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',';
                    } else if(node.__fest_output === 'js') {
                        fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',__fest_escapeJS(';
                    } else {
                        fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',__fest_escapeHTML(';
                    }
                    return;
                case 'script':
                    if (!node.attributes.safe){
                        fn[fn.length - 1] += 'try{';
                    }
                    if (node.attributes.src){
                        fn[fn.length - 1] += _getEval(readFileSync(dirname(file) + '/' + node.attributes.src.value, 'utf-8'));
                    }
                    return;
                case 'call':
                    fn[fn.length - 1] += 'try{__fest_pushstr(' + context_name + ',' + _getAttr(node, 'name', 'expr') + '(' + _getAttr(node, 'data', 'expr') + '))}catch(e){__fest_log_error(e.message)}';
                    return;
                case 'insert':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"' + escapeJS(readFileSync(dirname(file) + '/' + _getAttr(node, 'src'), 'utf-8')) + '");';
                    return;
                case 'each':
                    fn[fn.length - 1] += 'var ' + _getAttr(node, 'index', 'var') + (node.attributes.value ? ',' + _getAttr(node, 'value', 'var')  : '') + ';';
                    fn[fn.length - 1] += 'try{__fest_foreach=' + _getAttr(node, 'iterate', 'expr') + ' || {};}catch(e){__fest_foreach={};__fest_log_error(e.message);}';
                    fn[fn.length - 1] += 'for(' + _getAttr(node, 'index') + ' in __fest_foreach){';
                    if (node.attributes.value) {
                        fn[fn.length - 1] += _getAttr(node, 'value') + '=' + _getAttr(node, 'iterate') + '[' + _getAttr(node, 'index') + '];';
                    }
                    return;
                case 'foreach':
                    __fest_log_error('forearch deprecated use for');
                case 'for':
                    fn[fn.length - 1] += 'var ' + _getAttr(node, 'index', 'var') + (node.attributes.value ? ',' + _getAttr(node, 'value', 'var')  : '') + ',__fest_l' + counters.counter + ',__fest_from' + counters.counter + ',__fest_to' + counters.counter + ';';
                    if (node.attributes.iterate){
                        fn[fn.length - 1] += 'try{__fest_foreach=' + _getAttr(node, 'iterate', 'expr') + ' || [];}catch(e){__fest_foreach=[];__fest_log_error(e.message);}';
                        fn[fn.length - 1] += '__fest_l' + counters.counter + ' = (typeof __fest_foreach === "number" ? __fest_foreach : typeof __fest_foreach === "string" ? parseInt(__fest_foreach, 10) : __fest_foreach.length || 0);';
                        fn[fn.length - 1] += 'for(' + _getAttr(node, 'index') + ' = 0;' + _getAttr(node, 'index') + '<__fest_l' + counters.counter + ';' + node.attributes.index.value + '++){';
                        if (node.attributes.value) {
                            fn[fn.length - 1] += _getAttr(node, 'value') + '=' + _getAttr(node, 'iterate') + '[' + _getAttr(node, 'index') + '];';
                        }
                    } else {
                        fn[fn.length - 1] += 'try{__fest_from' + counters.counter + '=' + _getAttr(node, 'from', 'expr') + ';}catch(e){__fest_from' + counters.counter + '=0;__fest_log_error(e.message);}';
                        fn[fn.length - 1] += 'try{__fest_to' + counters.counter + '=' + _getAttr(node, 'to', 'expr') + ';}catch(e){__fest_to' + counters.counter + '=0;__fest_log_error(e.message);}';
                        fn[fn.length - 1] += 'for(' + _getAttr(node, 'index') + ' = __fest_from' + counters.counter + ';' + _getAttr(node, 'index') + '<=__fest_to' + counters.counter + ';' + _getAttr(node, 'index') + '++){';
                    }
                    counters.counter++;
                    return;
                case 'set':
                    if (node.attributes.test){
                        fn[fn.length - 1] += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false; __fest_log_error(e.message)}';
                    } else {
                        fn[fn.length - 1] += '__fest_if=true;';
                    }
                    fn[fn.length - 1] += 'if(__fest_if){';
                    fn[fn.length - 1] += '__fest_blocks' + getName(_getAttr(node, 'name')) + '=function(' + context_name + ',params){';
                    fn[fn.length - 1] += 'if (typeof document === "undefined"){var document = {write:function(string){__fest_pushstr(' + context_name + ',string);}};}';
                    fn[fn.length - 1] += 'var __fest_result=[],__fest_str="",__fest_pushstr;';
                    fn[fn.length - 1] += '__fest_pushstr=function(ctx,str){__fest_str+=str};';
                    return;
                case 'get':
                    fn[fn.length - 1] += '__fest_result[__fest_result.length]=__fest_str;';
                    fn[fn.length - 1] += '__fest_str="";';
                    if (node.attributes.select){
                        fn[fn.length - 1] += 'try{__fest_select=' + _getAttr(node, 'select', 'expr') + '}catch(e){__fest_select==="__error__";__fest_log_error(e.message)}';
                    } else {
                        fn[fn.length - 1] += '__fest_select="' + escapeJS(_getAttr(node, 'name')) + '";';
                    }
                    fn[fn.length - 1] += '__fest_result[__fest_result.length]=function(' + context_name + ',params, __fest_select){';
                    fn[fn.length - 1] += 'return function(){';
                    fn[fn.length - 1] += 'return (__fest_select in __fest_blocks) ? __fest_blocks[__fest_select].call(__fest_self,' + context_name + ', params) : [];';
                    fn[fn.length - 1] += '};';
                    fn[fn.length - 1] += '};';
                    fn[fn.length - 1] += 'try{__fest_params=false';
                    return;
                case 'include':
                    if (node.attributes.context){
                        fn[fn.length - 1] += '__fest_contexts[__fest_contexts.length] = ' + context_name + ';';
                        fn[fn.length - 1] += 'try{' + context_name + '=' + _getAttr(node, 'context', 'expr') + '}catch(e){' + context_name + '={};__fest_log_error(e.message)};';
                    }
                    _compile(dirname(file) + '/' + _getAttr(node, 'src'), context_name, callbacks, options,
                        function(fn, index){return function(template){
                            fn[index] += template;
                        };}(fn, fn.length - 1));
                    if (node.attributes.context){
                        fn[fn.length] = context_name + '=__fest_contexts.pop();';
                    } else {
                        fn[fn.length] = '';
                    }
                    return;
            }
        };

        parser.onclosetag = function () {
            var node = this.tag;

            if (callback('closetag', node, fn, callbacks) !== false) return;

            opentag = closetag(stack, node.local, fn, opentag, context_name);

            stack.pop();

            if (node.ns[node.prefix] != fest_ns){
                if (!(node.name in short_tags)){
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"</' + node.name + '>");';
                }
                return;
            }
            switch (node.local){
                case 'element':
                    fn[fn.length - 1] += '__fest_elementName = __fest_element_stack[__fest_element_stack.length - 1];';
                    fn[fn.length - 1] += 'if(!(__fest_elementName in __fest_short_tags)){__fest_pushstr(' + context_name + ',"</" + __fest_elementName + ">")}';
                    fn[fn.length - 1] += '__fest_element_stack.pop();';
                    return;
                case 'doctype':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',">");';
                    return;
                case 'comment':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"-->");';
                    return;
                case 'attribute':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"\\"");';
                    return;
                case 'cdata':
                    fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"]]>");';
                    return;
                case 'if':
                    fn[fn.length - 1] += '}';
                    return;
                case 'otherwise':
                    return;
                case 'foreach':
                case 'each':
                case 'for':
                    fn[fn.length - 1] += '}';
                    return;
                case 'choose':
                    (function(length){
                        for (var i = 0; i < length; i++){
                            fn[fn.length - 1] += '}';
                        }
                    })(choose.pop());
                    return;
                case 'when':
                    fn[fn.length - 1] += '}else{';
                    return;
                case 'value':
                    fn[fn.length - 1] += ')';
                    if (node.__fest_output !== 'text'){
                        fn[fn.length - 1] += ')';
                    }
                    if (!node.attributes.safe){
                        fn[fn.length - 1] += ';}catch(e){__fest_log_error(e.message + "' + this.line + '");}';
                    } else {
                        fn[fn.length - 1] += ';';
                    }
                    return;
                case 'set':
                    fn[fn.length - 1] += '__fest_result[__fest_result.length]=__fest_str;';
                    fn[fn.length - 1] += 'return __fest_result;';
                    fn[fn.length - 1] += '};}';
                    return;
                case 'get':
                    fn[fn.length - 1] += ';}catch(e){__fest_params={};__fest_log_error(e.message);}';
                    fn[fn.length - 1] += '__fest_result[__fest_result.length - 1]=__fest_result[__fest_result.length - 1](' + context_name + ',__fest_params, __fest_select);';
                    return;
                case 'script':
                    if (!node.attributes.safe){
                        fn[fn.length - 1] += '}catch(e){__fest_log_error(e.message);}';
                    }
                    return;
                case 'template':
                    templateClosed = true;
                    context_name = node.context_name;
                    return;
            }
        };
        var evallist = ['value', 'script', 'get'];
        parser.ontext = function (text) {
            //console.log(this.line);
            if (callback('text', text, fn, callbacks) !== false) return;
            opentag = closetag(stack, 'text', fn, opentag, context_name);
            if (evallist.indexOf(stack[stack.length - 1]) === -1){
                fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"' + escapeJS(text) + '");';
            } else if (stack[stack.length - 1] === 'get') {
                fn[fn.length - 1] += ' || ' + _getExpr(text);
            } else if (stack[stack.length - 1] === 'value') {
                fn[fn.length - 1] += _getExpr(text);
            } else {
                fn[fn.length - 1] += _getEval(text);
            }
        };
        parser.oncdata = function (cdata) {
            if (callback('cdata', cdata, fn, callbacks) !== false) return;
            opentag = closetag(stack, 'cdata', fn, opentag, context_name);
            if (evallist.indexOf(stack[stack.length - 1]) === -1){
                fn[fn.length - 1] += '__fest_pushstr(' + context_name + ',"' + escapeJS(cdata) + '");';
            } else if (stack[stack.length - 1] === 'get') {
                fn[fn.length - 1] += ' || ' + _getExpr(cdata);
            } else if (stack[stack.length - 1] === 'value') {
                fn[fn.length - 1] += _getExpr(cdata);
            } else {
                fn[fn.length - 1] += _getEval(cdata);
            }
        };
        parser.onend = function () {
            if (compile_file && !templateClosed) {
                throw new Error(file + "\n" + errorMessage('fest:template is not closed', parser.line, compile_file));
            }

            cb(fn.join('').replace(/"\);__fest_pushstr\([^,]*,"/g, ''));
        };

        if (compile_file){
            parser.write(compile_file);
        }
        parser.close();
    }

    function finish_compile(file, options, name){
        var callbacks = {}, template;
        name = name || '';

        options = options || {beautify: true, nothrow: false};
        options.sax = options.sax || {trim:true, xmlns:true};
        options.sax.strict = options.sax.strict || true;

        function build_template(result) {
            template  = 'function ' + name + '(__fest_context){"use strict";' +
                        'var __fest_self=this,__fest_str="",__fest_result=[],__fest_contexts=[],__fest_attrs=[],__fest_select,__fest_if,__fest_foreach,__fest_from,__fest_to,__fest_html = "",' +
                        '__fest_blocks={},__fest_params,__fest_log_error,___fest_log_error,__fest_elementName,__fest_pushstr,' +
                        '__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",' +
                        '__fest_htmlchars=/[&<>\\"]/g,' +
                        '__fest_short_tags = ' + JSON.stringify(short_tags) + ',' +
                        '__fest_element_stack = [],' +
                        '__fest_htmlhash=' + JSON.stringify(htmlhash) + ',' +
                        '__fest_jschars=/' + jschars.source + '/g,' +
                        '__fest_jshash=' + JSON.stringify(jshash) + ';' +
                        '__fest_pushstr=function(ctx, str){__fest_str+=str};' +
                        'if(typeof __fest_error === "undefined"){___fest_log_error = function(){return console.error.apply(console,arguments);};}else{___fest_log_error=__fest_error}' +
                        'function __fest_replaceHTML(chr){return __fest_htmlhash[chr];}' +
                        'function __fest_replaceJS(chr){return __fest_jshash[chr];}' +
                        'function __fest_escapeJS(s){' +
                        'if (typeof s==="undefined")return "";' +
                        'if (typeof s!=="string"){s+="";}' +
                        'return s.replace(__fest_jschars,__fest_replaceJS);}' +
                        'function __fest_escapeHTML(s){' +
                        'if (typeof s==="undefined")return "";' +
                        'if (typeof s!=="string"){s+="";}' +
                        'return s.replace(__fest_htmlchars,__fest_replaceHTML);}' +
                        'if (typeof document === "undefined"){var document = {write:function(string){__fest_pushstr(__fest_context, string);}};}' +
                        'function __fest_log_error(message){___fest_log_error(message+"\\nin block \\""+__fest_debug_block+"\\" at line: "+__fest_debug_line+"\\nfile: "+__fest_debug_file)}';
            template += result;
            template += '__fest_result[__fest_result.length]=__fest_str;' +
                        'if(__fest_result.length === 1){return __fest_result[0]}' +
                        'function setblocks(list){' +
                        'var __fest_i,__fest_l;' +
                        'for (__fest_i=0,__fest_l=list.length;__fest_i<__fest_l;__fest_i++){' +
                        'if (typeof list[__fest_i]==="string"){__fest_html+=list[__fest_i];}' +
                        'else{setblocks(list[__fest_i]());}' +
                        '}}' +
                        'setblocks(__fest_result);' +
                        'return __fest_html;}';
        }

        try {
            _compile(file, '__fest_context', callbacks, options, build_template);
            if (options.beautify) template = js_beautify(template);
        } catch (e) {
            if (!options.nothrow) {
                throw e;
            }
            __fest_log_error(e.message);
            template = 'function() { return "' + e.message.replace(/\\/g, '\\\\').replace(/\n/g, "\\n").replace(/\r/g, '').replace(/"/g, '\\"') + '"; }';
        }

        return template;
    }
    if (typeof module !== 'undefined' && module.exports){
        module.exports = finish_compile;
    } else {
        return finish_compile;
    }
})();
