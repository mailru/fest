module.exports = {
	open: function (chunk, node, attrs) {
		var output = (node.__fest_output = attrs.output ? attrs.output.value : 'html');

		if (this.output.binding) {
			chunk.add('/*$V*/')
		}

		!attrs.safe && chunk.add('try{');

		chunk.add('/*$OPTS:' + JSON.stringify(output) + '*/');
		chunk.openPushStr();

		if (output === 'text' || output === 'raw') {
			// ничего
		}
		else if (output === 'html' && this.stack.indexOf('html:script') != -1) {
			chunk.add('__fest_escapeJS(');
		}
		else if (output === 'js') {
			chunk.add('__fest_escapeJS(');
		}
		else if (output === 'json') {
			this.output.json = true;
			chunk.add('__fest_escapeJSON(');
		}
		else {
			chunk.add('__fest_escapeHTML(');
		}
	},

	close: function (chunk, node, attrs) {
		var output = node.__fest_output;

		if (output !== 'text' && output !== 'raw') {
			chunk.add(')');
		}

		chunk.add(attrs.safe ? ');' : ')}catch(e){__fest_log_error(e.message + "' + node.line + '");}');

		if (this.output.binding) {
			chunk.add('/*V$*/')
		}
	}
};
