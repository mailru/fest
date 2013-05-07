var utils = require('./utils'),
    render = utils.render;

describe('Other errors', function () {

    beforeEach(utils.setupMatchers);

    it('should render empty string if file does not exist', function () {
        var result = render('templates/errors.xml');
        expect(
            result.contents
        ).toBe('');
        expect(
            result.errors
        ).toMatchEach([
            /error open file/
        ]);
    });

    it('should throw XML errors in strict mode', function () {
        expect(function () {
            render('templates/strict_error.xml');
        }).toThrowMatch(
            /At line 3: Error: Attribute without value/
        );
    });

});