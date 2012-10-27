var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'call':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/call.xml', 'call', {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'call');
		}
	},
	'call with syntax errors in name attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/call_with_errors_in_name.xml', 'call', {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "name" has SyntaxError: Unexpected token ILLEGAL');
		}
	},
	'call with syntax errors in data attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/call_with_errors_in_data.xml', 'call', {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "data" has SyntaxError: Unexpected token ILLEGAL');
		}
	}
}).run();

