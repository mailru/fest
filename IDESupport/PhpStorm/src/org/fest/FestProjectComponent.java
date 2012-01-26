package org.fest;

import com.intellij.openapi.components.ProjectComponent;
import com.intellij.openapi.project.Project;
import org.jetbrains.annotations.NotNull;

/**
 * User: Dmitry Shkinev
 * Date: 20.01.12
 * Time: 22:05
 */
public class FestProjectComponent implements ProjectComponent {
	public FestProjectComponent(Project project) {
	}

	public void initComponent() {
	}

	public void disposeComponent() {
	}

	@NotNull
	public String getComponentName() {
		return "FestProjectComponent";
	}

	public void projectOpened() {
		// called when project is opened
	}

	public void projectClosed() {
		// called when project is being closed
	}
}
