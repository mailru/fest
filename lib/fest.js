var fs = require('fs'),
	compile = require('./compile'),
	compile_tmpl = require('./compile_tmpl');

function Fest() {
}


Fest.prototype = {

	compile: function (file, options) {
		var messages,
			ret;

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

		ret = compile(file, options);

		if (messages) {
			this.writePoFile(options.po, messages);
		}

		return ret;
	},

	render: function (file, json, options) {
		var compiled = this.compile(file, options),
			template = (new Function('return ' + compiled))();

		return template(json);
	},

	compile_tmpl: compile_tmpl,

	writePoFile: function (file, messages) {
		var contents = '#\nmsgid ""\nmsgstr ""\n"Content-Type: text/plain; charset=UTF-8\\n"\n\n',
			key,
			msg;

		for (key in messages) {
			msg = messages[key];

			for (var i = 0, c = msg.reference.length; i < c; i++) {
				contents += '#: ' + msg.reference[i] + '\n';
			}

			if (msg.context) {
				contents += 'msgctxt "' + escape(msg.context) + '"\n';
			}

			contents += 'msgid "' + msg.id + '"\nmsgstr ""\n\n'
		}

		fs.writeFileSync(file, contents, 'utf8');
	}

};

module.exports = new Fest();
