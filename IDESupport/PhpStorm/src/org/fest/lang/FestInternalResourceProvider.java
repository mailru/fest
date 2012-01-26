package org.fest.lang;

import com.intellij.javaee.InternalResourceProvider;
import com.intellij.javaee.ResourceRegistrar;
import org.fest.util.FestUtil;

/**
 * User: Dmitry Shkinev
 * Date: 20.01.12
 * Time: 20:36
 */
public class FestInternalResourceProvider extends InternalResourceProvider {
	public void registerResources(ResourceRegistrar registrar) {
		registrar.addStdResource(FestUtil.FEST_NS, FestUtil.FEST_SCHEMA_LOCATION, getClass());
	}
}
