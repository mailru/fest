var fs = require('fs');

describe('fest-build', function () {

    it('shoud compile directories with templates', function () {
        var actualFiles = fs.readdirSync(__dirname + '/tmp/initial'),
            expectedFiles = fs.readdirSync(__dirname + '/expected/initial');
        expect(
            actualFiles.length
        ).toBe(
            expectedFiles.length
        );
        expectedFiles.forEach(function (fn) {
            var actual = fs.readFileSync(__dirname + '/tmp/initial/' + fn, 'utf8'),
                expected = fs.readFileSync(__dirname + '/expected/initial/' + fn, 'utf8');
            expect(actual).toBe(expected);
        });
    });

    it('shoud translate and compile directories with templates', function () {
        var actualFiles = fs.readdirSync(__dirname + '/tmp/translated'),
            expectedFiles = fs.readdirSync(__dirname + '/expected/translated');
        expect(
            actualFiles.length
        ).toBe(
            expectedFiles.length
        );
        expectedFiles.forEach(function (fn) {
            var actual = fs.readFileSync(__dirname + '/tmp/translated/' + fn, 'utf8'),
                expected = fs.readFileSync(__dirname + '/expected/translated/' + fn, 'utf8');
            expect(actual).toBe(expected);
        });
    });

});