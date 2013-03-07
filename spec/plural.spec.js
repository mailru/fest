var utils = require('./utils'),
    render = utils.render;

describe('fest:plural', function () {

    beforeEach(utils.setupMatchers);

    it('should plural russian', function () {
        expect(
            render('templates/plural.xml', {
                n1: 1,
                n2: 23,
                n3: 166
            }).contents
        ).toBe(
            'один рубль|23 рубля|166 рублей'
        );
    });

    it('should plural english', function () {
        expect(
            render('templates/plural_english.xml', {
                n1: 1,
                n2: 23,
                n3: 166
            }).contents
        ).toBe(
            'one ruble|23 rubles|166 rubles'
        );
    });


    it('should escape control characters', function () {
        expect(
            render('templates/plural_escape.xml', {
                n1: 1,
                n2: 23
            }).contents
        ).toBe(
            '|%1%s|,|%23%s|'
        );
    });

    it('should throw exception if the template has inconsistent number of plural forms', function () {
        expect(function () {
            render('templates/plural_with_error.xml', {
                n1: 1,
                n2: 23
            });
        }).toThrowMatch(
            /At line 4: inconsistent number of plural forms in "ruble|rubles" (expected 3 but got 2)/
        );
    });

});