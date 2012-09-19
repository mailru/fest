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
		var wrapperFile = __dirname + '/wrappers/' + wrapper;

		try {
			var wrapperTemplate = fs.readFileSync(wrapperFile, 'utf-8');

			file = file.replace(/\'/g, "\\'").replace(/\"/g, '\\"').replace(/\\/g, '\\');

			return wrapperTemplate.replace(/##file##/g, file).replace(/##source##/g, source);

		} catch(e) {
			console.error('Postcompile wrapper template file '+wrapperFile+' dosn\'t exists')
			process.exit();
		}
	}
};

module.exports = new Fest();
