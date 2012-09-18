var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform');

vows.describe('Fest tests').addBatch({
	'errors': {
		topic:function(){
		  var promise = new(events.EventEmitter);
		  transform('/templates/errors.xml', null, {}, promise, true, {debug:true});
		  return promise;
		},
		'result':function(result) {
		  assert.equal(result, '');
		}
	}
}).run();

