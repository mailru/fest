package org.fest.highlighter;

import com.intellij.openapi.diagnostic.Logger;
import com.intellij.openapi.options.colors.AttributesDescriptor;
import com.intellij.openapi.options.colors.pages.XMLColorsPage;
import com.intellij.openapi.util.io.FileUtil;
import com.intellij.openapi.vfs.VfsUtil;
import com.intellij.openapi.vfs.VirtualFile;
import org.fest.util.FestBundle;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.io.InputStreamReader;

/**
 * User: Dmitry Shkinev
 * Date: 12.01.12
 * Time: 21:11
 */
public class FestColorsPage extends XMLColorsPage {

	private static final Logger LOG = Logger.getInstance(FestColorsPage.class.getName());

	private static final String TEMPLATE_LOCATION = "/org/fest/highlighter/color_page_template.xml";

	private static final AttributesDescriptor[] ATTRS = new AttributesDescriptor[]{
			new AttributesDescriptor(FestBundle.message("options.fest.attribute.descriptor.tag"), FestHighlighterColors.XML_TAG),
			new AttributesDescriptor(FestBundle.message("options.fest.attribute.descriptor.tag.name"), FestHighlighterColors.XML_TAG_NAME),
	};

	@NotNull
	public AttributesDescriptor[] getAttributeDescriptors() {
		return ATTRS;
	}

	@NotNull
	public String getDisplayName() {
		return FestBundle.message("options.fest.display.name");
	}

	@NotNull
	public FestFileHighlighter getHighlighter() {
		return new FestFileHighlighter();
	}

	@NotNull
	public String getDemoText() {
		final VirtualFile file = VfsUtil.findFileByURL(getClass().getResource(TEMPLATE_LOCATION));
		String templateText = "";
		try {
			templateText = new String(FileUtil.adaptiveLoadText(new InputStreamReader(file.getInputStream(), file.getCharset())));
		} catch (IOException e) {
		}
		return templateText;
	}
}
