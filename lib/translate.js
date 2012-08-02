function (template, lang, sax, fest_ns){
    "use strict";
    var parser = sax.parser(true, {trim:false, xmlns:true}),
        opennode = false,
        lang = 0,
        lang_stack = [],
        result = '';

    function closetag(){
        if (opennode){
            opennode = false;
            result += '>';
        }
    }

    parser.onprocessinginstruction = function(instruction){
        result += '<?' + instruction.name + ' ' + instruction.body + '?>';
    }
    parser.onopentag = function(node){
        var i, l;
        closetag();
        if (node.ns[node.prefix] === fest_ns && node.local === 'lang'){
            lang++;
            return;
        }
        result += '<' + node.name;
        opennode = true;
        for (i in node.attributes){
            result += ' ' + i + '="' + node.attributes[i].value + '"';
        }
    }
    parser.ontext = parser.oncdata = function(text){
        if (lang){
            lang_stack.push(text);
            return;
        }
        closetag();
        result += text;
    }
    parser.onclosetag = function(node){
        node = this.tag;
        closetag();
        if (node.ns[node.prefix] === fest_ns && node.local === 'lang'){
            lang--;
            return;
        }
        result += '</' + node.name + '>'
    }
    parser.write(template);
    //console.log(result);
    return result;
}

