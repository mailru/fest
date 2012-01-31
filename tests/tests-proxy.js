/** @namespace require */

var
	  http      = require('http')
	, config    = { host: '127.0.0.1', port: '8081' }
;


request('/fest/if.js', function (res){
	console.log(res);
});



function request(url, fn){
	var opts = {
		  host:     config.host
		, port:     config.port
		, method:   'GET'
		, path:     url
	};

	http.request(opts, function(res){
		var content = '';
		res.on('data', function (chunk){ content += chunk; });
		res.on('end', function (){
			fn(content);
		});
	}).end();
}
