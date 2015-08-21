var utils = require('./utils'),
    render = utils.render;

describe('fest:message', function () {

    beforeEach(utils.setupMatchers);

    it('should translate only marked messages by default', function () {
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
                    'Строка со\n\t\t<a href="#" title="123">ссылкой</a>': 'Line with a <a href="#" title="123">link</a>'
                }
            }).contents
        ).toBe(
            '<a href="#"><img src="favicon.png" alt="Logo of Fest"/></a>Row\n\t\n\t\tLine with a<a href="#" title="123">link</a>RowСтрока2 рубля'
        );
    });

    it('should translate all messages when auto_message option set to true', function () {
        expect(
            render('templates/message.xml', {
                name: 'Fest'
            }, {
                nplurals: 2,
                plural: function (n) {
                    return n != 1 ? 1 : 0;
                },
                auto_message: true,
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

    it('should support messages with i18n namespace', function () {
        expect(
            render('templates/message-with-i18n-ns.xml', {}, {
                messages: {
                    'Строка': 'Line'
                }
            }).contents
        ).toBe(
            'Line'
        );
    });

	it('should support external i18n function', function () {

		expect(
			render('templates/message-with-i18n-ns.xml', {}, {
				messages: {
					'Строка': 'Line'
				}
			}, {
				i18n: function (str) { return str + ' test'; }
			}).contents
		).toBe(
			'Line test'
		);

		delete global.__fest_i18n;
	});


    it('should allow redefine messages via events', function () {
        var sourceMap = {
            'Логотип {json.name}': '0',
            'Строкаrow': '2',
            'Строка со\n\t\t<a href="#" title="123">ссылкой</a>': '3'
        };

        expect(
            render('templates/message.xml', {
                name: 'Fest'
            }, {
                nplurals: 2,
                plural: function (n) {
                    return n != 1 ? 1 : 0;
                },
                auto_message: true,
                messages: {
                    '0': 'Logo of {json.name}',
                    'Строка': 'Line',
                    '2': 'Row',
                    '3': 'Line with a <a href="#" title="123">link</a>'
                },
                events: {
                    'dictionary': function (event) {
                        if (event.key == 'рубль|рубля|рублей') {
                            event.content = 'ruble|rubles';
                        }
                        else {
                            event.key = sourceMap[event.key] || event.key;
                        }
                    }
                }
            }).contents
        ).toBe(
                '<a href="#"><img src="favicon.png" alt="Logo of Fest"/></a>Row\n\t\n\t\tLine with a<a href="#" title="123">link</a>RowLine2 rubles'
            );
    });

});
