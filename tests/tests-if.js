var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'if':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/if.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'truetrue&');
		}
	},
	'if with syntax errors in test attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/if_with_errors_in_test.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result) {
			assert.include(result, 'At line 3: attribute "test" has SyntaxError: Unexpected token ILLEGAL');
		}
	}
}).run();

