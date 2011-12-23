var fs = require('fs'),
    compile = require('./compile');

var Fest = function(){
};

Fest.prototype = {
    compile: compile
};

module.exports = new Fest();
