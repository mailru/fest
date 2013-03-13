var utils = require('./utils'),
    render = utils.render;

describe('fest:include', function () {

    beforeEach(utils.setupMatchers);

    it('should transparently include files', function () {
        expect(
            render('templates/include.xml', {list: [[1, 2, 3], [4, 5, 6]]}).contents
        ).toBe(
            '123456'
        );
    });

    it('should throw exception if fest:include contains syntax error in context attribute', function () {
        expect(function () {
            render('templates/include_with_error_in_context.xml');
        }).toThrowMatch(
            /At line 3: attribute "context" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

});