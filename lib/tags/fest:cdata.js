module.exports = {
	open: function (chunk) {
		chunk.pushStr('<![CDATA[', true);
	},

	close: function (chunk) {
		chunk.pushStr(']]>', true);
	}
};
