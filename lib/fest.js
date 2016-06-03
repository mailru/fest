'use strict';

var fs = require('fs'),
	compile = require('./compile'),
	utils = require('./utils'),
	compile_tmpl = require('./compile_tmpl');


function toHTML(fragment) {
	if ('string number boolean'.indexOf(typeof fragment) > -1) {
		return fragment;
	}

	const tag = fragment.tag;
	const attrs = fragment.attrs;
	const children = fragment.children;

	if (!tag) {
		return children.map(toHTML).join('');
	} else if (tag === '<') {
		return children;
	} else if (tag === '!') {
		return `<!--${children}-->`;
	}

	let html = `<${tag}`;

	if (attrs) {
		html += ` ${Object.keys(attrs).map(name => `${name}="${attrs[name]}"`).join(' ')}`;
	}

	if (compile.short_tags[tag]) {
		return `${html.trim()}/>`;
	} else {
		html += '>';

		if (children) {
			html += [].concat(children).map(toHTML).join('');
		}

		return `${html}</${tag}>`;
	}
}

module.exports = {
	toHTML,
	compile_tmpl,

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

		if (options && options.mode === 'vdom') {
			return function (json) {
				var fragment = template(json);

				return toHTML(fragment);
			};
		}

		return template(json);
	}
};
