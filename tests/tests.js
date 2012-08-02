var fs = require('fs');
var dir = process.argv[1].replace(/tests.js$/, '')
var sys = require('sys')
var spawn = require('child_process').spawn;
var tests = 0;
var children = [];
fs.readdir(dir, function(err, files){
    files.filter(function(file){return file.indexOf('tests-') === 0;})
         .forEach(function(file, index){
             var string = '',
                 child = spawn('node', [dir + file]);
             children.push(file);
             child.stdout.on('data', function(data){
                 string += data;
             })
             child.stderr.on('data', function(data){
                 //string += data;
             })
             child.on('exit', function(){
                 string = string.trim();
                 console.log(file, string);
                 try{
                    tests += parseInt(string.replace(/\[\d+m/mg, '').replace(/\\u.{4}/mg, '').match(/\d+/m)[0], 10)
                 }catch(e){}
                 children.splice(children.indexOf(file), 1);
                 if (children.length === 0){
                     console.log('------------------');
                     console.log('total: ' + tests + ' tests OK');
                     process.exit();
                 }
             })
         });
});
