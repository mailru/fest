var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'element': {
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/element.xml', {}, {}, promise, true, {debug:true});
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<div class="foo bar"></div><div><i></i></div><div>foo</div><hr/><img src="foo"/><div><span>foo</span>bar<br/><div class="foo"></div></div><div></div><div></div>');
		}
	},
	'element with syntax errors in select attribute':{
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/element_with_errors_in_select.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result) {
			assert.include(result, 'At line 3: attribute "select" has SyntaxError: Unexpected token ILLEGAL');
		}
	}
}).run();

