var utils = require('./utils'),
    render = utils.render;

describe('bem:block', function () {
    beforeEach(utils.setupMatchers);

    it('Объявление блока', function () {
        expect(render('templates/bem:block.xml').contents).toBe('' +
			'<div class=" btn btn_main ">' +
			'<span class="btn__text ">foo</span>' +
			'</div>' +

			'<div class=" btn  btn_icon ">' +
			'<span class="btn__text  btn__text_pad">bar</span>' +
			'</div>'
		);
    });

});
