function CodeChunk(section) {
	this.source = [];
	this.section = section;
}


CodeChunk.prototype = /** @lends CodeChunk.prototype */ {
	vars: function (name, desc) {
		var vars = {};

		if (desc) {
			vars[name] = desc;
		} else {
			vars = name;
		}

		Object.keys(vars).forEach(function (name) {
			var desc = vars[name];

			this.add(
				'try{' + name + '=' + desc.value + '}' +
				'catch(e){ ' + name + '=' + JSON.stringify(desc.defaults) + ';__fest_log_error(e.message);}'
			);
		}, this);

		return this;
	},


	add: function (code, type) {
		if (typeof code === 'function') {
			code = code.toString();
			code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}') - 1);
		}

		if (type) {
			this.source[type] = this.source[type] || [];
			this.source[type].push(code);
		} else {
			this.source.push(code);
		}

		if (this.section) {
			this.section.source += code;
		}

		return this;
	},


	openPushStr: function () {
		return this.add('__fest_pushstr(__fest_context,');
	},


	closePushStr: function () {
		return this.add(');');
	},


	pushStr: function (value, stringify) {
		if (stringify) {
			value = JSON.stringify(value);
		}

		return this.openPushStr().add(value).closePushStr();
	},


	toString: function () {
		return this.source.join('');
	},

	getSource: function (type) {
		return (this.source[type] || []).join('');
	}
};


module.exports = CodeChunk;
