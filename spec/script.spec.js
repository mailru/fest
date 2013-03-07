var utils = require('./utils'),
    render = utils.render;

describe('fest:script', function () {

    beforeEach(utils.setupMatchers);

    it('should compile scrpt AS-IS', function () {
        expect(
            render('templates/script.xml', {}).contents
        ).toBe(
            '"true""true&quot;"'
        );
    });

    it('should throw exception if fest:script contains syntax error', function () {
        expect(function () {
            render('templates/include_with_error_in_context.xml');
        }).toThrowMatch(
            /At line 3: attribute "context" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

    it('should ignore non-strict fest:script', function () {
        var result = render('templates/strict.xml', {});
        expect(
            result.contents
        ).toBe(
            'true'
        );
        expect(
            result.errors
        ).toMatchEach([
            /g is not defined/
        ]);
    });

});