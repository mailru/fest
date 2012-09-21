var fest = require('../lib/fest'),
	vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'set with syntax errors in test attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/set_with_errors_in_test.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: attribute "test" has SyntaxError: Unexpected token ILLEGAL');
		}
	},
	'setparams': {
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/setparams.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '|text1||text2||text3||text4||set in inner|');
		}
	},
	'nested set blocks': {
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/set_nested.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 5: fest:set cannot be nested');
		}
	},
	'useless set blocks': {
		topic:function(){
			return fest.compile(__dirname + '/templates/useless_set.xml');
		},
		'result':function(result){
			assert.isTrue(result.indexOf('__fest_blocks.foo') > -1);
			assert.isTrue(result.indexOf('__fest_blocks.bar') == -1);
			assert.isTrue(result.indexOf('__fest_blocks.baz') == -1);
			assert.isTrue(result.indexOf('__fest_blocks.qux') == -1);
		}
	},
	'useless set blocks when get block with select is defined': {
		topic:function(){
			return fest.compile(__dirname + '/templates/useless_set_select.xml');
		},
		'result':function(result){
			assert.isTrue(result.indexOf('__fest_blocks.foo') > -1);
			assert.isTrue(result.indexOf('__fest_blocks.bar') > -1);
			assert.isTrue(result.indexOf('__fest_blocks.baz') > -1);
			assert.isTrue(result.indexOf('__fest_blocks.qux') > -1);
		}
	}
}).run();