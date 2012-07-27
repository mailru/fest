var fs = require('fs');
fs.readdir(process.argv[1].replace(/tests.js$/, ''), function(err, files){
    files.filter(function(file){return file.indexOf('tests-') === 0;})
         .forEach(function(file){
             require('./' + file);
         });
});
