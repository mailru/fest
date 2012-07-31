function (template, lang, sax){
    "use strict";
    var parser = sax.parser(true, {trim:false, xmlns:true}),
        opennode = false,
        result = '';

    function closetag(){
        if (opennode){
            opennode = false;
            result += '>';
        }
    }

    parser.onprocessinginstruction = function(instruction){
        result += '<?' + instruction.name + ' ' + instruction.body + ' ?>';
    }
    parser.onopentag = function(node){
        var i, l;
        closetag();
        result += '<' + node.name;
        opennode = true;
        for (i in node.attributes){
            result += ' ' + i + '="' + node.attributes[i].value + '"';
        }
    }
    parser.ontext = parser.oncdata = function(text){
        closetag();
        result += text;
    }
    parser.onclosetag = function(node){
        node = this.tag;
        result += '</' + node.name + '>'
    }
    parser.write(template);
    //console.log(result);
    return template;
}

