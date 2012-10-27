var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'shorttag':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/shorttag.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<meta/>');
		}
	}
}).run();

