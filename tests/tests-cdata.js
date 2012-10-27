var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'CDATA':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/cdata.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<script><![CDATA[alert ("2" < 3);]]></script>');
		}
	}
}).run();


