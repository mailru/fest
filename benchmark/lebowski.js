var fs = require('fs');
var json = JSON.parse(require('fs').readFileSync(__dirname + '/lebowski.json'));
var fest = require('../lib/fest');
var Benchmark = require('./benchmark');

function runTest(type){
	var tplName = 'lebowski'+type+'.xml',
		suite = new Benchmark.Suite,
		festTpl = (new Function('return ' + fest.compile(__dirname + '/fest.'+tplName, {beatify:false})))(),
		festTplHtml;

	// fs.writeFileSync('./out/fest'+type+'.js', '__xtplFn["fest'+type+'"]=' + festTpl.toString());

	suite
		.add('fest'+type, function (){ festTplHtml = festTpl(json); })
		// .add('xtpl'+type, function (){ xtplTpl.fetch(json, xtplRender) })

		.on('cycle', function(evt) { console.log(String(evt.target)); })
		.on('error', function (evt){ console.log(evt.target); })
		.on('complete', function() {
			console.log('fest.content:', (festTplHtml.length/1024).toFixed(3), 'KB');
			// console.log('xtpl.content:', (xtplTplHtml.length/1024).toFixed(3), 'KB', xtplTplHtml == festTplHtml);
			// console.log('\033[0;32mFastest is ' + this.filter('fastest').pluck('name'), '\033[0m');
		})
	;


	suite.run({ 'async': false });
}

runTest('');
console.log('');
runTest('.block');