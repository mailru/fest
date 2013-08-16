var utils = require('./utils'),
    render = utils.render;

describe('fest:attribute(s)', function () {

    beforeEach(utils.setupMatchers);

    it('should respect if/choose and quotes', function () {
        expect(
            render('templates/attribute.xml').contents
        ).toBe(
            '<input/><div>foobar</div><div class="foo bar"></div><div class="foo"></div><div when="true" otherwise="true" \"=\"\"\"></div><div>foo</div><div data-kata="abcd_efg"></div>'
        );
    });

    it('should throw exception if fest:attributes is not first child', function () {
        expect(function () {
            render('templates/attribute_with_first_attributes_error.xml');
        }).toThrowMatch(
            /At line 5: fest:attributes must be the first child/
        );
    });

    it('should throw exception if fest:attributes are nested', function () {
        expect(function () {
            render('templates/attribute_with_nested_attributes_error.xml');
        }).toThrowMatch(
            /At line 5: fest:attributes cannot be nested/
        );
    });

    it('should respect javascript expressions in attributes', function () {
        expect(
            render('templates/attribute_expression.xml').contents
        ).toBe(
            '<div class="b-block" data-amp="&amp;" data-lt="&lt;" data-gt="&gt;" data-apos="\'" data-quot="&quot;" data-elcb="{" data-ercb="}" data-lcb="{" data-rcb="}" data-ecb="{}" data-dcb="{}" data-crazy="{{}{}}" data-crazy-again="{{}{}}" data-crazy-too="{}{}"><div class="b-block_modifier" data-has-modifier="true"></div><div class="b-block__element" data-obj-value="value" data-obj-json="{ &quot;key&quot;: &quot;value&quot; }"><span class="name" data-spec-chars="{&lt;&quot;\'&amp;&gt;}" data-espec-chars="{&lt;&quot;\'&amp;&gt;}">b-block__element_modifier</span></div></div>1245<div data-lf="a\n\rb" data-backslash="\\" data-apos="\'" data-quot="&quot;" data-block="A" data-block-with-text="aB{c}"></div>'
        );
    });


    it('should throw exception if attribute expression contains syntax errors', function () {
        expect(function () {
            render('templates/attribute_expression_with_error.xml');
        }).toThrowMatch(
            /At line 3: expression #1 in attribute "class" has SyntaxError: Unexpected token ILLEGAL/
        );
    });

    it('should fix #64', function () {
        expect(
            render('templates/issue_64.xml').contents
        ).toBe(
            '<img src="img/emb.png" onclick=" document.location.href = &quot;/&quot; "/>'
        );
    });

});