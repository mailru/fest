var utils = require('./utils'),
    render = utils.render;

describe('fest:doctype', function () {

    beforeEach(utils.setupMatchers);

    it('should yield DOCTYPE AS-IS', function () {
        expect(
            render('templates/doctype.xml').contents
        ).toBe(
            '<!DOCTYPE html>'
        );
    });

});