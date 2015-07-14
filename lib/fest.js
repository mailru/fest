var fs = require('fs'),
	compile = require('./compile'),
	utils = require('./utils'),
	compile_tmpl = require('./compile_tmpl');

function Fest() {
}


Fest.prototype = {

	compile: function (file, options) {
		var messages, ret;

		options = options || {};
		
		if (options.po) {
			messages = {};

			options.events = {

				message: function (event) {
					var id = event.id,
						context = event.context,
						reference = event.reference,
						key = id + (context ? context : '');

					if (key in messages) {
						messages[key].reference.push(reference);
					} else {
						messages[key] = {
							id: id,
							context: context,
							reference: [reference]
						};
					}
				}

			};

		}

		if (options.translate) {
			options.messages = utils.getLocalization(options);
		}

		ret = compile(file, options);

		if (messages) {
			utils.writePoFile(options.po, messages);
		}

		return ret;
	},

	render: function (file, json, options) {
		var compiled = this.compile(file, options),
			template = (new Function('return ' + compiled))();

		return template(json);
	},

	compile_tmpl: compile_tmpl
};

module.exports = new Fest();
