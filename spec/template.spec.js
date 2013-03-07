var utils = require('./utils'),
    render = utils.render;

describe('fest:template', function () {

    beforeEach(utils.setupMatchers);

    it('should throw exception if fest:template is not closed', function () {
        expect(function () {
            render('templates/template_with_unclosed_error.xml');
        }).toThrowMatch(
            /At line 2: fest:template is not closed/
        );
    });

    it('should throw exception if the template is not well-formed', function () {
        expect(function () {
            render('templates/template_with_invalid_xml_error.xml');
        }).toThrowMatch(
            /Unexpected close tag/
        );
    });

});