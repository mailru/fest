var utils = require('./utils'),
    render = utils.render;

describe('fest:element', function () {

    beforeEach(utils.setupMatchers);

    it('should support nested elements', function () {
        var result = render('templates/element.xml');
        expect(
            result.contents
        ).toBe(
            '<div class="foo bar"></div><div><i></i></div><div>foo</div><hr/><img src="foo"/><div><span>foo</span>bar<br/><div class="foo"></div></div><div></div><div></div>'
        );
        expect(
            result.errors
        ).toMatchEach(
            [
                /name4 is not defined/,
                /nameX is not defined/,
                /Element name must be a string/
            ]
        );
    });

    it('should throw exception if fest:element contains syntax error in select attribute', function () {
        expect(function () {
            render('templates/element_with_error_in_select.xml');
        }).toThrowMatch(
            /At line 3: attribute "select" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

});