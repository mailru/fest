var utils = require('./utils'),
    render = utils.render;

describe('fest:cdata', function () {

    beforeEach(utils.setupMatchers);

    it('should yield CDATA AS-IS', function () {
        expect(
            render('templates/cdata.xml').contents
        ).toBe(
            '<script><![CDATA[alert ("2" < 3);]]></script>'
        );
    });

});