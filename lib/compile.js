var fs = require('fs'),
    path = require('path'),
    defer = require('./defer'),
    sax = require('./sax-js');

var fest_ns = 'http://fest.mail.ru';

var short_tags = {area:  true, base:  true, br:  true, col:  true, command:  true,
                  embed:  true, hr:  true, img:  true, input:  true, keygen:  true,
                  link:  true, meta:  true, param:  true, source:  true, wbr:  true };

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

function callback(type, data, fn, counters, callbacks, promise){
    if (typeof callbacks[type] !== 'function'){
        return false;
    }
    var result = callbacks[type](data);
    if (result === false){
        return false;
    }
    if (typeof result === 'string'){
        fn[fn.length - 1] += result;
        return true;
    }
    counters.promises++;
    result.then(function(fn, index){
        return function(str){
            fn[index] = str;
            resolve(promise, --counters.promises, fn);
        };
    }(fn, fn.length - 1));
    fn[fn.length] = '';
    return true;
}

function closetag(stack, name, fn, opentag){
    if (stack.indexOf('attribute') === -1 && opentag && ['if', 'when', 'choose', 'otherwise', 'attribute'].indexOf(name) === -1){
        if (stack[stack.length - 1] === 'shorttag'){
            fn[fn.length - 1] += '__fest_str+="/>";';
        } else {
            fn[fn.length - 1] += '__fest_str+=">";';
        }
        return false;
    }
    return opentag;
}

function _compile (file, context_name, callbacks, strict, options){
    var promise = defer(),
        counters = {counter: 0, promises: 1},
        choose = [],
        fn = [''],
        stack = [],
        opentag = false,
        parser = sax.parser(strict, options);

    parser.onopentag = function (node) {
        if (callback('opentag', node, fn, counters, callbacks, promise)) return;

        opentag = closetag(stack, node.local, fn, opentag);

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
                    fn[fn.length - 1] += fs.readFileSync(path.dirname(file) + '/' + node.attributes.src.value, 'utf-8');
                }
                return;
            case 'insert':
                fn[fn.length - 1] += '__fest_str += "' + fs.readFileSync(path.dirname(file) + '/' + node.attributes.src.value, 'utf-8').replace(/\n/g, '\\n') + '";';
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
                counters.promises++;
                _compile(path.dirname(file) + '/' + node.attributes.src.value, context_name, callbacks, strict, options)
                    .then(function(fn, index){return function(template){
                        fn[index] += template;
                        resolve(promise, --counters.promises, fn);
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
        if (callback('closetag', node, fn, counters, callbacks, promise) !== false) return;

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
        if (callback('text', text, fn, counters, callbacks, promise) !== false) return;
        opentag = closetag(stack, 'text', fn, opentag);
        if (evallist.indexOf(stack[stack.length - 1]) === -1){
            fn[fn.length - 1] += '__fest_str+="' + text.replace(/\n/g, '\\n').replace(/\r/g, '').replace(/"/g, '\\"') + '";';
        } else if (stack[stack.length - 1] === 'get') {
            fn[fn.length - 1] += ' || ' + text;
        } else {
            fn[fn.length - 1] += text;
        }
    };
    parser.onopencdata = function(){
        if (callback('opencdata', fn, counters, callbacks, promise) !== false) return;
    };
    parser.oncdata = function (cdata) {
        if (callback('cdata', cdata, fn, counters, callbacks, promise) !== false) return;
        opentag = closetag(stack, 'cdata', fn, opentag);
        if (evallist.indexOf(stack[stack.length - 1]) === -1){
            fn[fn.length - 1] += '__fest_str+="' + cdata.replace(/\n/g, "\\n").replace(/\r/g, '').replace(/"/g, '\\"') + '";';
        } else if (stack[stack.length - 1] === 'get') {
            fn[fn.length - 1] += ' || ' + cdata;
        } else {
            fn[fn.length - 1] += cdata;
        }
    };
    parser.onclosecdata = function(){
        if (callback('closecdata', fn, counters, callbacks, promise) !== false) return;
    };
    parser.onend = function () {
        resolve(promise, --counters.promises, fn);
    };
    fs.readFile(file, 'utf-8', function(err, data){
        if (err){
            console.error(err.message);
            process.exit(0);
        }
        parser.write(data).close();
    });


    return promise;
}
module.exports = function(file, strict, options){
    var promise = defer(), callbacks = {};

    promise.intercept = function(type, callback){
        callbacks[type] = callback;
        return this;
    };

    var compile = _compile(file, '__fest_context', callbacks, strict || true, options || {trim:true, xmlns:true});

    compile.then(function(template){
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
        template = 'function(__fest_context){"use strict";' +
            'var __fest_str="",__fest_result=[],__fest_contexts=[],__fest_if,__fest_foreach,__fest_html = "",' +
            '__fest_blocks={},__fest_params,__fest_error = (typeof console !== "undefined" ? function(){return console.error.apply(console,arguments);} : function(e){__fest_html += e.message}),' +
            '__fest_htmlchars=/[&<>\\"]/g,' +
            '__fest_htmlhash={\'&\':\'&amp;\',\'<\':\'&lt;\',\'>\':\'&gt;\',\'"\':\'&quot;\'},' +
            '__fest_jschars=/[\\\'\\"\\/\\n\\t\\b\\f]/g,' +
            '__fest_jshash=' + JSON.stringify(__fest_jshash) + ';' +
            'function __fest_replaceHTML(char){return __fest_htmlhash[char];}' +
            'function __fest_replaceJS(char){return __fest_jshash[char];}' +
            'function __fest_escapeJS(s){' +
            'if (typeof s!=="string") s+="";' +
            'return s.replace(__fest_jschars,__fest_replaceJS);}' +
            'function __fest_escapeHTML(s){' +
            'if (typeof s!=="string") s+="";' +
            'return s.replace(__fest_htmlchars,__fest_replaceHTML);}' +
            'if (typeof document === "undefined"){var document = {write:function(string){__fest_str+=string;}};}'+
            template;
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
        promise.resolve(template);
    });

    promise.on = compile.on;

    return promise;
};
