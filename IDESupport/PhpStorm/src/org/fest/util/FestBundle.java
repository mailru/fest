package org.fest.util;

import com.intellij.CommonBundle;
import org.jetbrains.annotations.NonNls;
import org.jetbrains.annotations.PropertyKey;

import java.lang.ref.Reference;
import java.lang.ref.SoftReference;
import java.util.ResourceBundle;

/**
 * User: Dmitry Shkinev
 * Date: 15.01.12
 * Time: 13:04
 */
public class FestBundle {

	private static Reference<ResourceBundle> ourBundle;

	@NonNls
	private static final String BUNDLE = "org.fest.util.FestBundle";

	public static String message(@PropertyKey(resourceBundle = BUNDLE) String key, Object... params) {
		return CommonBundle.message(getBundle(), key, params);
	}

	private static ResourceBundle getBundle() {
		ResourceBundle bundle = null;

		if (ourBundle != null) {
			bundle = ourBundle.get();
		}

		if (bundle == null) {
			bundle = ResourceBundle.getBundle(BUNDLE);
			ourBundle = new SoftReference<ResourceBundle>(bundle);
		}

		return bundle;
	}
}
