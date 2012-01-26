package org.fest;

import com.intellij.openapi.module.Module;
import com.intellij.openapi.module.ModuleComponent;
import org.jetbrains.annotations.NotNull;

/**
 * User: Dmitry Shkinev
 * Date: 20.01.12
 * Time: 22:06
 */
public class FestModuleComponent implements ModuleComponent {
	public FestModuleComponent(Module module) {
	}

	public void initComponent() {
	}

	public void disposeComponent() {
	}

	@NotNull
	public String getComponentName() {
		return "FestModuleComponent";
	}

	public void projectOpened() {
		// called when project is opened
	}

	public void projectClosed() {
		// called when project is being closed
	}

	public void moduleAdded() {
		// Invoked when the module corresponding to this component instance has been completely
		// loaded and added to the project.
	}
}
