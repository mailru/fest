function compile_tmpl(file, source, wrapper) {
	var wrappers = {
		fest: ";(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['##file##']=##source##})();",
		loader: ";(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['##file##']=##source##; if(x.jsLoader!==undefined&&x.jsLoader.loaded!==undefined&&typeof x.jsLoader.loaded==='function'){x.jsLoader.loaded('{festTemplate}##file##')};})();",
		source: "##source##",
		variable: "var ##file##=##source##;"
	}

	file = file.replace(/\'/g, "\\'").replace(/\"/g, '\\"').replace(/\\/g, '\\');
	return wrappers[wrapper || 'fest'].replace(/##file##/g, file).replace(/##source##/g, source);
}

if (typeof module !== 'undefined' && module.exports){
	module.exports = compile_tmpl;
}
