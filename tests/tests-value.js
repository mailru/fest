var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'value':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/value.xml', {"value":"value"}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'valuevalue<script/>\\"|\\\'\\u003Cscript\\/\\u003E');
		}
	}
}).run();


