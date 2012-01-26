package org.fest.lang.lexer;

import com.intellij.lexer.FlexAdapter;

/**
 * User: Dmitry Shkinev
 * Date: 13.01.12
 * Time: 23:18
 */
public class _FestLexer extends FlexAdapter {
	private int myState = __FestLexer.YYINITIAL;

	public _FestLexer(final __FestLexer FestLexer) {
		this(FestLexer, false);
	}

	public _FestLexer(final __FestLexer FestLexer, final boolean conditionalCommentsSupport) {
		super(FestLexer);
		FestLexer.setConditionalCommentsSupport(conditionalCommentsSupport);
	}

	private void packState() {
		final __FestLexer flex = (__FestLexer) getFlex();
		myState = ((flex.yyprevstate() & 15) << 4) | (flex.yystate() & 15);
	}

	private void handleState(final int initialState) {
		final __FestLexer flex = (__FestLexer) getFlex();
		flex.yybegin(initialState & 15);
		flex.pushState((initialState >> 4) & 15);
		packState();
	}

	public void start(final CharSequence buffer, final int startOffset, final int endOffset, final int initialState) {
		super.start(buffer, startOffset, endOffset, initialState);
		handleState(initialState);
	}

	public int getState() {
		return myState;
	}

	public void advance() {
		super.advance();
		packState();
	}
}
