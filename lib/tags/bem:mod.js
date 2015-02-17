module.exports = {
	open: function (chunk, node, attrs) {
		chunk.add('/*$M*/');

		if (attrs.test) {
			chunk.vars('__fest_if', { value: attrs.test.value, defaults: false });
			chunk.add('if (__fest_if)');
		}

		if (attrs['has-mod']) {
			chunk.add('if (~__bem_block_mods.indexOf(" " + __bem_block + "_' + attrs['has-mod'].value + ' "))');
		}

		chunk.add('__bem_mods += " " + __bem_x + "_' + attrs.name.value + '";');

		chunk.add('/*M$*/');
	},

	close: function (chunk) {
	}
};
