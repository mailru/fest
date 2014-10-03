module.exports = {
	attr: function (chunk, value, attr, node, attrs) {
		var block = '__bem_' + value.replace(/[:-]/g, '_'); // название блока

		chunk.add('var ' + block + ' = function (params) {');
		chunk.add('var __fest_buf = "", __bem_block = "' + value + '", __bem_x = __bem_block, __bem_mods = __bem_block + " ", __bem_block_mods;');
		chunk.add(function (params, __bem_block, __bem_mods) {
			if (params.mods !== void 0) {
				__bem_mods += __bem_block + '_' + params.mods.join(' ' + __bem_block + '_');
			}
		});

		this.stack.attr = { name: 'class', value: '(__bem_block_mods = " " + __bem_mods + " ")' };

		node.__name = attr;

		this.tags['bem:' + value] = {
			open: function (chunk) {
				this.stack.push('get');
			},
			close: function (chunk) {
				chunk.pushStr(block + '(__fest_params)');
			}
		};

		return false;
	},

	open: function (chunk, node) {
	},

	close: function (chunk) {
		chunk.add('return __fest_buf; };');
	}
};
