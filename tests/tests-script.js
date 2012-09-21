var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'script':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/script.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '"true""true&quot;"');
		}
	},
	'script with syntax errors in file':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/script_with_errors_in_file.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'node has SyntaxError: Unexpected number');
		}
	}
}).run();


