var utils = require('./utils'),
    render = utils.render;

describe('XML/HTML features', function () {

    beforeEach(utils.setupMatchers);

    it('should respect shortened HTML tags', function () {
        expect(
            render('templates/short_tag.xml').contents
        ).toBe(
            '<meta/>'
        );
    });

});