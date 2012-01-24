package org.fest;

import com.intellij.ide.fileTemplates.FileTemplate;
import com.intellij.ide.fileTemplates.FileTemplateManager;
import com.intellij.openapi.components.ApplicationComponent;
import com.intellij.openapi.fileTypes.StdFileTypes;
import com.intellij.openapi.util.io.FileUtil;
import com.intellij.openapi.vfs.VfsUtil;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.io.InputStreamReader;

/**
 * User: Dmitry Shkinev
 * Date: 20.01.12
 * Time: 22:05
 */
public class FestApplicationComponent implements ApplicationComponent {

	private static final String FEST_TEMPLATE_NAME = "Fest template";
	private static final String FEST_TEMPLATE_LOCATION = "/template.xml";

	public FestApplicationComponent() {
	}

	public void initComponent() {

		final FileTemplateManager fileTemplateManager = FileTemplateManager.getInstance();
		final FileTemplate template = fileTemplateManager.getTemplate(FEST_TEMPLATE_NAME);
		final VirtualFile file = VfsUtil.findFileByURL(getClass().getResource(FEST_TEMPLATE_LOCATION));

		String templateText = "";
		try {
			templateText = new String(FileUtil.adaptiveLoadText(new InputStreamReader(file.getInputStream(), file.getCharset())));
		} catch (IOException e) {
		}

		if (template == null) {
			final FileTemplate fileTemplate = fileTemplateManager.addTemplate(FEST_TEMPLATE_NAME, StdFileTypes.XML.getDefaultExtension());
			fileTemplate.setText(templateText);
		} else if (template.getText().equals(templateText)) {
			fileTemplateManager.removeTemplate(template);
		}
	}

	public void runWriteAction() {

	}

	public void disposeComponent() {
	}

	@NotNull
	public String getComponentName() {
		return "FestApplicationComponent";
	}
}
