var fs = require('fs'),
	compile = require('./compile');

var Fest = function(){
};

Fest.prototype = {
	compile: compile,

	render: function (file, json, options) {
		var compiled = this.compile(file, options),
			template = (new Function('return ' + compiled))();
		return template(json);
	},

	compileTpl: function(file, source, wrapper) {
		switch(wrapper) {
			case 'not_anonymous': 
				return "var " + file + "=" + source;

			case 'anonymous':
				return source;

			case 'jsLoader':
				return ';(function(){var x=Function("return this")();if(!x.fest)x.fest={};x.fest["'+file+'"]='+source+'})();jsLoader.loaded(\'{festTemplate}'+file+'\')';

			case 'fest':
			default:
				return ';(function(){var x=Function("return this")();if(!x.fest)x.fest={};x.fest["'+file+'"]='+source+'})();';
		}
	}
};

module.exports = new Fest();
