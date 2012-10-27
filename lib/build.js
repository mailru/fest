var
	fs   = require('fs'),
	path = require('path'),
	fest = require('./fest'),
	cmd  = require('./cmd');
var existsSync = fs.existsSync || path.existsSync;

function help() {
	console.log([
		'Usage:',
		'  fest-watch --dir=... [--out=...] [--wrapper=...] [--exclude=...]',
		'',
		'Options:',
		'  --dir         directory where .xml files are',
		'  --wrapper     type of postcompile wrappers, fest|loader|source|variable (default is fest)',
		'  --exclude     regexp, which files ignore',
		'  --out         out directory for compiled files if omited --out = --dir',
		'',
		'  --version     current version',
		'  --help        display these usage instructions',
		''
	].join('\n'));
	process.exit(0);
}

function version() {
	console.log(JSON.parse(fs.readFileSync(__dirname + '/../package.json')).version);
	process.exit(0);
}

if (cmd.help) {
	help();
} else if (cmd.version) {
	version();
}
var prefix = '';
var recursive = cmd.recursive !== 'no';
var dir = cmd.dir;

if (!dir){
	console.log('You need to print directory "fest-watch dir=..."\n');
	help();
	process.exit(1);
}
if (dir[0] !== '/'){
	dir = process.env.PWD + '/' + dir;
}
dir = dir.replace(/\/$/, '') + '/';
if (!existsSync(dir)){
	console.log('directory "' + dir + '" does not exists');
	process.exit(1);
}
var out_dir = cmd.out || dir;
out_dir = out_dir.replace(/\/$/, '') + '/';
if (out_dir[0] !== '/'){
	out_dir = process.env.PWD + '/' + out_dir;
}

var wrapper = cmd.wrapper || 'fest';
var watched_files = {};
var excludeRegexp = cmd.exclude ? new RegExp("^" + dir + "(" + cmd.exclude + ")") : null;

function do_compile(file, dir, out_dir, prefix){
	console.log('compile: ' + dir + file);
	var source = fest.compile(dir + file, cmd.compile || '', '');
	var file_name = (out_dir + file).replace(/\.xml/, '.js');
	if (!existsSync(out_dir)){
		fs.mkdirSync(out_dir);
	}

	fs.writeFileSync(file_name, fest.compile_tmpl(prefix + file.replace(/\.xml$/, ''), source, wrapper), 'utf8');
}

function findfiles(dir, out_dir, prefix){
	if(excludeRegexp && excludeRegexp.test(dir)) {
		console.log('exclude dir: ' + dir);
		return;
	}

	fs.readdir(dir, function(err, files){
		files.filter(function(file){
			return file.indexOf('.xml') > 0;
		}).forEach(function(file){
			console.log('watch: ' + file);
			do_compile(file, dir, out_dir, prefix);
		});

		if (recursive){
			files.filter(function(file){
				return fs.statSync(dir + file).isDirectory()

			}).forEach(function(file){
				console.log('watch directory: ' + dir + file);
				findfiles(dir + file + '/', out_dir + file + '/', prefix + file + '/');
			});
		}
	});
}

findfiles(dir, out_dir, prefix);
