var fs = require('fs');
var dir = process.argv[1].replace(/tests.js$/, '')
var sys = require('sys')
var spawn = require('child_process').spawn;
var children = [];

var modes = ['function', 'string', 'array'],
	mode = process.argv[2];

if (mode && modes.indexOf(mode) > -1) {
	modes = [mode];
}

fs.readdir(dir, function(err, files){
	files.filter(function(file){return file.indexOf('tests-') === 0;})
		.forEach(function(file, index){
			modes.forEach(function (mode) {
				var string = '',
					child = spawn('node', [dir + file, mode]);
				children.push(file);
				child.stdout.on('data', function(data){
					string += data;
				})
				child.on('exit', function(){
					console.log(file, string.trim());
					children.splice(children.indexOf(file), 1);
					if (children.length === 0){
						process.exit();
					}
				})
			})
		 });
});
