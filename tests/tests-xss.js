var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'xss':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/xss.xml', {
				xss: "\\x22\\x3Ealert\\x28document.cookie\\x29\\x3C\\x2fscript\\x3E"
			}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<script>document.write(\'<script id="\\\\x22\\\\x3Ealert\\\\x28document.cookie\\\\x29\\\\x3C\\\\x2fscript\\\\x3E">\');</script>');
		}
	}
}).run();


