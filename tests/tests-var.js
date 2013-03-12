var vows = require('vows'),
    events = require('events'),
    assert = require('assert'),
    transform = require('./transform')(process.argv[2]);

vows.describe('Fest tests').addBatch({
    'var':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/var.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '4284');
        }
    },
    'var with syntax errors in select attribute':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/var_with_error_in_select.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result) {
            assert.include(result, 'At line 3: attribute "select" has SyntaxError: Unexpected token ?');
        }
    },
    'var with get block error':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/var_with_get_block_error.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result) {
            assert.include(result, 'At line 4: fest:get is not allowed inside fest:var');
        }
    },
    'var with set block error':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/var_with_set_block_error.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result) {
            assert.include(result, 'At line 4: fest:set is not allowed inside fest:var');
        }
    },
    'var with include error':{
        topic:function(){
            var promise = new(events.EventEmitter);
            transform('/templates/var_with_include_error.xml', {}, {}, promise, true, {nothrow: true});
            return promise;
        },
        'result':function(result) {
            assert.include(result, 'At line 4: fest:include is not allowed inside fest:var');
        }
    }
}).run();


