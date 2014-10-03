module.exports = {
	open: function (chunk) {
		chunk.pushStr('<!--', true);
	},

	close: function (chunk) {
		chunk.pushStr('-->', true);
	}
};
