var fs = require('fs'),
    path = require('path'),
    compile = require('./compile');

var dir = process.argv[2];
var watched_files = [];

function do_compile(file){
    compile(dir + file).then(function(template){
        console.log('compile: ' + dir + file);
        fs.writeFile((dir + file).replace(/\.xml/, '.fest.js'), 'var template = ' + template + ';', encoding='utf8');
    });
    return file;
}

function watch(dir){
    fs.readdir(dir, function(err, files){
        files.filter(function(file){return file.indexOf('.xml') > 0;})
             .map(do_compile)
//             .forEach(function(file){
//                 console.log('watch: ' + file);
//                 watched_files.push(file);
//                 fs.watchFile(dir + file, function (curr, prev) {
//                     if (curr.mtime > prev.mtime){
//                        do_compile(file);
//                     }
//                 });
//             });
    });
}

watch(dir);
/*
fs.watch(dir, function (event, filename) {
    var file;
    while (file = watched_files.shift()){
        console.log('unwatch: ' + file)
        fs.unwatchFile(dir + file);
    }
    watch(dir);
});*/
