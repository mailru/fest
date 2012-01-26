package org.fest.highlighter;

import com.intellij.openapi.editor.XmlHighlighterColors;
import com.intellij.openapi.editor.colors.TextAttributesKey;
import com.intellij.openapi.editor.markup.TextAttributes;

import java.awt.*;

/**
 * User: Dmitry Shkinev
 * Date: 14.01.12
 * Time: 11:30
 */
public class FestHighlighterColors {

	private FestHighlighterColors() {
	}

	public static final TextAttributesKey XML_TAG = TextAttributesKey.createTextAttributesKey("FEST_TAG", TextAttributes.merge(XmlHighlighterColors.XML_TAG.getDefaultAttributes(), new TextAttributes(Color.GRAY, null, null, null, 0)));
	public static final TextAttributesKey XML_TAG_NAME = TextAttributesKey.createTextAttributesKey("FEST_TAG_NAME", TextAttributes.merge(XmlHighlighterColors.XML_TAG_NAME.getDefaultAttributes(), new TextAttributes(new Color(184, 101, 35), null, null, null, 0)));
	public static final TextAttributesKey XML_ATTRIBUTE_NAME = TextAttributesKey.createTextAttributesKey("FEST_ATTRIBUTE_NAME");
	public static final TextAttributesKey XML_ATTRIBUTE_VALUE = TextAttributesKey.createTextAttributesKey("FEST_ATTRIBUTE_VALUE");
	public static final TextAttributesKey XML_TAG_DATA = TextAttributesKey.createTextAttributesKey("FEST_TAG_DATA");
}
