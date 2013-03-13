var utils = require('./utils'),
    render = utils.render;

describe('fest:commnet', function () {

    beforeEach(utils.setupMatchers);

    it('should yield comments AS-IS', function () {
        expect(
            render('templates/comment.xml').contents
        ).toBe(
            '<!--comment-->'
        );
    });

});