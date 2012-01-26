package org.fest.lang.lexer;

import com.intellij.lexer.DelegateLexer;
import com.intellij.openapi.diagnostic.Logger;
import com.intellij.psi.tree.IElementType;
import com.intellij.psi.xml.XmlTokenType;

/**
 * User: Dmitry Shkinev
 * Date: 12.01.12
 * Time: 23:18
 */
public class FestHighlightingLexer extends DelegateLexer {

	private final Logger LOG = Logger.getInstance(FestHighlightingLexer.class.getName());

	public FestHighlightingLexer() {
//		super(new XmlLexer());
		super(new FestLexer());
//		super(new FlexAdapter(new __FestLexer((Reader) null)));
	}

	public IElementType getTokenType() {
		IElementType tokenType = getDelegate().getTokenType();

		if (tokenType == null) return tokenType;

		int state = getState() & 0xF;

		tokenType = fixWrongTokenTypes(tokenType, state);
		if (tokenType != XmlTokenType.XML_COMMENT_CHARACTERS &&
				tokenType != XmlTokenType.XML_COMMENT_END &&
				tokenType != XmlTokenType.XML_COMMENT_START &&
				tokenType != XmlTokenType.XML_ATTRIBUTE_VALUE_START_DELIMITER) {
			switch (state) {
				case __FestLexer.DOCTYPE:
					tokenType = XmlTokenType.XML_DECL_START;
					break;
			}
		}

//		LOG.warn(tokenType.toString() + " " + getDelegate().getTokenText() + " " + state);

		return tokenType;
	}

	static IElementType fixWrongTokenTypes(IElementType tokenType, final int state) {
		if (tokenType == XmlTokenType.XML_NAME) {
			if (state == __FestLexer.TAG || state == __FestLexer.END_TAG) {
				tokenType = XmlTokenType.XML_TAG_NAME;
			}
		} else if (tokenType == FestTokenType.XML_NAME) {
			if (state == __FestLexer.FEST_TAG || state == __FestLexer.FEST_END_TAG) {
				tokenType = FestTokenType.XML_TAG_NAME;
			}
		} else if (tokenType == XmlTokenType.XML_WHITE_SPACE) {

			switch (state) {
				case __FestLexer.ATTR_LIST:
				case __FestLexer.ATTR:
					tokenType = XmlTokenType.TAG_WHITE_SPACE;
					break;
				default:
					tokenType = XmlTokenType.XML_REAL_WHITE_SPACE;
					break;
			}
		} else if (tokenType == XmlTokenType.XML_CHAR_ENTITY_REF ||
				tokenType == XmlTokenType.XML_ENTITY_REF_TOKEN
				) {
			if (state == __FestLexer.COMMENT) return XmlTokenType.XML_COMMENT_CHARACTERS;
		}

		return tokenType;
	}
}
