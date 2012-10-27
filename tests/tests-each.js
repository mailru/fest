var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'each':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/each.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'foo=barfoo=bar');
		}
	},
	'each with syntax errors in itarate attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/each_with_errors_in_iterate.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "iterate" has SyntaxError: Unexpected token ILLEGAL');
		}
	},
	'each with syntax errors in index attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/each_with_errors_in_index.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "index" has an invalid identifier');
		}
	},
	'each with syntax errors in value attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/each_with_errors_in_value.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "value" has an invalid identifier');
		}
	}
}).run();

