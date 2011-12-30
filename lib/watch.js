var fs = require('fs'),
    path = require('path'),
    compile = require('./compile');

var dir = process.argv[2];
var out_dir = process.argv[3] || dir;
var watched_files = {};

function do_compile(file){
    compile(dir + file).then(function(template){
        console.log('compile: ' + dir + file);
        var name = file.replace(/\.xml$/, '');
        fs.writeFile((out_dir + file).replace(/\.xml/, '.js'), 'var ' + name + ' = ' + template + ';', 'utf8');
    });
    return file;
}

function watchfile(file){
    fs.stat(dir + file, function(err, stat){
        if (stat.mtime.getTime() > watched_files[file]){
            do_compile(file);
        }
        watched_files[file] = stat.mtime.getTime();
    });
}

function watch(){
    var file;
    for (file in watched_files){
        watchfile(file);
    }
    setTimeout(watch, 100);
}

function findfiles(callback){
    fs.readdir(dir, function(err, files){
        files.filter(function(file){return file.indexOf('.xml') > 0;})
             .forEach(function(file){
                 console.log('watch: ' + file);
                 watched_files[file] = 0;
             });
             if (callback){
                 callback();
             }
    });
}

findfiles(watch);

fs.watch(dir, function (event, filename) {
    var file;
    watched_files = {};
    findfiles();
});
