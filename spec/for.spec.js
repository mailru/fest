var utils = require('./utils'),
    render = utils.render;

describe('fest:for', function () {

    beforeEach(utils.setupMatchers);

    it('should iterate through arrays', function () {
        expect(
            render('templates/for.xml', {items: [1, 2], subitems: [[1, 2], [1, 2]]}).contents
        ).toBe(
            ['1212', '01021112', '45'].join('')
        );
    });

    it('should throw exception if fest:for contains syntax error in from attribute', function () {
        expect(function () {
            render('templates/for_with_error_in_from.xml');
        }).toThrowMatch(
            /At line 3: attribute "from" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

    it('should throw exception if fest:for contains syntax error in to attribute', function () {
        expect(function () {
            render('templates/for_with_error_in_to.xml');
        }).toThrowMatch(
            /At line 3: attribute "to" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

    it('should throw exception if fest:for contains syntax error in iterate attribute', function () {
        expect(function () {
            render('templates/for_with_error_in_iterate.xml');
        }).toThrowMatch(
            /At line 3: attribute "iterate" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

    it('should throw exception if fest:for contains syntax error in index attribute', function () {
        expect(function () {
            render('templates/for_with_error_in_index.xml');
        }).toThrowMatch(
            /At line 3: attribute "index" has an invalid identifier/
        );
    });

    it('should throw exception if fest:for contains syntax error in value attribute', function () {
        expect(function () {
            render('templates/for_with_error_in_value.xml');
        }).toThrowMatch(
            /At line 3: attribute "value" has an invalid identifier/
        );
    });

});