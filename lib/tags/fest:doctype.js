module.exports = {
	open: function (chunk) {
		chunk.pushStr('<!DOCTYPE ', true);
	},

	close: function (chunk) {
		chunk.pushStr('>', true);
	}
};
