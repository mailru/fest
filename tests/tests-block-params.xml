var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'blocks with params':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/block_with_params.xml', {title: 'Fest'}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<!DOCTYPE html><title>Fest</title><body><article><h1>Fest</h1><p>200</p></article></body>');
		}
	}
}).run();

