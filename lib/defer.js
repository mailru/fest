module.exports = function(object){
    object || (object = {});
    if (object.isDefer){
        return object;
    }
    var res = [], rej = [], b;
    object.isDefer = true;
    object.resolve = function(c){
        b = c;
        while(res.length) res.shift()(b);
        res = 0;
    };
    object.reject = function(c){
        b = c;
        while(rej.length) rej.shift()(b);
        rej = 0;
    };
    object.then = function(c){
        res ? res.push(c) : c(b);
        return this;
    };
    object.otherwise = function(c){
        rej ? rej.push(c) : c(b);
        return this;
    };
    object.timeout = function(c){
        setTimeout(function(){
            console.warn('Promise was not resolved in 2000mc');
            c(object);
        }, 2000);
        return this;
    };
    
    return object;
};

