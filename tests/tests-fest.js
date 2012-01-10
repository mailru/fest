var fest = require('../lib/fest'),
    defer = require('../lib/defer'),
    vows = require('vows'),
    events = require('events'),
    assert = require('assert');

function transform(file, json,  promise, strict, options){
    fest.compile(file, strict, options).then(function(template){
        //console.log(template);
        template = (new Function('return ' + template))();
        promise.emit('success', template(json));
    });
}

vows.describe('Fast tests').addBatch({
    'doctype':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/doctype.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<!DOCTYPE html>');
        }
    },
    'text':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/text.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '  ');
        }
    },
    'shorttag':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/shorttag.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<meta/>');
        }
    },
    'comment':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/comment.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<!--comment-->');
        }
    },
    'value':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/value.xml', {"value":"value"}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'value<script/>\\"|\\\'');
        }
    },
    'if':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/if.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'truetrue');
        }
    },
    'choose':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/choose.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'truechoose');
        }
    },
    'for':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/for.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'foo=bar');
        }
    },
    'foreach':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/foreach.xml', {items: [1, 2], subitems:[[1, 2], [1, 2]]}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result.substr(0, 2), '12');
            assert.equal(result.substr(2, result.length - 1), '01021112');
        }
    },
    'script':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/script.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '"true""true"');
        }
    },
    'insert':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/insert.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '.foo{}\n.bar{}');
        }
    },
    'use strict':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/strict.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'true');
        }
    },
    'blocks':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/blocks.xml', {}, promise);
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
    'include':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/include.xml', {list:[1, 2]}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '12');
        }
    },
    'CDATA':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/cdata.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<script><![CDATA[alert ("2" < 3);]]></script>');
        }
    },
    'setparams': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/setparams.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '|text1||text2||text3||text4|');
        }
    },
    'attribute': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/attribute.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '<input/><div class="foo bar"></div><div class="foo"></div><div when="true" otherwise="true"></div><div>foo</div>');
        }
    },
    'document.write': {
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('tests/templates/document.xml', {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'foobarbar');
        }
    }
}).addBatch({
    'intercept sync':{
        topic: function(){
            var promise = new(events.EventEmitter);
            fest.compile('tests/templates/intercept.xml')
                .intercept('opentag', function(node){
                    return '__fest_str+="' + node.local  + '";'
                })
                .intercept('closetag', function(node){
                    return '';
                })
                .then(function(template){
                    template = (new Function('return ' + template))();
                    promise.emit('success', template({}));
                });
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'template');
        }
    },
    'intercept async':{
        topic: function(){
            var promise = new(events.EventEmitter);
            fest.compile('tests/templates/intercept.xml')
                .intercept('opentag', function(node){
                    var promise = defer();
                    setTimeout(function(){promise.resolve('__fest_str+="' + node.local  + '";')}, 10);
                    return promise;
                })
                .intercept('closetag', function(node){
                    return '';
                })
                .then(function(template){
                    template = (new Function('return ' + template))();
                    promise.emit('success', template({}));
                });
            return promise;
        },
        'result':function(result){
            assert.equal(result, 'template');
        }
    }
}).run();
