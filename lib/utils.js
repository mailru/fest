var path = require('path'),
	fs = require('fs'),
	po = require('./po');

exports.validate = function (xml) {
	'use strict';

	var sax = require('./sax'),
		parser = sax.parser(true, {xmlns: true}),
		errors = [];
	parser.onerror = function (err) {
		errors.push(err);
		this.error = null;
	};
	parser.write(xml);
	parser.close();

	return errors.length ? errors : true;
};

exports.abs_path = function(f) {
	/* Resolve absolute pathname. */
	if (f[0] === '~' && f[1] === path.sep) {
		// don't forget about HOME: '~'
		var homedir = process.env.HOME || process.env.USERPROFILE;
		f = homedir + f.slice(1);
	}
	return path.resolve(f);  // convert any path to absolute (relative to current work dir)
};

exports.preparePoFile = function (messages) {
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

	return contents;
};

exports.writePoFile = function (file, messages) {
	fs.writeFileSync(file, exports.preparePoFile(messages), 'utf8');
};


exports.getLocalization = function (options) {
	var pof = po.load(options.translate),
		errors = [], str, err, messages;

	options.plural = pof.plural;
	messages = pof.toJSON();

	for (var k in messages) {
		str = messages[k];
		err = exports.validate('<template>' + str + '</template>');

		if (true !== err) {

			errors.push({
				id: k,
				str: str,
				errors: err
			});

		}

	}

	if (errors.length) {

		errors.forEach(function (msg) {
			console.error('>>>\nmsg_id: ' + msg.id);
			console.error('msg_str: ' + msg.str);
			console.error('errors: ' + msg.errors.join('; ') + '\n<<<');
		});

		throw 'TRANSLATION FAILED';
	}


	return messages;
};

exports.getLanguage = function (options) {
	return po.load(options.translate).headers['Language'];
};
