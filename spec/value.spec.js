var utils = require('./utils'),
    render = utils.render;

describe('fest:value', function () {

    beforeEach(utils.setupMatchers);

    it('should escape control characters', function () {
        expect(
            render('templates/value.xml', { 'value': 'value', 's' : '</script>' }).contents
        ).toBe(
            'valuevalue<script/>\\"|\\\'\\u003Cscript\\/\\u003E"\\u003C\/script\\u003E""value"'
        );
    });

    it('should suppress XSS', function () {
        expect(
            render('templates/xss.xml', { xss: "\\x22\\x3Ealert\\x28document.cookie\\x29\\x3C\\x2fscript\\x3E" }).contents
        ).toBe(
            '<script>document.write(\'<script id="\\\\x22\\\\x3Ealert\\\\x28document.cookie\\\\x29\\\\x3C\\\\x2fscript\\\\x3E">\');</script>'
        );
    });

});