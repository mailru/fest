package org.fest.highlighter;

import com.intellij.ide.highlighter.XmlFileHighlighter;
import com.intellij.lexer.Lexer;
import com.intellij.openapi.diagnostic.Logger;
import com.intellij.openapi.editor.colors.TextAttributesKey;
import com.intellij.psi.tree.IElementType;
import org.fest.lang.lexer.FestHighlightingLexer;
import org.fest.lang.lexer.FestTokenType;
import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.Map;

/**
 * User: Dmitry Shkinev
 * Date: 12.01.12
 * Time: 21:34
 */
public class FestFileHighlighter extends XmlFileHighlighter {

	private static final Logger LOG = Logger.getInstance(FestFileHighlighter.class.getName());

	private static final Map<IElementType, TextAttributesKey> keys1;
	private static final Map<IElementType, TextAttributesKey> keys2;

	static {
		keys1 = new HashMap<IElementType, TextAttributesKey>();
		keys2 = new HashMap<IElementType, TextAttributesKey>();

		keys1.put(FestTokenType.XML_START_TAG_START, FestHighlighterColors.XML_TAG);
		keys1.put(FestTokenType.XML_END_TAG_START, FestHighlighterColors.XML_TAG);
		keys1.put(FestTokenType.XML_TAG_END, FestHighlighterColors.XML_TAG);
		keys1.put(FestTokenType.XML_EMPTY_ELEMENT_END, FestHighlighterColors.XML_TAG);
		keys1.put(FestTokenType.XML_TAG_NAME, FestHighlighterColors.XML_TAG);
		keys1.put(FestTokenType.XML_NAME, FestHighlighterColors.XML_TAG);

		keys2.put(FestTokenType.XML_TAG_NAME, FestHighlighterColors.XML_TAG_NAME);
		keys2.put(FestTokenType.XML_NAME, FestHighlighterColors.XML_ATTRIBUTE_NAME);
	}

	@NotNull
	public TextAttributesKey[] getTokenHighlights(IElementType tokenType) {
		if (keys1.containsKey(tokenType) || keys2.containsKey(tokenType)) {
			return pack(keys1.get(tokenType), keys2.get(tokenType));
		}
		return super.getTokenHighlights(tokenType);
	}

	@NotNull
	public Lexer getHighlightingLexer() {
		return new FestHighlightingLexer();
	}
}
