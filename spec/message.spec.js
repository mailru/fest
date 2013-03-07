var utils = require('./utils'),
    render = utils.render;

describe('fest:message', function () {

    beforeEach(utils.setupMatchers);

    it('should translate messages', function () {
        expect(
            render('templates/message.xml', {
                name: 'Fest'
            }, {
                nplurals: 2,
                plural: function (n) {
                    return n != 1 ? 1 : 0;
                },
                messages: {
                    'Логотип {json.name}': 'Logo of {json.name}',
                    'Строка': 'Line',
                    'Строкаrow': 'Row',
                    'Строка со\n\t\t<a href="#" title="123">ссылкой</a>': 'Line with a <a href="#" title="123">link</a>',
                    'рубль|рубля|рублей': 'ruble|rubles'
                }
            }).contents
        ).toBe(
            '<a href="#"><img src="favicon.png" alt="Logo of Fest"/></a>Row\n\t\n\t\tLine with a<a href="#" title="123">link</a>RowLine2 rubles'
        );
    });

});