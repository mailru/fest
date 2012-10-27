function (template, lang, sax, fest_ns, escapeHTML){
	"use strict";
	var parser = sax.parser(true, {trim:false, xmlns:true}),
		opennode = false,
		lang = 0,
		stack = [],
		result = '',
		lang_xml = [];

	function closetag(){
		if (opennode){
			opennode = false;
			if (lang){
				lang_xml[lang_xml.length - 1] += '>';
			} else {
				result += '>';
			}
		}
	}

	parser.onprocessinginstruction = function(instruction){
		result += '<?' + instruction.name + ' ' + instruction.body + '?>';
	}

	parser.onopentag = function(node){
		var i, l, xml;
		closetag();
		if (node.ns[node.prefix] === fest_ns && node.local === 'lang'){
			lang_xml.push('');
			lang++;
		}
		xml = '<' + node.name;
		opennode = true;
		for (i in node.attributes){
			xml += ' ' + i + '="' + escapeHTML(node.attributes[i].value) + '"';
		}
		if (lang){
			lang_xml[lang_xml.length - 1] += xml;
		} else {
			result += xml;
		}
	}

	parser.ontext = function(text){
		var xml;
		closetag();
		xml = escapeHTML(text);
		if (lang){
			lang_xml[lang_xml.length - 1] += xml;
		} else {
			result += xml;
		}
	}

	parser.oncdata = function(text){
		var xml;
		closetag();
		xml = '<![CDATA[' + text + ']]>';
		if (lang){
			lang_xml[lang_xml.length - 1] += xml;
		} else {
			result += xml;
		}
	}

	parser.onclosetag = function(node){
		var xml;
		node = this.tag;
		closetag();
		xml = '</' + node.name + '>';
		if (lang){
			lang_xml[lang_xml.length - 1] += xml;
		} else {
			result += xml;
		}
		if (node.ns[node.prefix] === fest_ns && node.local === 'lang'){
			lang--;
			if (lang !== 0){
				lang_xml[lang_xml.length - 2] += lang_xml.pop();
			} else {
				result += lang_xml.pop();
			}
		}
	}

	parser.write(template);

	closetag();
	//console.log(result);
	//console.log(lang_xml);
	return result;
}

