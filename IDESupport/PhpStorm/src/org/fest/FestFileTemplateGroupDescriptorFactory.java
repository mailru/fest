package org.fest;

import com.intellij.ide.fileTemplates.FileTemplateDescriptor;
import com.intellij.ide.fileTemplates.FileTemplateGroupDescriptor;
import com.intellij.ide.fileTemplates.FileTemplateGroupDescriptorFactory;
import com.intellij.openapi.fileTypes.StdFileTypes;

/**
 * User: Dmitry Shkinev
 * Date: 21.01.12
 * Time: 15:52
 */
public class FestFileTemplateGroupDescriptorFactory implements FileTemplateGroupDescriptorFactory {

	public static final String FILE_TEMPLATE = "/org/fest/highlighter/color_page_template.xml";

	public FileTemplateGroupDescriptor getFileTemplatesDescriptor() {
		final FileTemplateGroupDescriptor group = new FileTemplateGroupDescriptor("Fest", StdFileTypes.XML.getIcon());
		group.addTemplate(new FileTemplateDescriptor(FILE_TEMPLATE, StdFileTypes.XML.getIcon()));
		return group;
	}
}
