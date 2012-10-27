var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'for':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/for.xml', {items: [1, 2], subitems:[[1, 2], [1, 2]]}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result.substr(0, 4), '1212');
			assert.equal(result.substr(4, result.length - 1), '0102111245');
		}
	},
	'for with syntax errors in from attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/for_with_errors_in_from.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "from" has SyntaxError: Unexpected token ILLEGAL');
		}
	},
	'for with syntax errors in to attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/for_with_errors_in_to.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "to" has SyntaxError: Unexpected token ILLEGAL');
		}
	},
	'for with syntax errors in iterate attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/for_with_errors_in_iterate.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "iterate" has SyntaxError: Unexpected token ILLEGAL');
		}
	},
	'for with syntax errors in index attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/for_with_errors_in_index.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "index" has an invalid identifier');
		}
	},
	'for with syntax errors in value attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/for_with_errors_in_value.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "value" has an invalid identifier');
		}
	}
}).run();

