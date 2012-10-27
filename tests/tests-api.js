var vows = require('vows'),
	assert = require('assert'),
	fest = require('../lib/fest');

vows.describe('Fest API tests').addBatch({
	'render': {
		topic: function() {
			return fest.render(__dirname + '/templates/if.xml');
		},
		'result': function (result){
			assert.equal(result, 'truetrue&');
		}
	}
}).run();

