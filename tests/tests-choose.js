var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'choose':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/choose.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'truechoose');
		}
	},
	'choose with syntax errors in when attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/choose_with_errors_in_test.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 4: attribute "test" has SyntaxError: Unexpected token ILLEGAL');
		}
	}
}).run();

