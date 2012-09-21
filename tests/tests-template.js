var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'unclosed template': {
		topic:function(){
		  var promise = new(events.EventEmitter);
		  transform('/templates/template.xml', {}, {}, promise, true, {nothrow: true});
		  return promise;
		},
		'result':function(result) {
		  var res = [
			  __dirname + "/templates/template.xml",
			  "1: <?xml version=\"1.0\"?>",
			  "2: <fest:template xmlns:fest=\"http://fest.mail.ru\" context_name=\"bad\">",
			  "At line 2: fest:template is not closed"
		  ].join('\n');

		  assert.equal(result, res);
		}
	}
}).run();

