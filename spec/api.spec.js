var fest = require('../lib/fest');

describe('API', function () {

    it('provide render() method', function () {
        expect(
            fest.render(__dirname + '/templates/if.xml')
        ).toBe(
            'truetrue&'
        );
    });

});