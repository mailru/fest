var compile = (function(){
    "use strict";
    var fs = null, path = null, dirname;
    var log = (typeof __fest_error !== 'undefined' ? __fest_error : console.log);
    if (typeof require === 'function'){
        fs = require('fs');
    }

    var readFileSync = function(file, encoding){
        var result = '',
            read_file = (typeof __read_file === 'function' ? __read_file : fs.readFileSync);
        try {
            result = read_file(file, encoding);
        }catch (e){
            log('error open file "' + file + '", ' + e.message);
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

    function getName(name){
        if (/^[a-zA-Z_]+$/.test(name)){
            return '.' + name;
        } else {
            return '["' + name + '"]';
        }
    }


    function resolve(promise, promises, fn){
        if (promises === 0){
            promise.resolve(fn.join('').replace(/";__fest_str\+="/g, ''));
        }
    }

    function compileAttributes(attrs){
        var i, result = '';
        for (i in attrs){
            result += ' ' + i + '=\\"' + attrs[i].value + '\\"';
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

    function closetag(stack, name, fn, opentag){
        if (!opentag){
            return false;
        }
        if (stack.indexOf('attributes') >= 0 || name === 'attributes'){
            return opentag;
        }
        if (stack[stack.length - 1] === 'shorttag'){
            fn[fn.length - 1] += '__fest_str+="/>";';
        } else {
            fn[fn.length - 1] += '__fest_str+=">";';
        }
        return false;
    }

    function _compile (file, context_name, callbacks, options, cb){
        var counters = {counter: 0, promises: 1},
            choose = [],
            fn = [''],
            stack = [],
            opentag = false,
            skip = false,
            parser = sax.parser(options.sax.strict, options.sax);

        parser.onopentag = function (node) {
            if (callback('opentag', node, fn, callbacks)) return;
            
            opentag = closetag(stack, node.local, fn, opentag);
            
            if (!opentag && node.local == 'attributes') {
                log('fest:attributes must be the first child, ignored');
                skip = true;
            }
            if (skip) return;
            
            if (node.ns[node.prefix] != fest_ns){
                stack.push(node.name in short_tags ? 'shorttag' : 'tag');
                opentag = true;
                fn[fn.length - 1] += '__fest_str+="<' + node.name + compileAttributes(node.attributes) + '";';
                return;
            }
            stack.push(node.local);
            switch (node.local){
                case 'template':
                    node.context_name = context_name;
                    context_name = (node.attributes.context_name ? node.attributes.context_name.value : context_name);
                    if (context_name !== node.context_name){
                        fn[fn.length - 1] += 'var ' + context_name + '=' + node.context_name + ';';
                    }
                    return;
                case 'doctype':
                    fn[fn.length - 1] += '__fest_str+="<!DOCTYPE ";';
                    return;
                case 'attribute':
                    fn[fn.length - 1] += '__fest_str+=" ' + node.attributes.name.value + '=\\"";';
                    return;
                case 'comment':
                    fn[fn.length - 1] += '__fest_str+="<!--";';
                    return;
                case 'cdata':
                    fn[fn.length - 1] += '__fest_str+="<![CDATA[";';
                    return;
                case 'text':
                    fn[fn.length - 1] += node.attributes.value ? '__fest_str+="' + node.attributes.value.value + '";' : '';
                    return;
                case 'space':
                    fn[fn.length - 1] += '__fest_str+=" ";';
                    return;
                case 'if':
                    fn[fn.length - 1] += 'try{__fest_if=' + node.attributes.test.value + '}catch(e){__fest_if=false;__fest_error(e.message);}';
                    fn[fn.length - 1] += 'if(__fest_if){';
                    return;
                case 'choose':
                    choose[choose.length] = 0;
                    return;
                case 'when':
                    choose[choose.length - 1]++;
                    fn[fn.length - 1] += 'try{__fest_if=' + node.attributes.test.value + '}catch(e){__fest_if=false; __fest_error(e.message);}';
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
                        fn[fn.length - 1] += '__fest_str+=';
                    } else if(node.__fest_output === 'js') {
                        fn[fn.length - 1] += '__fest_str+=__fest_escapeJS(';
                    } else {
                        fn[fn.length - 1] += '__fest_str+=__fest_escapeHTML(';
                    }
                    return;
                case 'script':
                    if (!node.attributes.safe){
                        fn[fn.length - 1] += 'try{';
                    }
                    if (node.attributes.src){
                        fn[fn.length - 1] += readFileSync(dirname(file) + '/' + node.attributes.src.value, 'utf-8');
                    }
                    return;
                case 'insert':
                    fn[fn.length - 1] += '__fest_str+="' + readFileSync(dirname(file) + '/' + node.attributes.src.value, 'utf-8')
                        .replace(/\\/g, '\\\\')
                        .replace(/"/g, '\\"')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '') + '";';
                    return;
                case 'for':
                    fn[fn.length - 1] += 'var ' + node.attributes.index.value + ';';
                    fn[fn.length - 1] += 'try{__fest_foreach=' + node.attributes.iterate.value + ' || {};}catch(e){__fest_foreach={};__fest_error(e.message);}';
                    fn[fn.length - 1] += 'for(' + node.attributes.index.value + ' in __fest_foreach){';
                    return;
                case 'foreach':
                    fn[fn.length - 1] += 'var ' + node.attributes.index.value + ', __fest_l' + counters.counter + ';';
                    fn[fn.length - 1] += 'try{__fest_foreach=' + node.attributes.iterate.value + ' || [];}catch(e){__fest_foreach=[];__fest_error(e.message);}';
                    fn[fn.length - 1] += '__fest_l' + counters.counter + ' = (typeof __fest_foreach === "number" ? __fest_foreach : typeof __fest_foreach === "string" ? parseInt(__fest_foreach, 10) : __fest_foreach.length || 0);';
                    fn[fn.length - 1] += 'for(' + node.attributes.index.value + ' = 0;' + node.attributes.index.value + '<__fest_l' + counters.counter + ';' + node.attributes.index.value + '++){';
                    counters.counter++;
                    return;
                case 'set':
                    if (node.attributes.test){
                        fn[fn.length - 1] += 'try{__fest_if=' + node.attributes.test.value + '}catch(e){__fest_if=false; __fest_error(e.message)}';
                    } else {
                        fn[fn.length - 1] += '__fest_if=true;';
                    }
                    fn[fn.length - 1] += 'if(__fest_if){';
                    fn[fn.length - 1] += '__fest_blocks' + getName(node.attributes.name.value) + '=function(' + context_name + ',params){';
                    fn[fn.length - 1] += 'if (typeof document === "undefined"){var document = {write:function(string){__fest_str+=string;}};}';
                    fn[fn.length - 1] += 'var __fest_result=[],__fest_str="";';
                    return;
                case 'get':
                    fn[fn.length - 1] += '__fest_result[__fest_result.length]=__fest_str;';
                    fn[fn.length - 1] += '__fest_str="";';
                    fn[fn.length - 1] += '__fest_result[__fest_result.length]=function(' + context_name + ',params){';
                    fn[fn.length - 1] += 'return function(){return ("' + node.attributes.name.value + '" in __fest_blocks) ? __fest_blocks' + getName(node.attributes.name.value) + '(' + context_name + ', params) : [];};';
                    fn[fn.length - 1] += '};';
                    fn[fn.length - 1] += 'try{__fest_params=false';
                    return;
                case 'include':
                    if (node.attributes.context){
                        fn[fn.length - 1] += '__fest_contexts[__fest_contexts.length] = ' + context_name + ';';
                        fn[fn.length - 1] += 'try{' + context_name + '=' + node.attributes.context.value + '}catch(e){' + context_name + '={};__fest_error(e.message)};';
                    }
                    _compile(dirname(file) + '/' + node.attributes.src.value, context_name, callbacks, options,
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
            
            if (skip && node.local == 'attributes') {
                skip = false;
                return;
            }            
            if (skip) return;
          
            if (callback('closetag', node, fn, callbacks) !== false) return;

            opentag = closetag(stack, node.local, fn, opentag);

            stack.pop();
            if (node.ns[node.prefix] != fest_ns){
                if (!(node.name in short_tags)){
                    fn[fn.length - 1] += '__fest_str+="</' + node.name + '>";';
                }
                return;
            }
            switch (node.local){
                case 'doctype':
                    fn[fn.length - 1] += '__fest_str+=">";';
                    return;
                case 'comment':
                    fn[fn.length - 1] += '__fest_str+="-->";';
                    return;
                case 'attribute':
                    fn[fn.length - 1] += '__fest_str+="\\"";';
                    return;
                case 'cdata':
                    fn[fn.length - 1] += '__fest_str+="]]>";';
                    return;
                case 'if':
                    fn[fn.length - 1] += '}';
                    return;
                case 'otherwise':
                    return;
                case 'foreach':
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
                    if (node.__fest_output !== 'text'){
                        fn[fn.length - 1] += ');';
                    }
                    if (!node.attributes.safe){
                        fn[fn.length - 1] += '}catch(e){__fest_error(e.message);}';
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
                    fn[fn.length - 1] += ';}catch(e){__fest_params={};__fest_error(e.message);}';
                    fn[fn.length - 1] += '__fest_result[__fest_result.length - 1]=__fest_result[__fest_result.length - 1](' + context_name + ',__fest_params);';
                    return;
                case 'script':
                    if (!node.attributes.safe){
                        fn[fn.length - 1] += '}catch(e){__fest_error(e.message);}';
                    }
                    return;
                case 'template':
                    context_name = node.context_name;
                    return;
            }
        };
        var evallist = ['value', 'script', 'get', 'script'];
        parser.ontext = function (text) {
            if (skip) return;
          
            if (callback('text', text, fn, callbacks) !== false) return;
            opentag = closetag(stack, 'text', fn, opentag);
            if (evallist.indexOf(stack[stack.length - 1]) === -1){
                fn[fn.length - 1] += '__fest_str+="' + text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '').replace(/"/g, '\\"') + '";';
            } else if (stack[stack.length - 1] === 'get') {
                fn[fn.length - 1] += ' || ' + text;
            } else {
                fn[fn.length - 1] += text;
            }
        };
        parser.oncdata = function (cdata) {
            if (skip) return;
               
            if (callback('cdata', cdata, fn, callbacks) !== false) return;
            opentag = closetag(stack, 'cdata', fn, opentag);
            if (evallist.indexOf(stack[stack.length - 1]) === -1){
                fn[fn.length - 1] += '__fest_str+="' + cdata.replace(/\\/g, '\\\\').replace(/\n/g, "\\n").replace(/\r/g, '').replace(/"/g, '\\"') + '";';
            } else if (stack[stack.length - 1] === 'get') {
                fn[fn.length - 1] += ' || ' + cdata;
            } else {
                fn[fn.length - 1] += cdata;
            }
        };
        parser.onend = function () {
            cb(fn.join('').replace(/";__fest_str\+="/g, ''));
        };
        parser.write(readFileSync(file, 'utf-8')).close();
    }
    function finish_compile(file, options, name){
        var callbacks = {}, template;
        name = name || '';
        
        options = options || {beautify: true};
        options.sax = options.sax || {trim:true, xmlns:true};
        options.sax.strict = options.sax.strict || true;
        
        _compile(file, '__fest_context', callbacks, options, function(result){
            
            var __fest_jshash = {
                "\"":"\\\"",
                "\\":"\\\\",
                "/" :"\\/",
                "\n":"\\n",
                "\t":"\\t",
                "\b":"\\b",
                "\f":"\\f",
                "'" :"\\'"
            };
            template = 'function ' + name + '(__fest_context, __fest_error){"use strict";' +
                'var __fest_str="",__fest_result=[],__fest_contexts=[],__fest_if,__fest_foreach,__fest_html = "",' +
                '__fest_blocks={},__fest_params,' +
                '__fest_htmlchars=/[&<>\\"]/g,' +
                '__fest_htmlhash={\'&\':\'&amp;\',\'<\':\'&lt;\',\'>\':\'&gt;\',\'"\':\'&quot;\'},' +
                '__fest_jschars=/[\\\'\\"\\/\\n\\t\\b\\f]/g,' +
                '__fest_jshash=' + JSON.stringify(__fest_jshash) + ';' +
                'if(typeof __fest_error === "undefined"){__fest_error = function(){return console.error.apply(console,arguments);};}' +
                'function __fest_replaceHTML(char){return __fest_htmlhash[char];}' +
                'function __fest_replaceJS(char){return __fest_jshash[char];}' +
                'function __fest_escapeJS(s){' +
                'if (typeof s!=="string") s+="";' +
                'return s.replace(__fest_jschars,__fest_replaceJS);}' +
                'function __fest_escapeHTML(s){' +
                'if (typeof s!=="string") s+="";' +
                'return s.replace(__fest_htmlchars,__fest_replaceHTML);}' +
                'if (typeof document === "undefined"){var document = {write:function(string){__fest_str+=string;}};}'+
                result;
            template += '__fest_result[__fest_result.length]=__fest_str;';
            template += 'if(__fest_result.length === 1){return __fest_result[0]}';
            template += 'function setblocks(list){';
            template += 'var __fest_i,__fest_l;';
            template += 'for (__fest_i=0,__fest_l=list.length;__fest_i<__fest_l;__fest_i++){';
            template += 'if (typeof list[__fest_i]==="string"){__fest_html+=list[__fest_i];}';
            template += 'else{setblocks(list[__fest_i]());}';
            template += '}';
            template += '}';
            template += 'setblocks(__fest_result);';
            template += 'return __fest_html;}';
        });

        if (options.beautify) template = js_beautify(template);

        return template;
    }
    if (typeof module !== 'undefined' && module.exports){
        module.exports = finish_compile;
    } else {
        return finish_compile;
    }
})();

