var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'params': {
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/params.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'Hello, John\n---');
		}
	}
}).run();


