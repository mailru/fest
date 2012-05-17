var fest = require('../lib/fest'),
    vows = require('vows'),
    events = require('events'),
    assert = require('assert');

function transform(file, json,  promise, strict, options){
    options = options || null;
    var template = fest.compile(__dirname + file, options);
    template = (new Function('return ' + template))();
    setTimeout(function(){promise.emit('success', template(json));}, 0);
}

vows.describe('Fast tests').addBatch({
    'doctype':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/doctype.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<!DOCTYPE html>');
        }
    },
    'text':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/text.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '  ');
        }
    },
    'shorttag':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/shorttag.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<meta/>');
        }
    },
    'comment':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/comment.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<!--comment-->');
        }
    },
    'value':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/value.xml', {"value":"value"}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'valuevalue<script/>\\"|\\\'');
        }
    },
    'if':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/if.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'truetrue&');
        }
    },
    'choose':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/choose.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'truechoose');
        }
    },
    'each':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/each.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'foo=barfoo=bar');
        }
    },
    'for':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/for.xml', {items: [1, 2], subitems:[[1, 2], [1, 2]]}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result.substr(0, 4), '1212');
            assert.equal(result.substr(4, result.length - 1), '0102111245');
        }
    },
    'script':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/script.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '"true""true"');
        }
    },
    'insert':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/insert.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<style>.foo{ont: 18px/18px "Helvetica Neue", Arial;}\n.bar{\\"\\"}</style>');
        }
    },
    'use strict':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/strict.xml', {}, promise, true, {debug:true});
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'true');
        }
    },
    'blocks':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/blocks.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            result = result.split('|');
            assert.equal(result[1], 'one');
            assert.equal(result[2], 'two2');
            assert.equal(result[3], 'three1');
            assert.equal(result[4], 'five');
            assert.equal(result[5], 'six');
            assert.equal(result[6], 'seven');
            assert.equal(result[7], 'eight');
        }
    },
    'params': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/params.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'Hello, John');
        }
    },
    'include':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/include.xml', {list:[1, 2]}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '12');
        }
    },
    'CDATA':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/cdata.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<script><![CDATA[alert ("2" < 3);]]></script>');
        }
    },
    'setparams': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/setparams.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '|text1||text2||text3||text4|');
        }
    },
    'attribute': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/attribute.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<input/><div>foobar</div><div class="foo bar"></div><div class="foo"></div><div when="true" otherwise="true"></div><div>foo</div>');
        }
    },
    'first attributes': {
      topic:function(){
        var promise = new(events.EventEmitter);
        transform('/templates/first_attributes.xml', {}, promise, true, {nothrow: true});
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
        transform('/templates/nested_attributes.xml', {}, promise, true, {nothrow: true});
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
            transform('/templates/attribute_expression.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<div class="b-block" data-amp="&" data-lt="<" data-gt=">" data-apos="\'" data-quot=""" data-elcb="{" data-ercb="}" data-lcb="{" data-rcb="}" data-ecb="{}" data-dcb="{}" data-crazy="{{}{}}" data-crazy-again="{{}{}}" data-crazy-too="{}{}"><div class="b-block_modifier" data-has-modifier="true"></div><div class="b-block__element" data-obj-value="value" data-obj-json="{ "key": "value" }"><span class="name" data-spec-chars="{<"\'&>}" data-espec-chars="{<"\'&>}">b-block__element_modifier</span></div></div>1245');
        }
    },
    'document.write': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/document.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'foobarbar');
        }
    },
    'unclosed template': {
        topic:function(){
          var promise = new(events.EventEmitter);
          transform('/templates/template.xml', {}, promise, true, {nothrow: true});
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
    'errors': {
        topic:function(){
          var promise = new(events.EventEmitter);
          transform('/templates/errors.xml', null, promise, true, {debug:true});
          return promise;
        },
        'result':function(result) {
          assert.equal(result, '');
        }
    }
}).run();
