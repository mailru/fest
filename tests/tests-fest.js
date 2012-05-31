var fest = require('../lib/fest'),
    vows = require('vows'),
    events = require('events'),
    assert = require('assert');

function transform(file, json, thisArg, promise, strict, options){
    options = options || null;
    var template = fest.compile(__dirname + file, options);
    template = (new Function('return ' + template))();
    setTimeout(function(){promise.emit('success', template.call(thisArg, json));}, 0);
}

vows.describe('Fast tests').addBatch({
    'doctype':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/doctype.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<!DOCTYPE html>');
        }
    },
    'text':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/text.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '  \\');
        }
    },
    'shorttag':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/shorttag.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<meta/>');
        }
    },
    'comment':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/comment.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<!--comment-->');
        }
    },
    'value':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/value.xml', {"value":"value"}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'valuevalue<script/>\\"|\\\'\\u003Cscript\\/\\u003E');
        }
    },
    'if':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/if.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'truetrue&');
        }
    },
    'if with syntax errors in test attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/if_with_errors_in_test.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result) {
            assert.include(result, 'At line 3: attribute "test" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'choose':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/choose.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'truechoose');
        }
    },
    'choose with syntax errors in when attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/choose_with_errors_in_test.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 4: attribute "test" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'each':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/each.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'foo=barfoo=bar');
        }
    },
    'each with syntax errors in itarate attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/each_with_errors_in_iterate.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "iterate" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'each with syntax errors in index attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/each_with_errors_in_index.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "index" has an invalid identifier');
        }
    },
    'each with syntax errors in value attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/each_with_errors_in_value.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "value" has an invalid identifier');
        }
    },
    'for':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/for.xml', {items: [1, 2], subitems:[[1, 2], [1, 2]]}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result.substr(0, 4), '1212');
            assert.equal(result.substr(4, result.length - 1), '0102111245');
        }
    },
    'for with syntax errors in from attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/for_with_errors_in_from.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "from" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'for with syntax errors in to attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/for_with_errors_in_to.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "to" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'for with syntax errors in iterate attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/for_with_errors_in_iterate.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "iterate" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'for with syntax errors in index attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/for_with_errors_in_index.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "index" has an invalid identifier');
        }
    },
    'for with syntax errors in value attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/for_with_errors_in_value.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "value" has an invalid identifier');
        }
    },
    'set with syntax errors in test attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/set_with_errors_in_test.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "test" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'script':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/script.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '"true""true&quot;"');
        }
    },
    'script with syntax errors in file':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/script_with_errors_in_file.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'node has SyntaxError: Unexpected number');
        }
    },
    'call':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/call.xml', 'call', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'call');
        }
    },
    'call with syntax errors in name attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/call_with_errors_in_name.xml', 'call', {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "name" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'call with syntax errors in data attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/call_with_errors_in_data.xml', 'call', {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "data" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'include with syntax errors in context attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/include_with_errors_in_context.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result){
            assert.include(result, 'At line 3: attribute "context" has SyntaxError: Unexpected token ILLEGAL');
        }
    },
    'insert':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/insert.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<style>.foo{ont: 18px/18px "Helvetica Neue", Arial;}\n.bar{\\"\\"}</style><script>var include_script = true + \'\\"\';\n</script>');
        }
    },
    'use strict':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/strict.xml', {}, {}, promise, true, {debug:true});
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'true');
        }
    },
    'blocks':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/blocks.xml', {}, {nine: 'nine'}, promise);
            return promise;
        },
        'result':function(result){
            console.log(result);
            result = result.split('|');
            assert.equal(result.length, 12);
            assert.equal(result[1], 'one');
            assert.equal(result[2], 'two2');
            assert.equal(result[3], 'three1');
            assert.equal(result[4], 'five');
            assert.equal(result[5], 'six');
            assert.equal(result[6], 'seven');
            assert.equal(result[7], 'eight');
            assert.equal(result[8], 'nine');
            assert.equal(result[9], 'ten');
            assert.equal(result[10], 'eleven');
        }
    },
    'params': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/params.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'Hello, John');
        }
    },
    'include':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/include.xml', {list:[1, 2]}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '12');
        }
    },
    'CDATA':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/cdata.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<script><![CDATA[alert ("2" < 3);]]></script>');
        }
    },
    'setparams': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/setparams.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '|text1||text2||text3||text4|');
        }
    },
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
            "6:   <fest:attribute name=\"name\">text1</fest:attribute>",
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
            "5:   <fest:attributes>",
            "6:     <fest:attribute name='href'>#</fest:attribute>",
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
            assert.equal(result, '<div class="b-block" data-amp="&amp;" data-lt="&lt;" data-gt="&gt;" data-apos="\'" data-quot="&quot;" data-elcb="{" data-ercb="}" data-lcb="{" data-rcb="}" data-ecb="{}" data-dcb="{}" data-crazy="{{}{}}" data-crazy-again="{{}{}}" data-crazy-too="{}{}"><div class="b-block_modifier" data-has-modifier="true"></div><div class="b-block__element" data-obj-value="value" data-obj-json="{ "key": "value" }"><span class="name" data-spec-chars="{<"\'&>}" data-espec-chars="{&lt;&quot;\'&amp;&gt;}">b-block__element_modifier</span></div></div>1245<div data-lf="a\nb" data-backslash="\\" data-apos="\'" data-quot=""" data-block="A" data-block-with-text="aB{c}"></div>');
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
    },
    'document.write': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/document.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'foobarbar');
        }
    },
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
    },
    'template with syntax errors in context_name attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/template_with_errors_in_context_name.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result) {
            assert.include(result, 'At line 2: attribute "context_name" has an invalid identifier');
        }
    },
    'errors': {
        topic:function(){
          var promise = new(events.EventEmitter);
          transform('/templates/errors.xml', null, {}, promise, true, {debug:true});
          return promise;
        },
        'result':function(result) {
          assert.equal(result, '');
        }
    }
}).run();
