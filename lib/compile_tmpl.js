function compile_tmpl(file, source, wrapper, dir) {
	var wrappers = {
		fest: ";(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['##file##']=##source##})();",
		loader: ";(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['##file##']=##source##; if(x.jsLoader!==undefined&&x.jsLoader.loaded!==undefined&&typeof x.jsLoader.loaded==='function'){x.jsLoader.loaded('{festTemplate}##file##')};})();",
		source: "##source##",
		amd_ajs: "define('festTemplate/##file##', [], function() {var x=Function('return this')();if(!x.fest)x.fest={};x.fest['##file##']=##source##;return x.fest['##file##'];});",
		amd: "define(function(){return ##source##});",
		amd_domains: "define('##file##', [], function() {var x=Function('return this')();if(!x.fest)x.fest={};x.fest['##file##']=x.fest['##file_short##']=##source##;return x.fest['##file##'];});",
		variable: "var ##file##=##source##;"
	};

	if (/\:basename$/.test(wrapper)) {
		wrapper = wrapper.slice(0, -9);
		file = file.replace(/.*\//g, '');
	}

	file = file.replace(/\'/g, "\\'").replace(/\"/g, '\\"').replace(/\\/g, '\\');

	var fileShort = file;

	if (wrapper === 'amd_domains') { // нормальный путь

	    var packageName = dir.replace(/\/.*(mail\.[^\/]+)\/fest.*/, "$1");

	    file = packageName + '/fest/' + file;

	    if (packageName !== 'mail.core') { // для обратной совместимости
			fileShort = file;
	    }
	}

	return wrappers[wrapper || 'fest']
	    .replace(/##file##/g, file)
	    .replace(/##file_short##/g, fileShort)
	    .replace(/##source##/g, source);
}

if (typeof module !== 'undefined' && module.exports){
	module.exports = compile_tmpl;
}
