var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'include':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/include.xml', {list:[[1, 2, 3], [4, 5, 6]]}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '123456');
		}
	},
	'include with syntax errors in context attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/include_with_errors_in_context.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "context" has SyntaxError: Unexpected token ILLEGAL');
		}
	}
}).run();

