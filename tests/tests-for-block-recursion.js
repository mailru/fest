var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'block recursion':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/block-recursion.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '');
		}
	}
}).run();

