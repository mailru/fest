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

});