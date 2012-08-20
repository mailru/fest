/**
 * @run: node proxy.js ./config.json
 */

/** @namespace require */
/** @namespace process */
/** @namespace process.argv */

var
	  fest      = require('./fest')
	, fs        = require('fs')
	, URL       = require('url')
	, http      = require('http')
    , cmd       = require('./cmd');
;

function help() {
    console.log([
        'Usage:',
        '  fest-proxy [options] [config]',
        '',
        'Options:',
        '  --version current version',
        '  --help    display these usage instructions',
        ''
    ].join('\n'));
    process.exit(0);
}

function version() {
    console.log(JSON.parse(fs.readFileSync(__dirname + '/../package.json')).version);
    process.exit(0);
}

if (cmd.help || cmd.length > 1) {
    help();
} else if (cmd.version) {
    version();
}

// Get config
if (cmd[0]) {
	fs.readFile(cmd[0], function (err, config) {
		if( err ){ throw err; }
		new Proxy(JSON.parse(config));
	});
} else {
	new Proxy();
}

function Proxy(config){
	// default
	config = extend({
		  host:         '127.0.0.1'
		, port:         '8090'
		, compile:      null
		, clientMask:   'fest/'
		, templateDir:  'fest/'
		, compileDir:   null
	}, config);

	var _rext = /\.js(\?.*$|$)/;

	/** @namespace http.createServer */
	http.createServer(function (Req, Res){
		var rootDir = Req.headers['x-fest-dir'] ? Req.headers['x-fest-dir'] + '/' : '';
		var file    = URL.parse(Req.url).pathname.replace(/^\//, '').replace(_rext, '');
		var pos     = file.indexOf(config.clientMask);

		if( ~pos ){
			file    = file.substr(pos + config.clientMask.length);
		}

		var result  = compile(file, rootDir+config.templateDir, config.compile);

		if( config.compileDir ) try {
			fs.writeFileSync(rootDir+config.compileDir+file+'.js', result, 'utf-8');
		} catch (_){
			console.log(_.message);
		}

		/** @namespace http.writeHead */
		Res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
		Res.write(result);
		Res.end();
	}).listen(config.port, config.host);
}



function compile(file, srcPath, options){
	var source;

	try {
		// file exists
		fs.lstatSync(srcPath+file+'.xml');
	} catch( err ){
		console.log(err.message);
		return  compileErrorTpl(file, srcPath+file + ' -- template not found');
	}

	try {
		// fest compile
		source  = fest.compile(srcPath+file+'.xml', options);
	} catch( err ){
		console.log(err.message);
		return  compileErrorTpl(file, 'fest.compile failed');
	}

	return  complieTpl(file, source);
}


function complieTpl(file, source){
	return  ';(function(x){if(!x.fest)x.fest={};x.fest["'+file+'"]='+source+'})(this);';
}


function compileErrorTpl(file, txt){
	return  complieTpl(file, 'function(){return "[fest.proxy.compile.error] '+ txt +'"}');
}


function extend(dst, src){
	for( var key in src ) if( src.hasOwnProperty(key) ){
		dst[key]    = src[key];
	}
	return  dst;
}


function request(url, fn){
	url = URL.parse(url);
	var opts = {
		  host:     url.hostname
		, port:     url.port
		, method:   'GET'
		, path:     url.pathname
	};

	http.request(opts, function(res){
		var content = '';
		res.on('data', function (chunk){ content += chunk; });
		res.on('end', function (){
			fn(content);
		});
	}).end();
}
