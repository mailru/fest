var utils = require('./utils'),
    render = utils.render,
    compile = utils.compile;

describe('fest:set and fest:get', function () {

    beforeEach(utils.setupMatchers);

    it('should share context (this) with template itself and blocks', function () {
        expect(
            render('templates/blocks.xml', undefined, undefined, {nine: 'nine'}).contents
        ).toBe(
            'start|one|two2|three1|five|six|seven|eight|nine|ten|eleven|finish'
        );
    });

    it('should respect included blocks', function () {
        expect(
            render('templates/block_with_include.xml').contents
        ).toBe(
            'outerinner'
        );
    });

    it('should support fest:param and fest:params', function () {
        expect(
            render('templates/block_with_params.xml', {title: 'Fest'}).contents
        ).toBe(
            '<!DOCTYPE html><title>Fest</title><body><article><h1>Fest</h1><p>200</p></article></body><title>other name</title><h1>Fest start page </h1><big><h1>Hi, David</h1></big><p>lorem ipsum</p>about'
        );
    });

    it('fix bug when threre is error in select attribute', function () {
        expect(
            render('templates/block_unsuspected_recursion.xml').contents
        ).toBe(
            ''
        );
    });

    it('should provide access to parameters', function () {
        expect(
            render('templates/params.xml').contents
        ).toBe(
            'Hello, John\n---'
        );

        expect(
            render('templates/set_params.xml').contents
        ).toBe(
            '|text1||text2||text3||text4||set in inner|'
        );
    });

    it('should throw exception if fest:set contains syntax error in test attribute', function () {
        expect(function () {
            render('templates/set_with_error_in_test.xml');
        }).toThrowMatch(
            /At line 3: attribute "test" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

    it('should throw exception if the template contains nested fest:set', function () {
        expect(function () {
            render('templates/set_with_nested_error.xml');
        }).toThrowMatch(
            /At line 5: fest:set cannot be defined in another fest:set or fest:param/
        );
        expect(function () {
            render('templates/set_with_nested_set_error.xml');
        }).toThrowMatch(
            /At line 3: fest:set cannot be defined in another fest:set or fest:param/
        );
        expect(function () {
            render('templates/set_with_set_in_param_error.xml');
        }).toThrowMatch(
            /At line 3: fest:set cannot be defined in another fest:set or fest:param/
        );
    });

    it('should not include in the compiled source code definition of set-blocks that will never be called', function () {
        var result = compile('templates/useless_set.xml');
        expect(
            result.contents.indexOf('__fest_blocks.foo') > -1
        ).toBe(true);
        expect(
            result.contents.indexOf('__fest_blocks.bar') == -1
        ).toBe(true);
        expect(
            result.contents.indexOf('__fest_blocks.baz') == -1
        ).toBe(true);
        expect(
            result.contents.indexOf('__fest_blocks.qux') == -1
        ).toBe(true);
    });

    it('should DO include in the compiled source code definition of all set-blocks if at least one get-block with select is attribute presented', function () {
        var result = compile('templates/useless_set_select.xml');
        expect(
            result.contents.indexOf('__fest_blocks.foo') > -1
        ).toBe(true);
        expect(
            result.contents.indexOf('__fest_blocks.bar') > -1
        ).toBe(true);
        expect(
            result.contents.indexOf('__fest_blocks.baz') > -1
        ).toBe(true);
        expect(
            result.contents.indexOf('__fest_blocks.qux') > -1
        ).toBe(true);
    });

});