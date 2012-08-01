var fs = require('fs'),
    path = require('path'),
    compile = require('./compile'),
    cmd = require('./cmd');
var existsSync = fs.existsSync || path.existsSync;

var prefix = '';

var recursive = cmd.recursive !== 'no';
var dir = cmd.dir;
if (cmd.help) {
    console.log('node watch.js --dir=... [--out=...]\n--dir directory where .xml files are\n--out out directory for compiled files if omited --out = --dir');
    return;
}
if (!dir){
    console.log('You need to pint directory "node watch.js dir=..."');
    return;
}
if (dir[0] !== '/'){
    dir = process.env.PWD + '/' + dir;
}
dir = dir.replace(/\/$/, '') + '/';
if (!existsSync(dir)){
    console.log('directory "' + dir + '" does not exists');
    return;
}
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
    if (!existsSync(out_dir)){
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
        if (recursive){
            files.filter(function(file){ return fs.statSync(dir + file).isDirectory() })
                 .forEach(function(file){
                     console.log('watch directory: ' + dir + file);
                     findfiles(dir + file + '/', out_dir + file + '/', prefix + file + '/');
                 });
        }
    });
}

findfiles(dir, out_dir, prefix);
