module.exports = {
	open: function (chunk, node) {
		var binding = this.output.binding;

		if (binding) {
			chunk.add('/*$IF*/');
		}

		chunk.vars('__fest_if', { value: this.getAttr(node, 'test', 'expr'), defaults: false });

		if (binding) {
			chunk.add('/*$*/'); // условие
		}

		chunk.add('if(__fest_if){');
	},

	close: function (chunk) {
		chunk.add('}');

		if (this.output.binding) {
			chunk.add('/*IF$*/');
		}
	}
};
