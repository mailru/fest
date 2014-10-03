module.exports = {
	open: function (chunk, node, attrs) {
		if (attrs.test) {
			chunk.vars('__fest_if', { value: attrs.test.value, defaults: false });
			chunk.add('if (__fest_if)');
		}

		if (attrs['has-mod']) {
			chunk.add('if (~__bem_block_mods.indexOf("' + attrs['has-mod'].value + '"))');
		}

		chunk.add('__bem_mods += " " + __bem_x + "_' + attrs.name.value + '";');
	},

	close: function (chunk) {
	}
};
