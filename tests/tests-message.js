var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'message':{
		topic:function(){
			var promise = new(events.EventEmitter);
			var messages = {
					'Логотип {json.name}': 'Logo of {json.name}',
					'Строка': 'Line',
					'Строкаrow': 'Row',
					'Строка со\n\t\t<a href="#" title="123">ссылкой</a>': 'Line with a <a href="#" title="123">link</a>',
					'рубль|рубля|рублей': 'ruble|rubles'
				};
			transform('/templates/message.xml', {
				name: 'Fest'
			}, {}, promise, false, {
				nplurals: 2, // English
				plural: function (n) {
					return n != 1 ? 1 : 0;
				},
				messages: messages,
				callbacks: {
					message: function (id, context, reference) {
                        // console.log(arguments);
					}
				}
			});
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<a href="#"><img src="favicon.png" alt="Logo of Fest"/></a>Row\n\t\n\t\tLine with a<a href="#" title="123">link</a>RowLine2 rubles');
		}
	}
}).run();

