package org.fest.lang.lexer;

import com.intellij.lexer.Lexer;
import com.intellij.lexer.MergingLexerAdapter;
import com.intellij.psi.tree.IElementType;
import com.intellij.psi.tree.TokenSet;

import java.io.Reader;

/**
 * User: Dmitry Shkinev
 * Date: 13.01.12
 * Time: 23:00
 */
public class FestLexer extends MergingLexerAdapter {
	private final static TokenSet TOKENS_TO_MERGE = TokenSet.create(new IElementType[]{
			FestTokenType.XML_DATA_CHARACTERS,
			FestTokenType.XML_TAG_CHARACTERS,
			FestTokenType.XML_ATTRIBUTE_VALUE_TOKEN,
			FestTokenType.XML_PI_TARGET,
			FestTokenType.XML_COMMENT_CHARACTERS,
	});

	public FestLexer() {
		this(false);
	}

	public FestLexer(final boolean conditionalCommentsSupport) {
		this(new _FestLexer(new __FestLexer((Reader) null), conditionalCommentsSupport));
	}

	public FestLexer(Lexer baseLexer) {
		super(baseLexer, TOKENS_TO_MERGE);
	}
}
