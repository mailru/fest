var fs = require('fs');

function equal(actual, expected, file) {
	file = file.substr(__dirname.length);
	expect(actual.trim() == expected.trim() ? file : 'fail').toBe(file);
}

describe('fest-build', function () {

	it('should compile directories with templates', function () {
		var actualFiles = fs.readdirSync(__dirname + '/tmp/build/initial'),
			expectedFiles = fs.readdirSync(__dirname + '/expected/build/initial');

		expect(actualFiles.length).toBe(expectedFiles.length);

		expectedFiles.forEach(function (fn) {
			var file = __dirname + '/expected/build/initial/' + fn,
				actual = fs.readFileSync(__dirname + '/tmp/build/initial/' + fn, 'utf8'),
				expected = fs.readFileSync(file, 'utf8');

			equal(actual, expected, file);
		});
	});

	it('should translate and compile directories with templates', function () {
		var actualFiles = fs.readdirSync(__dirname + '/tmp/build/translated'),
			expectedFiles = fs.readdirSync(__dirname + '/expected/build/translated');

		expect(actualFiles.length).toBe(expectedFiles.length);

		expectedFiles.forEach(function (fn) {
			var file = __dirname + '/expected/build/translated/' + fn,
				actual = fs.readFileSync(__dirname + '/tmp/build/translated/' + fn, 'utf8'),
				expected = fs.readFileSync(file, 'utf8');

			equal(actual, expected, file);
		});
	});

});


describe('fest-compile', function () {

	it('should compile directories with templates', function () {
		var actualFiles = fs.readdirSync(__dirname + '/tmp/compile/initial'),
			expectedFiles = fs.readdirSync(__dirname + '/expected/compile/initial');

		expect(actualFiles.length).toBe(expectedFiles.length);

		expectedFiles.forEach(function (fn) {
			var file = __dirname + '/expected/compile/initial/' + fn,
				actual = fs.readFileSync(__dirname + '/tmp/compile/initial/' + fn, 'utf8'),
				expected = fs.readFileSync(file, 'utf8');

			equal(actual, expected, file);
		});
	});

	it('should translate and compile directories with templates', function () {
		var actualFiles = fs.readdirSync(__dirname + '/tmp/compile/translated'),
			expectedFiles = fs.readdirSync(__dirname + '/expected/compile/translated');

		expect(actualFiles.length).toBe(expectedFiles.length);

		expectedFiles.forEach(function (fn) {
			var file = __dirname + '/expected/compile/translated/' + fn,
				actual = fs.readFileSync(__dirname + '/tmp/compile/translated/' + fn, 'utf8'),
				expected = fs.readFileSync(file, 'utf8');

			equal(actual, expected, file);
		});
	});

});
