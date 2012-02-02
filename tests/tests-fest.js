var fest = require('../lib/fest'),
    vows = require('vows'),
    events = require('events'),
    assert = require('assert');

function transform(file, json,  promise, strict, options){
    options = options || {};
    options.xmllint = true;

    var template = (new Function('return ' + fest.compile(__dirname + file, options)))();
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
            assert.equal(result, 'value<script/>\\"|\\\'');
        }
    },
    'if':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/if.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'truetrue');
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
    'for':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/for.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'foo=bar');
        }
    },
    'foreach':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/foreach.xml', {items: [1, 2], subitems:[[1, 2], [1, 2]]}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result.substr(0, 2), '12');
            assert.equal(result.substr(2, result.length - 1), '0102111245');
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
            transform('/templates/strict.xml', {}, promise);
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
        assert.equal(result, '');
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
    }
}).run();
