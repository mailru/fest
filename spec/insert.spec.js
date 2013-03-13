var utils = require('./utils'),
    render = utils.render;

describe('fest:insert', function () {

    beforeEach(utils.setupMatchers);

    it('should insert files AS-IS', function () {
        expect(
            render('templates/insert.xml').contents
        ).toBe(
            '<style>.foo{ont: 18px/18px "Helvetica Neue", Arial;}\n.bar{\\"\\"}</style><script>var include_script = true + \'\\"\';\n</script>'
        );
    });

});