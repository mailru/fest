var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'blocks':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/blocks.xml', {}, {nine: 'nine'}, promise);
			return promise;
		},
		'result':function(result){
			result = result.split('|');
			assert.equal(result.length, 12);
			assert.equal(result[1], 'one');
			assert.equal(result[2], 'two2');
			assert.equal(result[3], 'three1');
			assert.equal(result[4], 'five');
			assert.equal(result[5], 'six');
			assert.equal(result[6], 'seven');
			assert.equal(result[7], 'eight');
			assert.equal(result[8], 'nine');
			assert.equal(result[9], 'ten');
			assert.equal(result[10], 'eleven');
		}
	}
}).run();

