module.exports = {
	open: function (chunk, node, attrs) {
		try {
			var expr = this.compileExpr(attrs.name);
		} catch (err) {
			throw attrs.name.value + '|' + err + '|';
		}


		if (expr.containsExpr) {
			node.conditional = true;

			chunk
				.vars('__fest_select', { value: expr.text, defaults: '' })
				.add('if(__fest_select !== ""){')
				.pushStr('" " + __fest_select + "=\\""')
			;
		} else {
			chunk.pushStr('" ' + this.escapeJS(this.getAttr(node, 'name')) + '=\\""');
		}


		if (attrs.value) {
			expr = this.compileExpr(attrs.value);

			if (expr.containsExpr) {
				chunk
					.vars({ __fest_select: { value: expr.text, defaults: '' } })
					.pushStr('__fest_select')
				;
			} else {
				chunk.pushStr('" ' + this.escapeJS(this.getAttr(node, 'value')) + '=\\"');
			}
		}
	},

	close: function (chunk, node) {
		chunk.pushStr('"\\""');
		node.conditional && chunk.add('}');
	}
};
