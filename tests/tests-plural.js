var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'error with inconsistent number of plural forms':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/plural-with-error.xml', {
				n1: 1,
				n2: 23,
			}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 4: inconsistent number of plural forms in "ruble|rubles" (expected 3 but got 2)');
		}
	},
	'escape chars':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/plural-escape.xml', {
				n1: 1,
				n2: 23,
			}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.equal(result, '|%1%s|,|%23%s|');
		}
	},
	'plural (russian)':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/plural.xml', {
				n1: 1,
				n2: 23,
				n3: 166
			}, {}, promise, false, {
				// nplurals: 3,
				// plural: function (n) {
				// 	return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
				// }
			});
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'один рубль|23 рубля|166 рублей');
		}
	},
	'plural (english)':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/plural-english.xml', {
				n1: 1,
				n2: 23,
				n3: 166
			}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, 'one ruble|23 rubles|166 rubles');
		}
	}
}).run();

