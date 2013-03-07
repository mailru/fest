var utils = require('./utils'),
    render = utils.render;

describe('fest:choose', function () {

    beforeEach(utils.setupMatchers);

    it('should provide if-then-else flow', function () {
        expect(
            render('templates/choose.xml').contents
        ).toBe(
            'truechoose'
        );
    });

    it('should throw exception if fest:when contains syntax error in test attribute', function () {
        expect(function () {
            render('templates/choose_with_error_in_test.xml');
        }).toThrowMatch(
            /At line 4: attribute "test" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

});