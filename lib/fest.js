var fs = require('fs'),
	compile = require('./compile'),
	utils = require('./utils'),
	compile_tmpl = require('./compile_tmpl');

function Fest() {
}


Fest.prototype = {

	extract: function (file, options) {
		var messages = {};
		this.compile(file, options, messages);
		return messages;
	},

	compile: function (file, options, messages) {
		var ret;

		messages = messages || {};
		options = options || {};

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


		if (options.translate) {
			options.messages = utils.getLocalization(options);
		}

		ret = compile(file, options);

		if (options.po && messages) {
			utils.writePoFile(options.po, messages);
		}

		if (options.extract) {
			return messages;
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
