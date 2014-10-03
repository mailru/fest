module.exports = {
	attr: function (chunk, value, attr, node, attrs) {
		var name = value.replace(/[:-]/g, '_'); // название элемента блока

		chunk.add('var __bem_elem = __bem_block + "__' + name + '";');
		chunk.add('__bem_mods = " " + __bem_elem; __bem_x = __bem_elem;');
		chunk.add(function (params, __bem_name, __bem_elem, __bem_mods) {
			if (params.mods !== void 0) {
				__bem_mods = __bem_elem + '_' + params.mods.join(' ' + __bem_elem + '_');
			}
		});

		this.stack.attr = { name: 'class', value: '__bem_mods' };

		return false;
	},

	open: function (chunk, node) {
	},

	close: function (chunk) {
	}
};
