package org.fest.lang.lexer;

import com.intellij.psi.tree.IElementType;
import com.intellij.psi.tree.xml.IXmlLeafElementType;
import com.intellij.psi.xml.XmlTokenType;

/**
 * User: Dmitry Shkinev
 * Date: 12.01.12
 * Time: 21:42
 */
public interface FestTokenType extends XmlTokenType {
	IElementType XML_START_TAG_START = new IXmlLeafElementType("FEST_START_TAG_START");
	IElementType XML_END_TAG_START = new IXmlLeafElementType("FEST_END_TAG_START");
	IElementType XML_TAG_END = new IXmlLeafElementType("FEST_TAG_END");
	IElementType XML_EMPTY_ELEMENT_END = new IXmlLeafElementType("FEST_EMPTY_ELEMENT_END");
	IElementType XML_TAG_NAME = new IXmlLeafElementType("FEST_TAG_NAME");
	IElementType XML_NAME = new IXmlLeafElementType("FEST_NAME");
//	IElementType XML_ATTRIBUTE_VALUE_TOKEN = new IXmlLeafElementType("FEST_ATTRIBUTE_VALUE_TOKEN");
//	IElementType XML_DATA_CHARACTERS = new IXmlLeafElementType("FEST_DATA_CHARACTERS");
//	IElementType XML_TAG_CHARACTERS = new IXmlLeafElementType("FEST_TAG_CHARACTERS");
//	IElementType XML_COMMENT_CHARACTERS = new IXmlLeafElementType("FEST_COMMENT_CHARACTERS");
//	IElementType XML_PI_TARGET = new IXmlLeafElementType("FEST_PI_TARGET");
}
