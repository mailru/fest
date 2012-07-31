var vows = require('vows'),
    events = require('events'),
    assert = require('assert'),
    transform = require('./transform');

vows.describe('Fest tests').addBatch({
    'lang':{
        topic:function(){
            var promise = new(events.EventEmitter);
            var lang = {
                locale:'ru_RU',
                dictionary:{
                    default:{
                
                    }
                }
            }
            transform('/templates/lang.xml', {}, {}, promise);
            return promise;
        },
        'result':function(result){
            assert.equal(result, '');
        }
    }
}).run();

