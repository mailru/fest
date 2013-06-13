var fs = require('fs');


describe('fest-build', function () {

    it('should compile directories with templates', function () {
        var actualFiles = fs.readdirSync(__dirname + '/tmp/build/initial'),
            expectedFiles = fs.readdirSync(__dirname + '/expected/initial');
        expect(
            actualFiles.length
        ).toBe(
            expectedFiles.length
        );
        expectedFiles.forEach(function (fn) {
            var actual = fs.readFileSync(__dirname + '/tmp/build/initial/' + fn, 'utf8'),
                expected = fs.readFileSync(__dirname + '/expected/initial/' + fn, 'utf8');
            expect(actual).toBe(expected);
        });
    });

    it('should translate and compile directories with templates', function () {
        var actualFiles = fs.readdirSync(__dirname + '/tmp/build/translated'),
            expectedFiles = fs.readdirSync(__dirname + '/expected/translated');
        expect(
            actualFiles.length
        ).toBe(
            expectedFiles.length
        );
        expectedFiles.forEach(function (fn) {
            var actual = fs.readFileSync(__dirname + '/tmp/build/translated/' + fn, 'utf8'),
                expected = fs.readFileSync(__dirname + '/expected/translated/' + fn, 'utf8');
            expect(actual).toBe(expected);
        });
    });

});


describe('fest-compile', function () {

    it('should compile directories with templates', function () {
        var actualFiles = fs.readdirSync(__dirname + '/tmp/compile/initial'),
            expectedFiles = fs.readdirSync(__dirname + '/expected/initial');
        expect(
            actualFiles.length
        ).toBe(
            expectedFiles.length
        );
        expectedFiles.forEach(function (fn) {
            var actual = fs.readFileSync(__dirname + '/tmp/compile/initial/' + fn, 'utf8'),
                expected = fs.readFileSync(__dirname + '/expected/initial/' + fn, 'utf8');
            expect(actual).toBe(expected);
        });
    });

    it('should translate and compile directories with templates', function () {
        var actualFiles = fs.readdirSync(__dirname + '/tmp/compile/translated'),
            expectedFiles = fs.readdirSync(__dirname + '/expected/translated');
        expect(
            actualFiles.length
        ).toBe(
            expectedFiles.length
        );
        expectedFiles.forEach(function (fn) {
            var actual = fs.readFileSync(__dirname + '/tmp/compile/translated/' + fn, 'utf8'),
                expected = fs.readFileSync(__dirname + '/expected/translated/' + fn, 'utf8');
            expect(actual).toBe(expected);
        });
    });

});
