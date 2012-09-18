var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform');

vows.describe('Fest tests').addBatch({
	'document.write': {
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/document.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'foobarbar');
		}
	}
}).run();

