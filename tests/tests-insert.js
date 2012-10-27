var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'insert':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/insert.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<style>.foo{ont: 18px/18px "Helvetica Neue", Arial;}\n.bar{\\"\\"}</style><script>var include_script = true + \'\\"\';\n</script>');
		}
	}
}).run();

