var fs = require('fs'),
    compile = require('./compile');

var Fest = function(){
};

Fest.prototype = {
    compile: compile,
    render: function (file, json, options) {
        var compiled = this.compile(file, options),
            template = (new Function('return ' + compiled))();
        return template(json);
    }
};

module.exports = new Fest();
