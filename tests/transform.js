var fest = require('../lib/fest');
module.exports = function(mode) {
	mode = mode || 'string';
	return function(file, json, thisArg, promise, strict, options, lang, callbacks){
		options = options || null;
		options = options || {};
		options.beautify = true;
		options.mode = mode;
		var template = fest.compile(__dirname + file, options, lang, callbacks);
		// console.log(template);
		template = (new Function('return ' + template))();
		setTimeout(function(){promise.emit('success', template.call(thisArg, json));}, 0);
	}
}