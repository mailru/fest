var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	// 'plural w/o function':{
	// 	topic:function(){
	// 		var promise = new(events.EventEmitter);
	// 		transform('/templates/plural.xml', {}, {}, promise, true, {nothrow: true});
	// 		return promise;
	// 	},
	// 	'result':function(result){
	// 		assert.include(result, 'At line 3: plural function is not defined');
	// 	}
	// },
	'plural':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/plural.xml', {
				n1: 1,
				n2: 23,
				n3: 166
			}, {}, promise, false, {
				// nplurals: 3, // Russian
				plural: function (n) {
					return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
				}
			});
			return promise;
		},
		'result':function(result){
			assert.equal(result, '1 рубль|23 рубля|166 рублей');
		}
	}
}).run();

