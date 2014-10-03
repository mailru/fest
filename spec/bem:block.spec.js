var utils = require('./utils'),
    render = utils.render;

describe('bem:block', function () {
    beforeEach(utils.setupMatchers);

    it('Объявление блока', function () {
        expect(render('templates/bem:block.xml').contents).toBe('<script><![CDATA[alert ("2" < 3);]]></script>');
    });

});
