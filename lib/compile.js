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
    var translate = (new Function('return ' + readFileSync(__dirname + '/translate.js').toString()))();
    var js_beautify = (new Function(readFileSync(__dirname + '/beautify.js').toString() + ' return js_beautify;'))();

    var fest_ns = 'http://fest.mail.ru';

    var short_tags = {area: true, base: true, br: true, col: true, command: true,
                      embed: true, hr: true, img: true, input: true, keygen: true,
                      link: true, meta: true, param: true, source: true, wbr: true };

    var jschars=/[\\'"\/\n\r\t\b\f<>]/g;
    var htmlchars=/[&<>"]/g;

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

    function escapeHTML(s){
        return s.replace(htmlchars,function(chr){
            return htmlhash[chr];
        });
    }

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

    function callback(type, data, section, callbacks){
        if (typeof callbacks[type] !== 'function'){
            return false;
        }
        var result = callbacks[type](data);
        if (result === false){
            return false;
        }
        if (typeof result === 'string'){
            section.source += result;
        }
        return true;
    }

    function closetag(stack, name, section, opentag, context_name){
        if (!opentag){
            return false;
        }
        if (stack.indexOf('attributes') >= 0 || name === 'attributes'){
            return opentag;
        }
        if (stack[stack.length - 1] === 'shorttag'){
            section.source += '__fest_pushstr(' + context_name + ',"/>");';
        } else if (stack[stack.length - 1] === 'element') {
            section.source += '__fest_elementName = __fest_element_stack[__fest_element_stack.length - 1];';
            section.source += 'if(__fest_elementName in __fest_short_tags){__fest_pushstr(' + context_name + ',"/")}';
            section.source += '__fest_pushstr(' + context_name + ',">");';
        } else {
            section.source += '__fest_pushstr(' + context_name + ',">");';
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

    function push_debug_info(section, parser, compile_file, block, debug){
        if (!debug){
            return;
        }
        section.source += '__fest_debug_file="' + compile_file + '";';
        section.source += '__fest_debug_line="' + parser.line + '";';
        section.source += '__fest_debug_block="' + block + '";';
    }

    function _compile (data){
        var file = data.file,
            context_name = data.context_name,
            callbacks = data.callbacks,
            options = data.options,
            output = data.output,
            lang = data.lang;
            
        output = output || {sections: [], uses: {}};

        var counters = {counter: 0, promises: 1},
            choose = [],
            stack = [],
            section = flush(),
            opentag = false,
            templateClosed = false,
            parser = sax.parser(options.sax.strict, options.sax),
            compile_file = translate(readFileSync(file, 'utf-8'), lang, sax, fest_ns, escapeHTML),
            _getAttr = getAttr(compile_file, parser),
            _getExpr = getExpr(compile_file, parser),
            _getEval = getEval(compile_file, parser),
            attrs;

        function flush(name) {
            var section = {
                source: '',
                name: name
            };
            output.sections.push(section);
            return section;
        }

        parser.onopentag = function (node) {
            if (callback('opentag', node, section, callbacks)) return;

            push_debug_info(section, parser, file, node.name, options.debug);

            opentag = closetag(stack, node.local, section, opentag, context_name);

            if (node.ns[node.prefix] != fest_ns){
                attrs = compileAttributes(node.attributes);
                for (var i = 0; i < attrs.expr.length; i++) {
                    section.source += 'try{__fest_attrs[' + i + ']=__fest_escapeHTML(' + _getExpr(attrs.expr[i], 'expression #' + (i + 1) + ' in attribute "' +  attrs.name[i] + '"') + ')}catch(e){__fest_attrs[' + i + ']=""; __fest_log_error(e.message);}';
                }
                stack.push('html:' + node.name);
                stack.push(node.name in short_tags ? 'shorttag' : 'tag');
                opentag = true;
                section.source += '__fest_pushstr(' + context_name + ',"<' + node.name + attrs.text + '");';
                return;
            }
            
            if (!opentag && node.local == 'attributes') {
                throw new Error(file + "\n" + errorMessage('fest:attributes must be the first child', parser.line, compile_file));
            }

            if (node.local == 'attributes' && stack[stack.length - 1] == 'attributes') {
                throw new Error(file + "\n" + errorMessage('fest:attributes cannot be nested', parser.line, compile_file));
            }

            if (node.local == 'set' && stack.indexOf('set') !== -1) {
                throw new Error(file + "\n" + errorMessage('fest:set cannot be nested', parser.line, compile_file));
            }

            stack.push(node.local);

            switch (node.local){
                case 'element':
                    opentag = true;
                    section.source += '__fest_elementName="";';
                    section.source += 'try{__fest_elementName=' + _getAttr(node, 'select', 'expr') + ';';
                    section.source += 'if(typeof __fest_elementName !== "string"){__fest_log_error("Element name must be a string");__fest_elementName="div"}';
                    section.source += '}catch(e){__fest_elementName="div";__fest_log_error(e.message);}';
                    section.source += '__fest_element_stack.push(__fest_elementName);';
                    section.source += '__fest_pushstr(' + context_name + ',"<" + __fest_elementName);';
                    return;
                case 'template':
                    node.context_name = context_name;
                    context_name = (node.attributes.context_name ? _getAttr(node, 'context_name', 'var') : context_name);
                    if (context_name !== node.context_name){
                        section.source += 'var ' + context_name + '=' + node.context_name + ';';
                    }
                    return;
                case 'doctype':
                    section.source += '__fest_pushstr(' + context_name + ',"<!DOCTYPE ");';
                    return;
                case 'attribute':
                    section.source += '__fest_pushstr(' + context_name + '," ' + escapeJS(_getAttr(node, 'name')) + '=\\"");';
                    return;
                case 'comment':
                    section.source += '__fest_pushstr(' + context_name + ',"<!--");';
                    return;
                case 'cdata':
                    section.source += '__fest_pushstr(' + context_name + ',"<![CDATA[");';
                    return;
                case 'text':
                    section.source += node.attributes.value ? '__fest_pushstr(' + context_name + ',"' + escapeJS(_getAttr(node, 'value')) + '");' : '';
                    return;
                case 'space':
                    section.source += '__fest_pushstr(' + context_name + '," ");';
                    return;
                case 'if':
                    section.source += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false;__fest_log_error(e.message);}';
                    section.source += 'if(__fest_if){';
                    return;
                case 'choose':
                    choose[choose.length] = 0;
                    return;
                case 'when':
                    choose[choose.length - 1]++;
                    section.source += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false; __fest_log_error(e.message);}';
                    section.source += 'if(__fest_if){';
                    return;
                case 'otherwise':
                    return;
                case 'value':
                    node.__fest_output = node.attributes.output ? node.attributes.output.value : 'html';
                    if (!node.attributes.safe){
                        section.source += 'try{';
                    }
                    if (node.__fest_output === 'text'){
                        section.source += '__fest_pushstr(' + context_name + ',';
                    } else if(node.__fest_output === 'html' && stack.indexOf('html:script') != -1) {
                        section.source += '__fest_pushstr(' + context_name + ',__fest_escapeJS(';
                    } else if(node.__fest_output === 'js') {
                        section.source += '__fest_pushstr(' + context_name + ',__fest_escapeJS(';
                    } else {
                        section.source += '__fest_pushstr(' + context_name + ',__fest_escapeHTML(';
                    }
                    return;
                case 'script':
                    if (!node.attributes.safe){
                        section.source += 'try{';
                    }
                    if (node.attributes.src){
                        section.source += _getEval(readFileSync(dirname(file) + '/' + node.attributes.src.value, 'utf-8'));
                    }
                    return;
                case 'call':
                    section.source += 'try{__fest_pushstr(' + context_name + ',' + _getAttr(node, 'name', 'expr') + '(' + _getAttr(node, 'data', 'expr') + '))}catch(e){__fest_log_error(e.message)}';
                    return;
                case 'insert':
                    section.source += '__fest_pushstr(' + context_name + ',"' + escapeJS(readFileSync(dirname(file) + '/' + _getAttr(node, 'src'), 'utf-8')) + '");';
                    return;
                case 'each':
                    section.source += 'var ' + _getAttr(node, 'index', 'var') + (node.attributes.value ? ',' + _getAttr(node, 'value', 'var')  : '') + ';';
                    section.source += 'try{__fest_foreach=' + _getAttr(node, 'iterate', 'expr') + ' || {};}catch(e){__fest_foreach={};__fest_log_error(e.message);}';
                    section.source += 'for(' + _getAttr(node, 'index') + ' in __fest_foreach){';
                    if (node.attributes.value) {
                        section.source += _getAttr(node, 'value') + '=' + _getAttr(node, 'iterate') + '[' + _getAttr(node, 'index') + '];';
                    }
                    return;
                case 'foreach':
                    __fest_log_error('forearch deprecated use for');
                case 'for':
                    section.source += 'var ' + _getAttr(node, 'index', 'var') + (node.attributes.value ? ',' + _getAttr(node, 'value', 'var')  : '') + ',__fest_l' + counters.counter + ',__fest_from' + counters.counter + ',__fest_to' + counters.counter + ';';
                    if (node.attributes.iterate){
                        section.source += 'try{__fest_foreach=' + _getAttr(node, 'iterate', 'expr') + ' || [];}catch(e){__fest_foreach=[];__fest_log_error(e.message);}';
                        section.source += '__fest_l' + counters.counter + ' = (typeof __fest_foreach === "number" ? __fest_foreach : typeof __fest_foreach === "string" ? parseInt(__fest_foreach, 10) : __fest_foreach.length || 0);';
                        section.source += 'for(' + _getAttr(node, 'index') + ' = 0;' + _getAttr(node, 'index') + '<__fest_l' + counters.counter + ';' + node.attributes.index.value + '++){';
                        if (node.attributes.value) {
                            section.source += _getAttr(node, 'value') + '=' + _getAttr(node, 'iterate') + '[' + _getAttr(node, 'index') + '];';
                        }
                    } else {
                        section.source += 'try{__fest_from' + counters.counter + '=' + _getAttr(node, 'from', 'expr') + ';}catch(e){__fest_from' + counters.counter + '=0;__fest_log_error(e.message);}';
                        section.source += 'try{__fest_to' + counters.counter + '=' + _getAttr(node, 'to', 'expr') + ';}catch(e){__fest_to' + counters.counter + '=0;__fest_log_error(e.message);}';
                        section.source += 'for(' + _getAttr(node, 'index') + ' = __fest_from' + counters.counter + ';' + _getAttr(node, 'index') + '<=__fest_to' + counters.counter + ';' + _getAttr(node, 'index') + '++){';
                    }
                    counters.counter++;
                    return;
                case 'set':
                    section = flush(_getAttr(node, 'name'));
                    if (node.attributes.test){
                        section.source += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false; __fest_log_error(e.message)}';
                    } else {
                        section.source += '__fest_if=true;';
                    }
                    section.source += 'if(__fest_if){';
                    section.source += '__fest_blocks' + getName(_getAttr(node, 'name')) + '=function(' + context_name + ',params){';
                    section.source += 'if (typeof document === "undefined"){var document = {write:function(string){__fest_pushstr(' + context_name + ',string);}};}';
                    section.source += 'var __fest_result=[],__fest_str="",__fest_pushstr;';
                    section.source += '__fest_pushstr=function(ctx,str){__fest_str+=str};';
                    return;
                case 'get':
                    section.source += '__fest_result[__fest_result.length]=__fest_str;';
                    section.source += '__fest_str="";';
                    if (node.attributes.select){
                        section.source += 'try{__fest_select=' + _getAttr(node, 'select', 'expr') + '}catch(e){__fest_select==="__error__";__fest_log_error(e.message)}';
                        output.disable_sgo = true;
                    } else {
                        section.source += '__fest_select="' + escapeJS(_getAttr(node, 'name')) + '";';
                        output.uses[_getAttr(node, 'name')] = true;
                    }
                    section.source += '__fest_result[__fest_result.length]=function(' + context_name + ',params, __fest_select){';
                    section.source += 'return function(){';
                    section.source += 'return (__fest_select in __fest_blocks) ? __fest_blocks[__fest_select].call(__fest_self,' + context_name + ', params) : [];';
                    section.source += '};';
                    section.source += '};';
                    section.source += 'try{__fest_params=false';
                    return;
                case 'include':
                    if (node.attributes.context){
                        section.source += '__fest_contexts[__fest_contexts.length] = ' + context_name + ';';
                        section.source += 'try{' + context_name + '=' + _getAttr(node, 'context', 'expr') + '}catch(e){' + context_name + '={};__fest_log_error(e.message)};';
                    }
                    _compile({file: dirname(file) + '/' + _getAttr(node, 'src'), context_name:context_name, callbacks:callbacks, options:options, output:output, lang:lang});
                    section = flush();
                    if (node.attributes.context){
                        section.source += context_name + '=__fest_contexts.pop();';
                    }
                    return;
            }
        };

        parser.onclosetag = function () {
            var node = this.tag;

            if (callback('closetag', node, section, callbacks) !== false) return;

            opentag = closetag(stack, node.local, section, opentag, context_name);

            stack.pop();

            if (node.ns[node.prefix] != fest_ns){
                stack.pop();
                if (!(node.name in short_tags)){
                    section.source += '__fest_pushstr(' + context_name + ',"</' + node.name + '>");';
                }
                return;
            }
            switch (node.local){
                case 'element':
                    section.source += '__fest_elementName = __fest_element_stack[__fest_element_stack.length - 1];';
                    section.source += 'if(!(__fest_elementName in __fest_short_tags)){__fest_pushstr(' + context_name + ',"</" + __fest_elementName + ">")}';
                    section.source += '__fest_element_stack.pop();';
                    return;
                case 'doctype':
                    section.source += '__fest_pushstr(' + context_name + ',">");';
                    return;
                case 'comment':
                    section.source += '__fest_pushstr(' + context_name + ',"-->");';
                    return;
                case 'attribute':
                    section.source += '__fest_pushstr(' + context_name + ',"\\"");';
                    return;
                case 'cdata':
                    section.source += '__fest_pushstr(' + context_name + ',"]]>");';
                    return;
                case 'if':
                    section.source += '}';
                    return;
                case 'otherwise':
                    return;
                case 'foreach':
                case 'each':
                case 'for':
                    section.source += '}';
                    return;
                case 'choose':
                    (function(length){
                        for (var i = 0; i < length; i++){
                            section.source += '}';
                        }
                    })(choose.pop());
                    return;
                case 'when':
                    section.source += '}else{';
                    return;
                case 'value':
                    section.source += ')';
                    if (node.__fest_output !== 'text'){
                        section.source += ')';
                    }
                    if (!node.attributes.safe){
                        section.source += ';}catch(e){__fest_log_error(e.message + "' + this.line + '");}';
                    } else {
                        section.source += ';';
                    }
                    return;
                case 'set':
                    section.source += '__fest_result[__fest_result.length]=__fest_str;';
                    section.source += 'return __fest_result;';
                    section.source += '};}';
                    section = flush();
                    return;
                case 'get':
                    section.source += ';}catch(e){__fest_params={};__fest_log_error(e.message);}';
                    section.source += '__fest_result[__fest_result.length - 1]=__fest_result[__fest_result.length - 1](' + context_name + ',__fest_params, __fest_select);';
                    return;
                case 'script':
                    if (!node.attributes.safe){
                        section.source += '}catch(e){__fest_log_error(e.message);}';
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
            if (callback('text', text, section, callbacks) !== false) return;
            opentag = closetag(stack, 'text', section, opentag, context_name);
            if (evallist.indexOf(stack[stack.length - 1]) === -1){
                section.source += '__fest_pushstr(' + context_name + ',"' + escapeJS(text) + '");';
            } else if (stack[stack.length - 1] === 'get') {
                section.source += ' || ' + _getExpr(text);
            } else if (stack[stack.length - 1] === 'value') {
                section.source += _getExpr(text);
            } else {
                section.source += _getEval(text);
            }
        };
        parser.oncdata = function (cdata) {
            if (callback('cdata', cdata, section, callbacks) !== false) return;
            opentag = closetag(stack, 'cdata', section, opentag, context_name);
            if (evallist.indexOf(stack[stack.length - 1]) === -1){
                section.source += '__fest_pushstr(' + context_name + ',"' + escapeJS(cdata) + '");';
            } else if (stack[stack.length - 1] === 'get') {
                section.source += ' || ' + _getExpr(cdata);
            } else if (stack[stack.length - 1] === 'value') {
                section.source += _getExpr(cdata);
            } else {
                section.source += _getEval(cdata);
            }
        };
        parser.onend = function () {
            if (compile_file && !templateClosed) {
                throw new Error(file + "\n" + errorMessage('fest:template is not closed', parser.line, compile_file));
            }
        };

        if (compile_file){
            parser.write(compile_file);
        }
        parser.close();

        return output;
    }

    function finish_compile(file, options, name, lang){
        var callbacks = {}, template;
        name = name || '';

        options = options || {beautify: true, nothrow: false};
        options.sax = options.sax || {trim:true, xmlns:true};
        options.sax.strict = options.sax.strict || true;

        function build_template(output) {

            var source = '';
            output.sections.forEach(function (section) {
                if (output.disable_sgo || section.name === undefined || output.uses[section.name]) {
                    source += section.source;
                }
            });
            source = source.replace(/"\);__fest_pushstr\([^,]*,"/g, '');

            template  = 'function ' + name + '(__fest_context){"use strict";' +
                        'var __fest_self=this,__fest_str="",__fest_result=[],__fest_contexts=[],__fest_attrs=[],__fest_select,__fest_if,__fest_foreach,__fest_from,__fest_to,__fest_html = "",' +
                        '__fest_blocks={},__fest_params,__fest_log_error,___fest_log_error,__fest_elementName,__fest_pushstr,' +
                        '__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",' +
                        '__fest_htmlchars=/' + htmlchars.source + '/g,' +
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
            template += source;
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
            build_template(_compile({file:file, context_name:'__fest_context', callbacks:callbacks, options:options, lang:lang}));
            if (options.beautify) template = js_beautify(template);
        } catch (e) {
            if (options && !options.nothrow) {
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
