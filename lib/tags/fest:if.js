module.exports = {
	open: function (chunk, node) {
		chunk
			.vars('__fest_if', { value: this.getAttr(node, 'test', 'expr'), defaults: false })
			.add('if(__fest_if){')
		;
	},

	close: function (chunk) {
		chunk.add('}');
	}
};
