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
	, argv      = process.argv
;


// Get config
if( argv[2] ){
	fs.readFile(argv[2], function (err, config) {
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
		, port:         '8081'
		, compile:      {}
		, templateDir:  ''
		, compileDir:   false
	}, config);

	var _rext = /\.js(\?.*$|$)/;

	/** @namespace http.createServer */
	http.createServer(function (Req, Res){
		var file    = URL.parse(Req.url).pathname.replace(_rext, '');
		var result  = compile(file, config.templateDir, config.compileDir, config.compile);
		
		console.log('fest:', file);

		/** @namespace http.writeHead */
		Res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
		Res.write(result);
		Res.end();
	}).listen(config.port, config.host);
}



function compile(file, srcPath, dstPath, options){
	var source;

	try {
		// file exists
		fs.lstatSync(srcPath+file+'.xml');
	} catch( err ){
		console.log(err);
		return  compileErrorTpl(file, srcPath+file + ' -- template not found');
	}

	try {
		// fest compile
		source  = fest.compile(srcPath+file+'.xml', options);
	} catch( err ){
		console.log(err);
		return  compileErrorTpl(file, 'fest.compile failed');
	}

	try {
		// save template
		source  = complieTpl(file, source);
		if( dstPath ) fs.writeFileSync(dstPath+file+'.js', source);
	} catch (err){
		console.log(err);
		return  compileErrorTpl(file, dstPath+file + ' -- template save failed');
	}

	return  source;
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
