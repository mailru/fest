var vows = require('vows'),
	events = require('events'),
	assert = require('assert'),
	transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
	'attribute': {
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/attribute.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<input/><div>foobar</div><div class="foo bar"></div><div class="foo"></div><div when="true" otherwise="true" \"=\"\"\"></div><div>foo</div>');
		}
	},
	'first attributes': {
	  topic:function(){
		var promise = new(events.EventEmitter);
		transform('/templates/first_attributes.xml', {}, {}, promise, true, {nothrow: true});
		return promise;
	  },
	  'result':function(result) {
		var res = [
			__dirname + "/templates/first_attributes.xml",
			"4: text",
			"5: <fest:attributes>",
			"6: 	<fest:attribute name=\"name\">text1</fest:attribute>",
			"At line 5: fest:attributes must be the first child"
		].join('\n');
		assert.equal(result, res);
	  }
	},
	'nested attributes': {
	  topic:function(){
		var promise = new(events.EventEmitter);
		transform('/templates/nested_attributes.xml', {}, {}, promise, true, {nothrow: true});
		return promise;
	  },
	  'result':function(result) {
		var res = [
			__dirname + "/templates/nested_attributes.xml",
			"4: <fest:attributes>",
			"5: 	<fest:attributes>",
			"6: 		<fest:attribute name='href'>#</fest:attribute>",
			"At line 5: fest:attributes cannot be nested"
		].join('\n');
		assert.equal(result, res);
	  }
	},
	'expression in attribute value': {
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/attribute_expression.xml', {}, {}, promise);
			return promise;
		},
		'result':function(result){
			assert.equal(result, '<div class="b-block" data-amp="&amp;" data-lt="&lt;" data-gt="&gt;" data-apos="\'" data-quot="&quot;" data-elcb="{" data-ercb="}" data-lcb="{" data-rcb="}" data-ecb="{}" data-dcb="{}" data-crazy="{{}{}}" data-crazy-again="{{}{}}" data-crazy-too="{}{}"><div class="b-block_modifier" data-has-modifier="true"></div><div class="b-block__element" data-obj-value="value" data-obj-json="{ "key": "value" }"><span class="name" data-spec-chars="{<"\'&>}" data-espec-chars="{&lt;&quot;\'&amp;&gt;}">b-block__element_modifier</span></div></div>1245<div data-lf="a\n\rb" data-backslash="\\" data-apos="\'" data-quot=""" data-block="A" data-block-with-text="aB{c}"></div>');
		}
	},
	'expression in attribute value with syntax errors': {
		topic:function(){
			var promise = new(events.EventEmitter);
			transform('/templates/attribute_expression_with_errors.xml', {}, {}, promise, true, {nothrow: true});
			return promise;
		},
		'result':function(result){
			assert.include(result, 'At line 3: expression #1 in attribute "class" has SyntaxError: Unexpected token ILLEGAL');
		}
	}
}).run();

