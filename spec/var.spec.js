var utils = require('./utils'),
    render = utils.render;

describe('fest:var', function () {

    beforeEach(utils.setupMatchers);

    it('should set local variables', function () {
        expect(
            render('templates/var.xml').contents
        ).toBe(
            '4284'
        );
    });

    it('should throw exception if fest:var contains syntax error in select attribute', function () {
        expect(function () {
            render('templates/var_with_error_in_select.xml');
        }).toThrowMatch(
            /At line 3: attribute "select" has SyntaxError: Unexpected token ?/
        );
    });

    it('should throw exception if fest:var contains fest:set, fest:get or fest:include', function () {
        expect(function () {
            render('templates/var_with_get_block_error.xml');
        }).toThrowMatch(
            /At line 4: fest:get is not allowed inside fest:var/
        );
        expect(function () {
            render('templates/var_with_set_block_error.xml');
        }).toThrowMatch(
            /At line 4: fest:set is not allowed inside fest:var/
        );
        expect(function () {
            render('templates/var_with_include_error.xml');
        }).toThrowMatch(
            /At line 4: fest:include is not allowed inside fest:var/
        );
    });

});