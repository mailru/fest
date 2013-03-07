var utils = require('./utils'),
    render = utils.render;

describe('fest:each', function () {

    beforeEach(utils.setupMatchers);

    it('should iterate through objects', function () {
        expect(
            render('templates/each.xml').contents
        ).toBe(
            'foo=barfoo=bar'
        );
    });

    it('should throw exception if fest:each contains syntax error in iterate attribute', function () {
        expect(function () {
            render('templates/each_with_error_in_iterate.xml');
        }).toThrowMatch(
            /At line 3: attribute "iterate" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

    it('should throw exception if fest:each contains syntax error in index attribute', function () {
        expect(function () {
            render('templates/each_with_error_in_index.xml');
        }).toThrowMatch(
            /At line 3: attribute "index" has an invalid identifier/
        );
    });

    it('should throw exception if fest:each contains syntax error in value attribute', function () {
        expect(function () {
            render('templates/each_with_error_in_value.xml');
        }).toThrowMatch(
            /At line 3: attribute "value" has an invalid identifier/
        );
    });

});