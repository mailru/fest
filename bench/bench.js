var fs = require('fs'),
	fest = require('../lib/fest.js');

var http = require('http');
var template = fest.compile(__dirname + '/messagelist.xml');
	template = (new Function('return ' + template))();

http.createServer(function (req, res) {
	if (req.url == '/favicon.ico') return;
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	var html = '';
	var start, total = 0;
	var json = JSON.parse(fs.readFileSync(__dirname + '/json.dat', 'utf-8')).data;
	for (var i = 0; i < 10000; i++){
		start = new Date().getTime();
		html = template(json);
		total += (new Date().getTime()) - start;
	}
	console.log(total);
	res.write(html);
	res.end('<h1>' + total + 'ms</h1>');
}).listen(8081, "127.0.0.1");
