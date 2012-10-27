var fs = require('fs');
var dir = process.argv[1].replace(/tests.js$/, '')
var sys = require('sys')
var spawn = require('child_process').spawn;
var commands = [];

var modes = ['function', 'string', 'array'],
	mode = process.argv[2];

if (mode && modes.indexOf(mode) > -1) {
	modes = [mode];
}

fs.readdirSync(dir).filter(function(file){return file.indexOf('tests-') === 0;})
					.forEach(function(file, index){
						modes.forEach(function(mode) {
							commands.push({path:dir + file, mode:mode, file:file});
						});
					 });

function next(command){
	var string = '',
		child = spawn('node', [command.path, command.mode]);
	child.stdout.on('data', function(data){
		string += data;
	})
	child.on('exit', function(){
		console.log(command.file + ' [' + command.mode + ']', string.trim());
		if (commands.length === 0){
			process.exit();
		} else {
			setTimeout(function(){next(commands.shift());}, 100)
		}
	})
}

next(commands.shift());
