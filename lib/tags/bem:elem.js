module.exports = {
	attr: function (chunk, value, attr, node, attrs) {
		var name = value.replace(/[:-]/g, '_'); // название элемента блока

		chunk.add('var __bem_elem = __bem_block + "__' + name + '";');
		chunk.add('__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;');

		this.stack.attrs = [{ name: 'class', value: '__bem_mods' }];

		return false;
	},

	open: function (chunk, node) {
	},

	close: function (chunk) {
	}
};
