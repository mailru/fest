var fs = require('fs'),
    compile = require('./compile');

var dir = process.argv[2];
var out_dir = process.argv[3] || dir;
var watched_files = {};

function do_compile(file){
    console.log('compile: ' + dir + file);
    fs.writeFile((out_dir + file).replace(/\.xml/, '.js'), compile(dir + file, '', file.replace(/\.xml$/, '')), 'utf8');
    return file;
}

function watchfile(file){
    fs.stat(dir + file, function(err, stat){
        var change_time = stat.mtime.getTime();
        if (change_time > watched_files[file]){
            do_compile(file);
        }
        watched_files[file] = change_time;
    });
}

function watch(){
    var file;
    for (file in watched_files){
        watchfile(file);
    }
    //setTimeout(watch, 100);
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
/*
fs.watch(dir, function (event, filename) {
    var file;
    watched_files = {};
    findfiles();
});
*/