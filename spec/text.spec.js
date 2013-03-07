var utils = require('./utils'),
    render = utils.render;

describe('fest:text', function () {

    beforeEach(utils.setupMatchers);

    it('should yield text AS-IS', function () {
        expect(
            render('templates/text.xml').contents
        ).toBe(
            '  \\'
        );
    });

});