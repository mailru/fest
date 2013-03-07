var utils = require('./utils'),
    render = utils.render;

describe('fest:call', function () {

    beforeEach(utils.setupMatchers);

    it('should share context (this) with template itself and blocks', function () {
        expect(
            render('templates/call.xml', 'call').contents
        ).toBe(
            'call'
        );
    });

    it('should throw exception if fest:call contains syntax error in name attribute', function () {
        expect(function () {
            render('templates/call_with_error_in_name.xml');
        }).toThrowMatch(
            /At line 3: attribute "name" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

    it('should throw exception if fest:call contains syntax error in data attribute', function () {
        expect(function () {
            render('templates/call_with_error_in_data.xml');
        }).toThrowMatch(
            /At line 3: attribute "data" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

});