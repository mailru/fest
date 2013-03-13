var utils = require('./utils'),
    render = utils.render;

describe('fest:if', function () {

    beforeEach(utils.setupMatchers);

    it('should render truthful blocks only', function () {
        expect(
            render('templates/if.xml').contents
        ).toBe(
            'truetrue&'
        );
    });

    it('should throw exception if fest:if contains syntax error in test attribute', function () {
        expect(function () {
            render('templates/if_with_error_in_test.xml');
        }).toThrowMatch(
            /At line 3: attribute "test" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

});