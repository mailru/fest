module.exports = {
	open: function (chunk, node, attrs) {
		var binding = this.output.binding;

		if (binding) {
			//chunk.add('/*$FOR*/');
		}

		chunk.vars('__fest_iterator', { value: this.getAttr(node, 'data', 'expr'), defaults: false });


		if (binding) {
			//chunk.add('/*$*/'); // условие
		}

		chunk.add('if(__fest_iterator && __fest_iterator.length)');
		chunk.add('__fest_iterator.forEach(function (' + attrs.as.value + ') {');
	},

	close: function (chunk) {
		chunk.add('});');

		if (this.output.binding) {
			//chunk.add('/*FOR$*/');
		}
	}
};
