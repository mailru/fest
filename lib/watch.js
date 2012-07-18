var fs = require('fs'),
    compile = require('./compile')
    cmd = require('./cmd');

var prefix = '';
var dir = cmd.dir;
if (!dir){
    console.log('You need to pint directory "node watch.js dir=..."');
    return;
}
if (dir[0] !== '/'){
    dir = process.env.PWD + '/' + dir;
}
dir = dir.replace(/\/$/, '') + '/';
var out_dir = cmd.out || dir;
out_dir = out_dir.replace(/\/$/, '') + '/';
if (out_dir[0] !== '/'){
    out_dir = process.env.PWD + '/' + out_dir;
}
var fest = (cmd.fest === 'no' ? false : true);
var watched_files = {};

function do_compile(file, dir, out_dir, prefix){
    console.log('compile: ' + dir + file);
    var source = compile(dir + file, '', '');
    var file_name = (out_dir + file).replace(/\.xml/, '.js');
    if (!fs.existsSync(out_dir)){
        fs.mkdirSync(out_dir);
    }
    if (fest){
        fs.writeFileSync(file_name,  ';(function(x){if(!x.fest)x.fest={};x.fest["' + prefix + file.replace(/\.xml$/, '') + '"]=' + source + '})(this);', 'utf8');
    } else {
        fs.writeFileSync(file_name, source, 'utf8');
    }
}

function findfiles(dir, out_dir, prefix){
    fs.readdir(dir, function(err, files){
        files.filter(function(file){return file.indexOf('.xml') > 0;})
             .forEach(function(file){
                 console.log('watch: ' + file);
                 do_compile(file, dir, out_dir, prefix);
             });
        files.filter(function(file){ return fs.statSync(dir + file).isDirectory() })
             .forEach(function(file){
                 console.log('watch directory: ' + dir + file);
                 findfiles(dir + file + '/', out_dir + file + '/', prefix + file + '/');
             });
    });
}

findfiles(dir, out_dir, prefix);
