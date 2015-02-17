module.exports = {
	attr: function (chunk, value, attr, node, attrs) {
		var block = '__bem_' + value.replace(/[:-]/g, '_'); // название блока

		chunk
			.add('var ' + block + ' = __template__[' + JSON.stringify(value) + '] = function (ctx) {')
			.add('var ' + [
				'__xid = "-" + __gid++',
				'__xevents = []',
				'__fest_buf = ""',
				'__bem_block = "' + value + '"',
				'__bem_x = __bem_block',
				'__bem_mods = __bem_block + " "',
				'__bem_block_mods'
			] + ';')
			.add(function (ctx, __bem_block, __bem_mods) {
				if (ctx.mods !== void 0) {
					__bem_mods += __bem_block + '_' + (ctx.mods.join ? ctx.mods.join(' ' + __bem_block + '_') : ctx.mods);
				}
			});


		node.__name = attr;

		this.stack.attrs = [{
			name: 'id',
			value: '__xid'
		}, {
			name: 'class',
			value: '(__bem_block_mods = " " + __bem_mods + " ")'
		}];
		this.output.binding = true;

		// Регистрируем блок
		this.tags['bem:' + value] = {
			open: function (chunk) {
				chunk.add('/*$B*/');
				this.stack.push('get');
			},
			close: function (chunk) {
				chunk.add('/*$*/');
				chunk.add('__fest_params = new ModelView(__fest_params);');
				chunk.add('/*B$*/');
				chunk.pushStr(block + '(__fest_params)');
			}
		};

		return false;
	},

	open: function (chunk, node) {
	},

	close: function (chunk) {
		this.output.binding = false;

		chunk.add(function () {
			if (ctx && ctx.$bind) {
				ctx.$bind(__xid, __bem_block, __template__[__bem_block], __xb, __xevents);
			}
		});

		chunk.add('return __fest_buf; };');
	}
};
