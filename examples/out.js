;
(function () {
	var x = Function('return this')();
	if (!x.fest)x.fest = {};
	x.fest['pages/lego'] = function (__fest_context) {
		"use strict";
		var __fest_self = this, __fest_buf = [], __fest_chunks = [], __fest_chunk, __fest_attrs = [], __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_html = [], __fest_blocks = {}, __fest_params, __fest_element, __fest_debug_file = "", __fest_debug_line = "", __fest_debug_block = "", __fest_htmlchars = /[&<>"]/g, __fest_htmlchars_test = /[&<>"]/, __fest_short_tags = {
			"area": true,
			"base": true,
			"br": true,
			"col": true,
			"command": true,
			"embed": true,
			"hr": true,
			"img": true,
			"input": true,
			"keygen": true,
			"link": true,
			"meta": true,
			"param": true,
			"source": true,
			"wbr": true
		}, __fest_element_stack = [], __fest_htmlhash = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;"
		}, __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g, __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/, __fest_jshash = {
			"\"": "\\\"",
			"\\": "\\\\",
			"/": "\\/",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\b": "\\b",
			"\f": "\\f",
			"'": "\\'",
			"<": "\\u003C",
			">": "\\u003E"
		}, ___fest_log_error;
		if (typeof __fest_error === "undefined") {
			___fest_log_error = (typeof console !== "undefined" && console.error) ? function () {
				return Function.prototype.apply.call(console.error, console, arguments)
			} : function () {
			};
		} else {
			___fest_log_error = __fest_error
		}
		;
		function __fest_log_error(msg) {
			___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file)
		}

		function __fest_replaceHTML(chr) {
			return __fest_htmlhash[chr]
		}

		function __fest_replaceJS(chr) {
			return __fest_jshash[chr]
		}

		function __fest_extend(dest, src) {
			for (var i in src)if (src.hasOwnProperty(i))dest[i] = src[i];
		}

		function __fest_param(fn) {
			fn.param = true;
			return fn
		}

		function __fest_call(fn, params, cp) {
			if (cp)for (var i in params)if (typeof params[i] == "function" && params[i].param)params[i] = params[i]();
			return fn.call(__fest_self, params)
		}

		function __fest_escapeJS(s) {
			if (typeof s === "string") {
				if (__fest_jschars_test.test(s))return s.replace(__fest_jschars, __fest_replaceJS);
			} else if (typeof s === "undefined")return "";
			return s;
		}

		function __fest_escapeHTML(s) {
			if (typeof s === "string") {
				if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars, __fest_replaceHTML);
			} else if (typeof s === "undefined")return "";
			return s;
		}

		var ctx = __fest_context;
		try {
			__fest_blocks = this.__fest_blocks || __fest_blocks;

			var toolkit = patron.toolkit,
				lang = toolkit.lang
				;
		} catch (e) {
			__fest_log_error(e.message);
		}
		try {
			__fest_if = !this.__fest_blocks
		} catch (e) {
			__fest_if = false;
			__fest_log_error(e.message);
		}
		if (__fest_if) {
			//try {// Запоминаем блоки
				this.__fest_blocks = __fest_blocks;
				__fest_call = function (fn, ctx) {
					return fn(ctx);
				};
			//} catch (e) {
			//	__fest_log_error(e.message);
			//}
			(function (__fest_context) {
				var json = __fest_context;
				(function (__fest_context) {
					var json = __fest_context;
					(function (__fest_context) {
						__fest_blocks["b-dropdown"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div data-bem=\"b-dropdown\"");
							try {
								__fest_if = params.mnemo
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-mnemo=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.mnemo))
								} catch (e) {
									__fest_log_error(e.message + "8");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(" class=\"b-dropdown");
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML('b-dropdown_' + params.mods.join(' b-dropdown_')))
								} catch (e) {
									__fest_log_error(e.message + "18");
								}
							}
							try {
								__fest_if = params.classes
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML(params.classes.join(' ')))
								} catch (e) {
									__fest_log_error(e.message + "23");
								}
							}
							__fest_buf.push("\"");
							try {
								__fest_if = params.mods && Array.indexOf(params.mods, 'disabled') != -1
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" aria-disabled=\"disabled\"");
							}
							try {
								__fest_if = params.group
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-group=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.group))
								} catch (e) {
									__fest_log_error(e.message + "33");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.id != null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.id))
								} catch (e) {
									__fest_log_error(e.message + "39");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.ctrl && params.ctrl.shortcut && !params.ctrl.block ? 'js-shortcut' : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-dropdown__ctrl " + __fest_attrs[0] + "\" data-mnemo=\"ctrl\"");
							try {
								var _title_ = ((!params.ctrl || params.ctrl.title == null) && typeof lang == 'object')
										? (lang['b-dropdown'].titles[params.group] || lang['b-dropdown'][params.group])
										: params.ctrl.title
									;
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_if = _title_
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" title=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(_title_))
								} catch (e) {
									__fest_log_error(e.message + "54");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.ctrl && params.ctrl.shortcut && !params.ctrl.block
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-shortcut=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.ctrl.shortcut))
								} catch (e) {
									__fest_log_error(e.message + "59");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = params.ctrl && params.ctrl.block
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_select = params.ctrl.block
								} catch (e) {
									__fest_select = "";
									__fest_log_error(e.message)
								}
								__fest_params = {};
								try {
									__fest_params = params.ctrl
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							try {
								__fest_if = !params.ctrl || !params.ctrl.block
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_if = params.ctrl && params.ctrl.icon
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "ico";
									__fest_params = {};
									try {
										__fest_params = {
											mods: [].concat(params.ctrl.icon.split('_').shift(), params.ctrl.icon)
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
								__fest_buf.push("<span");
								try {
									__fest_if = params.ctrl && params.ctrl.icon
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" class=\"b-dropdown__text b-dropdown__text_pad\"");
								}
								__fest_buf.push(">");
								try {
									__fest_buf.push(__fest_escapeHTML(((!params.ctrl || params.ctrl.text == null) && typeof lang == 'object') ? lang['b-dropdown'][params.group] : params.ctrl.text))
								} catch (e) {
									__fest_log_error(e.message + "81");
								}
								__fest_buf.push("</span>");
							}
							__fest_buf.push("<div class=\"b-dropdown__arrow\"></div></div><div class=\"b-dropdown__list\" style=\"display: none;\">");
							try {
								__fest_if = params.items
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "b-dropdown__list";
								__fest_params = {};
								try {
									__fest_params = {
										group: params.group, items: params.items
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-dropdown__list"] = function (params) {
							var __fest_buf = [];
							var i, item, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.items || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								item = __fest_iterator0[i];
								try {
									if (item && (item instanceof Object)) {
										var _lang = (typeof lang == 'object' && lang['b-dropdown'][params.group + '.']) || {};
										item.text = (item.text == null ? _lang[item.name] : (_lang[item.text] || item.text));
									}
								} catch (e) {
									__fest_log_error(e.message);
								}
								try {
									__fest_if = item == 'hr' || item.hr
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-dropdown__list__hr\"></div>");
								} else {
									try {
										__fest_if = !item || item.hidden
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
									} else {
										try {
											__fest_if = item.block
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<div data-bem=\"b-dropdown__list__item\"");
											try {
												__fest_if = item.id != null
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push(" data-id=\"");
												try {
													__fest_buf.push(__fest_escapeHTML(item.id))
												} catch (e) {
													__fest_log_error(e.message + "119");
												}
												__fest_buf.push("\"");
											}
											try {
												__fest_if = item.name
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push(" data-name=\"");
												try {
													__fest_buf.push(__fest_escapeHTML(item.name))
												} catch (e) {
													__fest_log_error(e.message + "123");
												}
												__fest_buf.push("\"");
											}
											__fest_buf.push(" class=\"b-dropdown__list__item");
											try {
												__fest_if = item.disabled
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push(" b-dropdown__list__item_disabled");
											}
											try {
												__fest_if = item.mods
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push(" ");
												try {
													__fest_buf.push(__fest_escapeHTML('b-dropdown__list__item_' + item.mods.join(' b-dropdown__list__item_')))
												} catch (e) {
													__fest_log_error(e.message + "136");
												}
											}
											__fest_buf.push("\"");
											try {
												__fest_if = item.disabled
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push(" aria-disabled=\"disabled\"");
											}
											__fest_buf.push(">");
											try {
												__fest_select = item.block
											} catch (e) {
												__fest_select = "";
												__fest_log_error(e.message)
											}
											__fest_params = {};
											try {
												__fest_params = item
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
											__fest_buf.push("</div>");
										} else {
											try {
												__fest_if = item.group
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push("<div class=\"b-dropdown__group");
												try {
													__fest_if = item.mods
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													__fest_buf.push(" ");
													try {
														__fest_buf.push(__fest_escapeHTML('b-dropdown__group_' + item.mods.join(' b-dropdown__group_')))
													} catch (e) {
														__fest_log_error(e.message + "157");
													}
												}
												__fest_buf.push("\">");
												var j, subitem, __fest_to1, __fest_iterator1;
												try {
													__fest_iterator1 = item.items || [];
													__fest_to1 = __fest_iterator1.length;
												} catch (e) {
													__fest_iterator1 = [];
													__fest_to1 = 0;
													__fest_log_error(e.message);
												}
												for (j = 0; j < __fest_to1; j++) {
													subitem = __fest_iterator1[j];
													__fest_select = "b-dropdown__item";
													__fest_params = {};
													try {
														__fest_params = subitem
													} catch (e) {
														__fest_log_error(e.message)
													}
													__fest_fn = __fest_blocks[__fest_select];
													if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
												}
												__fest_buf.push("</div>");
											} else {
												__fest_select = "b-dropdown__item";
												__fest_params = {};
												try {
													__fest_params = item
												} catch (e) {
													__fest_log_error(e.message)
												}
												__fest_fn = __fest_blocks[__fest_select];
												if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
											}
										}
									}
								}
							}
							return __fest_buf.join("");
						};
						__fest_blocks["b-dropdown__item"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_if = params.custom_block
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-dropdown__list__custom-item\">");
								try {
									__fest_select = (params.custom_block)
								} catch (e) {
									__fest_select = "";
									__fest_log_error(e.message)
								}
								__fest_params = {};
								try {
									__fest_params = params
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
							} else {
								__fest_buf.push("<a data-bem=\"b-dropdown__list__params\"");
								try {
									__fest_if = params.id != null
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-id=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.id))
									} catch (e) {
										__fest_log_error(e.message + "187");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.name
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-name=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.name))
									} catch (e) {
										__fest_log_error(e.message + "193");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params['sort']
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" aria-sort=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params['sort']))
									} catch (e) {
										__fest_log_error(e.message + "199");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push(" class=\"b-dropdown__list__item");
								try {
									__fest_if = params.disabled
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" b-dropdown__list__item_disabled");
								}
								try {
									__fest_if = params.parent_id != null
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" b-dropdown__list__item_pad");
								}
								try {
									__fest_if = params.mods
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" ");
									try {
										__fest_buf.push(__fest_escapeHTML('b-dropdown__list__item_' + params.mods.join(' b-dropdown__list__item_')))
									} catch (e) {
										__fest_log_error(e.message + "217");
									}
								}
								__fest_buf.push("\"");
								try {
									__fest_if = params.disabled
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" aria-disabled=\"disabled\"");
								}
								try {
									__fest_if = params.style
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" style=\"");
									try {
										__fest_buf.push(params.style)
									} catch (e) {
										__fest_log_error(e.message + "227");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push(">");
								try {
									__fest_if = params.icon
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "ico";
									__fest_params = {};
									try {
										__fest_params = {mods: [params.icon.split('_')[0], params.icon]}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
								try {
									__fest_if = params.html != null
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_buf.push(params.html)
									} catch (e) {
										__fest_log_error(e.message + "238");
									}
								} else {
									__fest_buf.push("<span class=\"b-dropdown__list__item__text\">");
									try {
										__fest_buf.push(__fest_escapeHTML(params.text))
									} catch (e) {
										__fest_log_error(e.message + "243");
									}
									__fest_buf.push("</span>");
									try {
										__fest_if = params.shortcuthint
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span class=\"b-dropdown__list__item__hint\">");
										try {
											__fest_buf.push(__fest_escapeHTML(params.shortcuthint))
										} catch (e) {
											__fest_log_error(e.message + "248");
										}
										__fest_buf.push("</span>");
									}
								}
								__fest_buf.push("</a>");
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-dropdown__item-caption"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-dropdown__item-caption\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.name))
							} catch (e) {
								__fest_log_error(e.message + "4");
							}
							__fest_buf.push(":</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-dropdown__item-correspondent"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div");
							try {
								__fest_if = window.patron && patron.ContactInformerInLetter
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" class=\"js-contact-informer b-dropdown__item-correspondent\" data-contact-informer-message-id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.id))
								} catch (e) {
									__fest_log_error(e.message + "11");
								}
								__fest_buf.push("\" data-contact-informer-email=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.email))
								} catch (e) {
									__fest_log_error(e.message + "14");
								}
								__fest_buf.push("\"");
							} else {
								__fest_buf.push(" class=\"b-dropdown__item-correspondent\"");
							}
							__fest_buf.push(" data-suggest=\"");
							try {
								__fest_buf.push(__fest_escapeHTML(params.suggest))
							} catch (e) {
								__fest_log_error(e.message + "24");
							}
							__fest_buf.push("\"><div class=\"b-dropdown__item-correspondent__pic\">");
							__fest_select = "b-userpic";
							__fest_params = {};
							try {
								__fest_params = params
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							__fest_buf.push("</div><div class=\"b-dropdown__item-correspondent__info ");
							try {
								__fest_if = !params.name
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("b-dropdown__item-correspondent__info_center");
							}
							__fest_buf.push("\"");
							try {
								__fest_if = params.title
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" title=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.title))
								} catch (e) {
									__fest_log_error(e.message + "43");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = params.name
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-dropdown__item-correspondent__name\">");
								try {
									__fest_buf.push(params.name)
								} catch (e) {
									__fest_log_error(e.message + "49");
								}
								__fest_buf.push("</div><div class=\"b-dropdown__item-correspondent__text\">");
								try {
									__fest_buf.push(params.email)
								} catch (e) {
									__fest_log_error(e.message + "51");
								}
								__fest_buf.push("</div>");
							} else {
								__fest_buf.push("<div class=\"b-dropdown__item-correspondent__name\">");
								try {
									__fest_buf.push(params.email)
								} catch (e) {
									__fest_log_error(e.message + "56");
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-toolbar"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-toolbar_' + params.mods.join(' b-toolbar_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-toolbar" + __fest_attrs[0] + "\"");
							try {
								__fest_if = params.mnemo
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-mnemo=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.mnemo))
								} catch (e) {
									__fest_log_error(e.message + "8");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							var i, item, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.items || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								item = __fest_iterator0[i];
								try {
									__fest_if = item.group
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "b-toolbar__group";
									__fest_params = {};
									try {
										__fest_params = item
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								} else {
									try {
										__fest_if = !item || item.hidden
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
									} else {
										__fest_select = "b-toolbar__item";
										__fest_params = {};
										try {
											__fest_params = item
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
								}
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-toolbar__btn"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_if = params.items
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div");
								try {
									__fest_if = params.role
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" role=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.role + ""))
									} catch (e) {
										__fest_log_error(e.message + "9");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.mods && Array.indexOf(params.mods, 'disabled') != -1
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" aria-disabled=\"disabled\"");
								}
								try {
									__fest_if = params.name
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-name=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.name))
									} catch (e) {
										__fest_log_error(e.message + "18");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.group
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-group=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.group))
									} catch (e) {
										__fest_log_error(e.message + "24");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.title
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" title=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.title))
									} catch (e) {
										__fest_log_error(e.message + "30");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.id != null
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" id=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.id))
									} catch (e) {
										__fest_log_error(e.message + "36");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push(">");
								var idx, btn, __fest_to0, __fest_iterator0;
								try {
									__fest_iterator0 = params.items || [];
									__fest_to0 = __fest_iterator0.length;
								} catch (e) {
									__fest_iterator0 = [];
									__fest_to0 = 0;
									__fest_log_error(e.message);
								}
								for (idx = 0; idx < __fest_to0; idx++) {
									btn = __fest_iterator0[idx];
									try {
										__fest_if = btn
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											btn.mods = btn.mods || [];
											btn.mods.push('grouped');

											if (!idx) {
												btn.mods.push('grouped_first');
											}
											else if (params.items.length - idx == 1) {
												btn.mods.push('grouped_last');
											}
										} catch (e) {
											__fest_log_error(e.message);
										}
										try {
											__fest_select = btn.block || 'b-toolbar__btn'
										} catch (e) {
											__fest_select = "";
											__fest_log_error(e.message)
										}
										__fest_params = {};
										try {
											__fest_params = btn
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
								}
								__fest_buf.push("</div>");
							} else {
								try {
									var _text_ = (params.text == null && typeof lang == 'object') ? lang.btn[params.name] : params.text;
									var _title_ = (params.title == null && typeof lang == 'object')
											? (lang.btn.titles[params.name] || lang.btn[params.name])
											: params.title
										;
								} catch (e) {
									__fest_log_error(e.message);
								}
								try {
									__fest_element = params.href ? 'a' : 'div';
									if (typeof __fest_element !== "string") {
										__fest_log_error("Element name must be a string");
										__fest_element = "div"
									}
								} catch (e) {
									__fest_element = "div";
									__fest_log_error(e.message);
								}
								__fest_element_stack.push(__fest_element);
								__fest_buf.push("<" + __fest_element);
								__fest_buf.push(" data-bem=\"b-toolbar__btn\"");
								try {
									__fest_if = params.role
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" role=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.role + ""))
									} catch (e) {
										__fest_log_error(e.message + "74");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.mods && Array.indexOf(params.mods, 'disabled') != -1
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" aria-disabled=\"disabled\"");
								}
								try {
									__fest_if = params.name
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-name=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.name))
									} catch (e) {
										__fest_log_error(e.message + "83");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.href
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_if = params.history !== false
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(" rel=\"history\"");
									}
									__fest_buf.push(" href=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.href))
									} catch (e) {
										__fest_log_error(e.message + "91");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.target
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" target=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.target))
									} catch (e) {
										__fest_log_error(e.message + "95");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = _title_
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" title=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(_title_))
									} catch (e) {
										__fest_log_error(e.message + "100");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.shortcut
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-shortcut=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.shortcut))
									} catch (e) {
										__fest_log_error(e.message + "106");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push(" class=\"b-toolbar__btn");
								try {
									__fest_if = params.mods
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_buf.push(__fest_escapeHTML(' b-toolbar__btn_' + params.mods.join(' b-toolbar__btn_')))
									} catch (e) {
										__fest_log_error(e.message + "113");
									}
								}
								try {
									__fest_if = params.classes
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" ");
									try {
										__fest_buf.push(__fest_escapeHTML(params.classes.join(' ')))
									} catch (e) {
										__fest_log_error(e.message + "118");
									}
								}
								try {
									__fest_if = params.shortcut
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" js-shortcut");
								}
								__fest_buf.push("\"");
								try {
									__fest_if = params.id != null
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" id=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.id))
									} catch (e) {
										__fest_log_error(e.message + "129");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.rb
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-rb=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.rb))
									} catch (e) {
										__fest_log_error(e.message + "135");
									}
									__fest_buf.push("\"");
								}
								__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
								__fest_buf.push(__fest_element in __fest_short_tags ? "/>" : ">");
								try {
									__fest_if = params.icon
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "ico";
									__fest_params = {};
									try {
										__fest_params = {mods: [params.icon.split('_')[0], params.icon]}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
								try {
									__fest_if = params.ctrl
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_select = params.ctrl.block
									} catch (e) {
										__fest_select = "";
										__fest_log_error(e.message)
									}
									__fest_params = {};
									try {
										__fest_params = params.ctrl
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								} else {
									try {
										__fest_if = _text_
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											__fest_attrs[0] = __fest_escapeHTML(params.icon ? ' b-toolbar__btn__text_pad' : '')
										} catch (e) {
											__fest_attrs[0] = "";
											__fest_log_error(e.message);
										}
										__fest_buf.push("<span class=\"b-toolbar__btn__text" + __fest_attrs[0] + "\">");
										try {
											__fest_buf.push(__fest_escapeHTML(_text_))
										} catch (e) {
											__fest_log_error(e.message + "151");
										}
										__fest_buf.push("</span>");
									} else {
									}
								}
								__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
								if (!(__fest_element in __fest_short_tags)) {
									__fest_buf.push("</" + __fest_element + ">")
								}
								__fest_element_stack.pop();
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-toolbar__group"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.group)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(params.mods ? ' b-toolbar__group_' + params.mods.join(' b-toolbar__group_') : '')
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div data-toolbar-group=\"" + __fest_attrs[0] + "\" class=\"b-toolbar__group" + __fest_attrs[1] + "\">");
							try {
								__fest_if = params.items
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								var i, item, __fest_to0, __fest_iterator0;
								try {
									__fest_iterator0 = params.items || [];
									__fest_to0 = __fest_iterator0.length;
								} catch (e) {
									__fest_iterator0 = [];
									__fest_to0 = 0;
									__fest_log_error(e.message);
								}
								for (i = 0; i < __fest_to0; i++) {
									item = __fest_iterator0[i];
									try {
										__fest_if = item
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-toolbar__item";
										__fest_params = {};
										try {
											__fest_params = item
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
								}
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-toolbar__inp"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-toolbar__inp");
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_buf.push(__fest_escapeHTML(' b-toolbar__inp_' + params.mods.join(' b-toolbar__inp_')))
								} catch (e) {
									__fest_log_error(e.message + "9");
								}
							}
							try {
								__fest_if = params.classes
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML(params.classes.join(' ')))
								} catch (e) {
									__fest_log_error(e.message + "14");
								}
							}
							__fest_buf.push("\">");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.value)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(lang.placeholder[params.placeholder])
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[2] = __fest_escapeHTML(params.name)
							} catch (e) {
								__fest_attrs[2] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[3] = __fest_escapeHTML(params.type || 'text')
							} catch (e) {
								__fest_attrs[3] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<input value=\"" + __fest_attrs[0] + "\" placeholder=\"" + __fest_attrs[1] + "\" name=\"" + __fest_attrs[2] + "\" type=\"" + __fest_attrs[3] + "\"/></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-toolbar__item"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-toolbar__item");
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML('b-toolbar__item_' + params.mods.join(' b-toolbar__item_')))
								} catch (e) {
									__fest_log_error(e.message + "10");
								}
							}
							try {
								__fest_if = params.classes
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML(params.classes.join(' ')))
								} catch (e) {
									__fest_log_error(e.message + "15");
								}
							}
							__fest_buf.push("\">");
							try {
								__fest_select = params.block
							} catch (e) {
								__fest_select = "";
								__fest_log_error(e.message)
							}
							__fest_params = {};
							try {
								__fest_params = params.params || params
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-toolbar__link"] = function (params) {
							var __fest_buf = [];
							try {
								var _text_ = (params.text == null && typeof lang == 'object') ? lang.btn[params.name] : params.text;
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-toolbar__link_' + params.mods.join(' b-toolbar__link_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<a data-bem=\"b-toolbar__link\" class=\"b-toolbar__link" + __fest_attrs[0] + "\"");
							try {
								__fest_if = params.role
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" role=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.role + ""))
								} catch (e) {
									__fest_log_error(e.message + "11");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.mods && Array.indexOf(params.mods, 'disabled') != -1
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" aria-disabled=\"disabled\"");
							}
							try {
								__fest_if = params.name
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-name=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.name))
								} catch (e) {
									__fest_log_error(e.message + "20");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.title
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" title=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.title))
								} catch (e) {
									__fest_log_error(e.message + "26");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.id != null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.id))
								} catch (e) {
									__fest_log_error(e.message + "32");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.target
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" target=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.target))
								} catch (e) {
									__fest_log_error(e.message + "38");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(" href=\"");
							try {
								__fest_buf.push(__fest_escapeHTML(params.href || "#"))
							} catch (e) {
								__fest_log_error(e.message + "43");
							}
							__fest_buf.push("\">");
							try {
								__fest_if = params.icon
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "ico";
								__fest_params = {};
								try {
									__fest_params = {mods: [params.icon.split('_')[0], params.icon]}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							try {
								__fest_if = _text_
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.icon ? ' b-toolbar__link__text_pad' : '')
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<span class=\"b-toolbar__link__text" + __fest_attrs[0] + "\">");
								try {
									__fest_buf.push(__fest_escapeHTML(_text_))
								} catch (e) {
									__fest_log_error(e.message + "55");
								}
								__fest_buf.push("</span>");
							}
							__fest_buf.push("</a>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-toolbar__message"] = function (params) {
							var __fest_buf = [];
							try {
								var _text_ = (params.text == null && typeof lang == 'object') ? lang.btn[params.mnemo] : params.text;
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-toolbar__message_' + params.mods.join(' b-toolbar__message_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div data-bem=\"b-toolbar__message\" class=\"b-toolbar__message" + __fest_attrs[0] + "\"");
							try {
								__fest_if = params.role
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" role=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.role + ""))
								} catch (e) {
									__fest_log_error(e.message + "11");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.mods && Array.indexOf(params.mods, 'disabled') != -1
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" aria-disabled=\"disabled\"");
							}
							try {
								__fest_if = params.mnemo
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-mnemo=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.mnemo))
								} catch (e) {
									__fest_log_error(e.message + "20");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.title
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" title=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.title))
								} catch (e) {
									__fest_log_error(e.message + "26");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.id != null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.id))
								} catch (e) {
									__fest_log_error(e.message + "32");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.hide
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" style=\"display:none;\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = params.icon
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "ico";
								__fest_params = {};
								try {
									__fest_params = {mods: [params.icon.split('_')[0], params.icon]}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							try {
								__fest_if = _text_
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.icon ? ' b-toolbar__message__text_pad' : '')
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<span class=\"b-toolbar__message__text" + __fest_attrs[0] + "\">");
								try {
									__fest_buf.push(__fest_escapeHTML(_text_))
								} catch (e) {
									__fest_log_error(e.message + "51");
								}
								__fest_buf.push("</span>");
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks.cbx = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div data-bem=\"cbx\"");
							try {
								var _mods = params.mods ? ' cbx_' + params.mods.join(' cbx_') : '';
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_if = params.id != null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.id))
								} catch (e) {
									__fest_log_error(e.message + "10");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.name
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-name=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.name))
								} catch (e) {
									__fest_log_error(e.message + "16");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.shortcut
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-shortcut=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.shortcut))
								} catch (e) {
									__fest_log_error(e.message + "22");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(" class=\"js-cbx cbx");
							try {
								__fest_if = params.classes
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML(params.classes))
								} catch (e) {
									__fest_log_error(e.message + "31");
								}
							}
							try {
								__fest_if = params.checked || params.__selected__
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" cbx_checked");
							}
							try {
								__fest_if = _mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_buf.push(__fest_escapeHTML(_mods))
								} catch (e) {
									__fest_log_error(e.message + "40");
								}
							}
							try {
								__fest_if = params.shortcut
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" js-shortcut");
							}
							__fest_buf.push("\"");
							try {
								__fest_if = ~_mods.indexOf('_disabled')
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" aria-disabled=\"disabled\"");
							}
							__fest_buf.push("><div class=\"cbx__checkmark\"></div>");
							try {
								__fest_if = params.label
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<span class=\"cbx__label\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.label))
								} catch (e) {
									__fest_log_error(e.message + "57");
								}
								__fest_buf.push("</span>");
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks.btn = function (params) {
							var __fest_buf = [];
							try {
								__fest_if = params.items
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div>");
								var idx, btn, __fest_to0, __fest_iterator0;
								try {
									__fest_iterator0 = params.items || [];
									__fest_to0 = __fest_iterator0.length;
								} catch (e) {
									__fest_iterator0 = [];
									__fest_to0 = 0;
									__fest_log_error(e.message);
								}
								for (idx = 0; idx < __fest_to0; idx++) {
									btn = __fest_iterator0[idx];
									try {
										__fest_if = btn
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											btn.mods = btn.mods || [];
											btn.mods.push('grouped');

											if (!idx) {
												btn.mods.push('grouped_first');
											}
											else if (params.items.length - idx == 1) {
												btn.mods.push('grouped_last');
											}
										} catch (e) {
											__fest_log_error(e.message);
										}
										try {
											__fest_select = btn.block || 'btn'
										} catch (e) {
											__fest_select = "";
											__fest_log_error(e.message)
										}
										__fest_params = {};
										try {
											__fest_params = btn
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
								}
								__fest_buf.push("</div>");
							} else {
								try {
									var _text_ = (params.text == null && typeof lang == 'object') ? lang.btn[params.name] : params.text;
									var _container = params.href ? 'a' : 'button';
								} catch (e) {
									__fest_log_error(e.message);
								}
								try {
									__fest_element = _container;
									if (typeof __fest_element !== "string") {
										__fest_log_error("Element name must be a string");
										__fest_element = "div"
									}
								} catch (e) {
									__fest_element = "div";
									__fest_log_error(e.message);
								}
								__fest_element_stack.push(__fest_element);
								__fest_buf.push("<" + __fest_element);
								__fest_buf.push(" data-bem=\"btn\"");
								try {
									__fest_if = params.tabindex
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" tabindex=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.tabindex))
									} catch (e) {
										__fest_log_error(e.message + "40");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.id != null
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-id=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.id))
									} catch (e) {
										__fest_log_error(e.message + "46");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push(" class=\"btn");
								try {
									__fest_buf.push(__fest_escapeHTML(params.mods ? ' btn_' + params.mods.join(' btn_') + ' ' : ' '))
								} catch (e) {
									__fest_log_error(e.message + "52");
								}
								try {
									__fest_buf.push(__fest_escapeHTML(params.classes))
								} catch (e) {
									__fest_log_error(e.message + "53");
								}
								try {
									__fest_if = params.shortcut
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" js-shortcut");
								}
								__fest_buf.push("\"");
								try {
									__fest_if = params.type
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" type=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.type))
									} catch (e) {
										__fest_log_error(e.message + "62");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.href
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" href=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.href))
									} catch (e) {
										__fest_log_error(e.message + "68");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.rel
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" rel=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.rel))
									} catch (e) {
										__fest_log_error(e.message + "74");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.name
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-name=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.name))
									} catch (e) {
										__fest_log_error(e.message + "80");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.title
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" title=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.title))
									} catch (e) {
										__fest_log_error(e.message + "86");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.shortcut
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-shortcut=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.shortcut))
									} catch (e) {
										__fest_log_error(e.message + "92");
									}
									__fest_buf.push("\"");
								}
								try {
									__fest_if = params.mods && Array.indexOf(params.mods, 'disabled') != -1
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" aria-disabled=\"disabled\"");
								}
								try {
									__fest_if = params.additionalAttrs
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									var attrName, attrValue, __fest_iterator1;
									try {
										__fest_iterator1 = params.additionalAttrs || {};
									} catch (e) {
										__fest_iterator = {};
										__fest_log_error(e.message);
									}
									for (attrName in __fest_iterator1) {
										attrValue = __fest_iterator1[attrName];
										try {
											__fest_select = (attrName)
										} catch (e) {
											__fest_select = "";
											__fest_log_error(e.message)
										}
										if (__fest_select !== "") {
											__fest_buf.push(" " + __fest_select + "=\"");
											try {
												__fest_buf.push(__fest_escapeHTML(attrValue))
											} catch (e) {
												__fest_log_error(e.message + "102");
											}
											__fest_buf.push("\"");
										}
									}
								}
								__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
								__fest_buf.push(__fest_element in __fest_short_tags ? "/>" : ">");
								try {
									__fest_if = params.icon
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "ico";
									__fest_params = {};
									try {
										__fest_params = {
											mods: [
												params.icon.split('_')[0],
												params.icon
											]
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
								try {
									__fest_if = params.ctrl
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_select = params.ctrl.block
									} catch (e) {
										__fest_select = "";
										__fest_log_error(e.message)
									}
									__fest_params = {};
									try {
										__fest_params = params.ctrl
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								} else {
									try {
										__fest_if = _text_
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											__fest_attrs[0] = __fest_escapeHTML(params.icon ? ' btn__text_pad' : '')
										} catch (e) {
											__fest_attrs[0] = "";
											__fest_log_error(e.message);
										}
										__fest_buf.push("<span class=\"btn__text" + __fest_attrs[0] + "\">");
										try {
											__fest_buf.push(__fest_escapeHTML(_text_))
										} catch (e) {
											__fest_log_error(e.message + "123");
										}
										__fest_buf.push("</span>");
									} else {
									}
								}
								try {
									__fest_if = params.arrow
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "ico";
									__fest_params = {};
									try {
										__fest_params = {
											mods: [
												"control_arrow_down"
											]
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
								__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
								if (!(__fest_element in __fest_short_tags)) {
									__fest_buf.push("</" + __fest_element + ">")
								}
								__fest_element_stack.pop();
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-slot"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.id)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(params.mods ? ' b-slot_' + params.mods.join(' b-slot_') : '')
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div id=\"" + __fest_attrs[0] + "\" class=\"b-slot" + __fest_attrs[1] + "\"");
							try {
								__fest_if = params.style
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" style=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.style))
								} catch (e) {
									__fest_log_error(e.message + "8");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = params.html
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_buf.push(params.html)
								} catch (e) {
									__fest_log_error(e.message + "13");
								}
							}
							try {
								__fest_if = params.close
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "b-slot__close";
								__fest_params = {};
								try {
									__fest_params = params
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						var json = __fest_context;
						__fest_blocks["b-flag"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.id)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div data-bem=\"b-flag\" data-id=\"" + __fest_attrs[0] + "\" data-act=\"flag\" class=\"js-hover b-flag");
							try {
								__fest_if = params.flagged
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-flag_yes");
							}
							try {
								__fest_if = params.shortcut
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" js-shortcut");
							}
							__fest_buf.push("\"");
							try {
								__fest_if = params.shortcut
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-shortcut=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.shortcut))
								} catch (e) {
									__fest_log_error(e.message + "19");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push("><b></b></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-nav"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-nav_' + params.mods.join(' b-nav_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-nav" + __fest_attrs[0] + "\" data-bem=\"b-nav\"");
							try {
								__fest_if = params.mnemo
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-mnemo=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.mnemo))
								} catch (e) {
									__fest_log_error(e.message + "8");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							var i, item, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.items || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								item = __fest_iterator0[i];
								try {
									__fest_if = item
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										if (item && (item instanceof Object)) {
											item.hoverId = params.hoverId;
											item.activeId = params.activeId;
										}
									} catch (e) {
										__fest_log_error(e.message);
									}
									try {
										__fest_if = item == 'hr'
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-nav__item b-nav__item_hr\"></div>");
									} else {
										try {
											__fest_if = item.group
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-nav__group";
											__fest_params = {};
											try {
												__fest_params = item
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										} else {
											try {
												__fest_if = item.type == 'option'
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_select = "b-nav__item_option";
												__fest_params = {};
												try {
													__fest_params = item
												} catch (e) {
													__fest_log_error(e.message)
												}
												__fest_fn = __fest_blocks[__fest_select];
												if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
											} else {
												try {
													__fest_if = item.block
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													try {
														__fest_select = item.block
													} catch (e) {
														__fest_select = "";
														__fest_log_error(e.message)
													}
													__fest_params = {};
													try {
														__fest_params = item
													} catch (e) {
														__fest_log_error(e.message)
													}
													__fest_fn = __fest_blocks[__fest_select];
													if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
												} else {
													__fest_select = "b-nav__item";
													__fest_params = {};
													try {
														__fest_params = item
													} catch (e) {
														__fest_log_error(e.message)
													}
													__fest_fn = __fest_blocks[__fest_select];
													if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
												}
											}
										}
									}
								}
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-nav__group__name"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-nav__item");
							try {
								__fest_if = params.group.active
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_active");
							}
							try {
								__fest_if = params.group.type == 'dropdown'
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_group-name");
							}
							try {
								__fest_if = params.group.id
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" js-href");
							}
							__fest_buf.push("\" href=\"");
							try {
								__fest_buf.push(__fest_escapeHTML(params.group.href))
							} catch (e) {
								__fest_log_error(e.message + "25");
							}
							__fest_buf.push("\"");
							try {
								__fest_if = params.group.id
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.group.id))
								} catch (e) {
									__fest_log_error(e.message + "28");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = params.group.href
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<a class=\"b-nav__link b-nav__link_group-name\"");
								try {
									__fest_if = !params.withoutHistory
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" rel=\"history\"");
								}
								__fest_buf.push(" href=\"");
								try {
									__fest_buf.push(params.group.href)
								} catch (e) {
									__fest_log_error(e.message + "47");
								}
								__fest_buf.push("\">");
								try {
									__fest_if = params.group.type == 'dropdown'
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-nav__item__arrow b-nav__item__arrow_open\"></div>");
								}
								__fest_buf.push("<span class=\"b-nav__item__text\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.group.name))
								} catch (e) {
									__fest_log_error(e.message + "55");
								}
								__fest_buf.push("</span></a>");
							} else {
								__fest_buf.push("<div class=\"b-nav__link b-nav__link_group-name\">");
								try {
									__fest_if = params.group.type == 'dropdown'
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-nav__item__arrow b-nav__item__arrow_open\"></div>");
								}
								__fest_buf.push("<span class=\"b-nav__item__text\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.group.name))
								} catch (e) {
									__fest_log_error(e.message + "71");
								}
								__fest_buf.push("</span></div>");
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-nav__group"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-nav__group_' + params.mods.join(' b-nav__group_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div data-bem=\"b-nav__group\" class=\"b-nav__group" + __fest_attrs[0] + "\"><div class=\"b-nav__group__name\">");
							__fest_select = "b-nav__group__name";
							__fest_params = {};
							try {
								__fest_params = params
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							__fest_buf.push("</div><div class=\"b-nav__group__list\">");
							var i, item, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.items || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								item = __fest_iterator0[i];
								try {
									__fest_if = item
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										item.hoverId = params.hoverId;
										item.activeId = params.activeId;
									} catch (e) {
										__fest_log_error(e.message);
									}
									try {
										__fest_if = item == 'hr'
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-nav__item b-nav__item_hr\"></div>");
									} else {
										try {
											__fest_if = item.group
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-nav__group";
											__fest_params = {};
											try {
												__fest_params = item
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										} else {
											__fest_select = "b-nav__item";
											__fest_params = {};
											try {
												__fest_params = item
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
									}
								}
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-nav__item"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-nav__item");
							try {
								__fest_if = params.href
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" js-href");
							}
							try {
								__fest_if = params.type == 'important'
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_important");
							}
							try {
								__fest_if = params.hoverId != null && params.id != null ? params.hoverId == params.id : null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_hover");
							}
							try {
								__fest_if = params.active || (params.activeId != null && params.id != null ? params.activeId == params.id : null)
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_active");
							}
							try {
								__fest_if = params.unread || params.found
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_unread");
							}
							try {
								__fest_if = params.type == 'option' || params.type == 'setting'
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_no-bg");
							}
							try {
								__fest_if = params.uglyshift
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_level-1");
							}
							try {
								__fest_if = params.processing
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__item_processing");
							}
							__fest_buf.push("\"");
							try {
								__fest_if = params.id != null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.id))
								} catch (e) {
									__fest_log_error(e.message + "53");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.name
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-name=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.name))
								} catch (e) {
									__fest_log_error(e.message + "59");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.folding
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-folding=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.folding))
								} catch (e) {
									__fest_log_error(e.message + "65");
								}
								__fest_buf.push("\" data-message-counts=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.messageCounts))
								} catch (e) {
									__fest_log_error(e.message + "69");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.clean
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-clean=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(true))
								} catch (e) {
									__fest_log_error(e.message + "75");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push("><a class=\"b-nav__link");
							try {
								__fest_if = params.type == 'setting'
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__link_setting");
							}
							try {
								__fest_if = params.shortcut
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" js-shortcut");
							}
							__fest_buf.push("\"");
							try {
								__fest_if = params.href
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_if = !params.withoutHistory
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" rel=\"history\"");
								}
								__fest_buf.push(" href=\"");
								try {
									__fest_buf.push(params.href)
								} catch (e) {
									__fest_log_error(e.message + "103");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.title
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" title=\"");
								try {
									__fest_buf.push(params.title)
								} catch (e) {
									__fest_log_error(e.message + "108");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.shortcut
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-shortcut=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.shortcut))
								} catch (e) {
									__fest_log_error(e.message + "113");
								}
								__fest_buf.push("\" data-shortcut-title=\"none\"");
							}
							try {
								__fest_if = params.mnemo
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-mnemo=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.mnemo))
								} catch (e) {
									__fest_log_error(e.message + "121");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = params.folding
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-nav__item__folding js-folding\" data-name=\"toggle-folding\"");
								try {
									__fest_if = params.foldingTitle
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" title=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.foldingTitle))
									} catch (e) {
										__fest_log_error(e.message + "132");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push(">");
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.folding == 'open' ? ' b-nav__item__folding__arrow_open' : '')
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<div class=\"b-nav__item__folding__arrow" + __fest_attrs[0] + "\"></div></div>");
							}
							__fest_select = "ico";
							__fest_params = {};
							try {
								__fest_params = {
									mods: ['loader_blocks'],
									classes: ['b-nav__item__spinner']
								}
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							try {
								__fest_if = params.unread && params.id != 950 && !params.found
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<span class=\"b-nav__item__count\">");
								try {
									__fest_buf.push(params.unread)
								} catch (e) {
									__fest_log_error(e.message + "149");
								}
								__fest_buf.push("</span>");
							}
							try {
								__fest_if = params.found
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<span class=\"b-nav__item__count\">");
								try {
									__fest_buf.push(params.found)
								} catch (e) {
									__fest_log_error(e.message + "153");
								}
								__fest_buf.push("</span>");
							}
							try {
								__fest_if = params._total && params.clean
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.id)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<span data-id=\"" + __fest_attrs[0] + "\" data-name=\"clear-folder\" class=\"b-nav__link__option\"><span class=\"b-nav__link__text js-clear-text\">");
								try {
									__fest_buf.push(__fest_escapeHTML(lang['b-nav_folders']['clear_link']))
								} catch (e) {
									__fest_log_error(e.message + "159");
								}
								__fest_buf.push("</span><i class=\"icon icon_loader js-clear-icon\" style=\"display: none\"></i></span>");
							}
							try {
								__fest_if = params.type == 'option'
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<span class=\"b-nav__link__text\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.text))
								} catch (e) {
									__fest_log_error(e.message + "168");
								}
								__fest_buf.push("</span>");
							} else {
								try {
									__fest_if = params.type == 'setting'
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_if = params.icon
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											var _iconClasses = '', _icon = params.icon.split('_'), i = 0, n = _icon.length;
											for (; i < n; i++) {
												_iconClasses += (i ? ' ' + _iconClasses + '_' : '') + _icon[i];
											}
										} catch (e) {
											__fest_log_error(e.message);
										}
										__fest_buf.push("<div class=\"b-nav__ico\"><i class=\"");
										try {
											__fest_buf.push(__fest_escapeHTML(_iconClasses))
										} catch (e) {
											__fest_log_error(e.message + "184");
										}
										__fest_buf.push("\"></i></div>");
									}
									try {
										__fest_if = params.text
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span class=\"b-nav__link__text\">");
										try {
											__fest_buf.push(__fest_escapeHTML(params.text))
										} catch (e) {
											__fest_log_error(e.message + "191");
										}
										__fest_buf.push("</span>");
									}
								} else {
									try {
										__fest_if = params.type == 'checkbox'
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div data-click=\"bem.cbx.label.click\"><div class=\"b-nav__ico\">");
										__fest_select = "cbx";
										__fest_params = {};
										try {
											__fest_params = {mods: params.checked ? ['checked'] : null}
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										__fest_buf.push("</div><span>");
										try {
											__fest_buf.push(__fest_escapeHTML(params.text))
										} catch (e) {
											__fest_log_error(e.message + "199");
										}
										__fest_buf.push("</span></div>");
									} else {
										try {
											__fest_if = params.icon
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												var _iconClasses = '', _icon = params.icon.split('_'), i = 0, n = _icon.length;
												for (; i < n; i++) {
													_iconClasses += (i ? ' ' + _iconClasses + '_' : '') + _icon[i];
												}
											} catch (e) {
												__fest_log_error(e.message);
											}
											__fest_buf.push("<div class=\"b-nav__ico\"><i class=\"");
											try {
												__fest_buf.push(__fest_escapeHTML(_iconClasses))
											} catch (e) {
												__fest_log_error(e.message + "217");
											}
											__fest_buf.push("\"></i></div>");
										}
										__fest_buf.push("<span class=\"b-nav__item__text");
										try {
											__fest_if = params.parent == 950 || params.parent == 500002
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push(" b-nav__item__text_unread-clear");
										} else {
											try {
												__fest_if = params.unread || params.found
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push(" b-nav__item__text_unread");
											} else {
											}
										}
										__fest_buf.push("\">");
										try {
											__fest_buf.push(__fest_escapeHTML(params.text))
										} catch (e) {
											__fest_log_error(e.message + "240");
										}
										__fest_buf.push("</span>");
									}
								}
							}
							__fest_buf.push("</a></div>");
							try {
								__fest_if = params.items && params.items instanceof Array
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.folding ? 'b-nav__subitems_' + params.folding : '')
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<div class=\"b-nav__subitems " + __fest_attrs[0] + "\"");
								try {
									__fest_if = params.id !== void 0
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-parent=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.id))
									} catch (e) {
										__fest_log_error(e.message + "254");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push(" data-pad=\"");
								try {
									__fest_buf.push(__fest_escapeHTML((params.pad || 0) + 1))
								} catch (e) {
									__fest_log_error(e.message + "259");
								}
								__fest_buf.push("\">");
								var i, item, __fest_to0, __fest_iterator0;
								try {
									__fest_iterator0 = params.items || [];
									__fest_to0 = __fest_iterator0.length;
								} catch (e) {
									__fest_iterator0 = [];
									__fest_to0 = 0;
									__fest_log_error(e.message);
								}
								for (i = 0; i < __fest_to0; i++) {
									item = __fest_iterator0[i];
									try {
										item.hoverId = params.hoverId;
										item.activeId = params.activeId;
									} catch (e) {
										__fest_log_error(e.message);
									}
									try {
										__fest_if = item.group
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-nav__group";
										__fest_params = {};
										try {
											__fest_params = item
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									} else {
										__fest_select = "b-nav__item";
										__fest_params = {};
										try {
											__fest_params = item
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
								}
								__fest_buf.push("</div>");
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-nav__item_button"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.href)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<a href=\"" + __fest_attrs[0] + "\" data-bem=\"btn\" class=\"btn\"><span class=\"btn__text\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.text))
							} catch (e) {
								__fest_log_error(e.message + "6");
							}
							__fest_buf.push("</span></a>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-nav__item_option"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-nav__item\"><a");
							try {
								__fest_if = params.href
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_if = !params.withoutHistory
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" rel=\"history\"");
								}
								__fest_buf.push(" href=\"");
								try {
									__fest_buf.push(params.href)
								} catch (e) {
									__fest_log_error(e.message + "20");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.id != null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.id))
								} catch (e) {
									__fest_log_error(e.message + "26");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.name
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-name=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.name))
								} catch (e) {
									__fest_log_error(e.message + "32");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.title
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" title=\"");
								try {
									__fest_buf.push(params.title)
								} catch (e) {
									__fest_log_error(e.message + "38");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(" class=\"b-nav__link");
							try {
								__fest_if = params.type == 'option'
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-nav__link_option");
							}
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML('b-nav__link_' + params.mods.join('b-nav__link_')))
								} catch (e) {
									__fest_log_error(e.message + "51");
								}
							}
							__fest_buf.push("\"><span class=\"b-nav__link__text\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.text))
							} catch (e) {
								__fest_log_error(e.message + "58");
							}
							__fest_buf.push("</span></a></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-thumb"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div data-mnemo=\"b-thumb\"");
							try {
								__fest_if = params.id != null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-id=\"");
								try {
									__fest_buf.push(params.id)
								} catch (e) {
									__fest_log_error(e.message + "8");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(" class=\"b-thumb");
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML('b-thumb_' + params.mods.join(' b-thumb_')))
								} catch (e) {
									__fest_log_error(e.message + "17");
								}
							}
							try {
								__fest_if = params.__selected__
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-thumb_selected");
							}
							__fest_buf.push("\"><div class=\"b-thumb__pic\">");
							try {
								__fest_if = params.src
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-thumb__pic__image-wrapper\">");
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.src)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<img src=\"" + __fest_attrs[0] + "\" class=\"b-thumb__pic__image\" onerror=\"this.parentNode.style.display=\'none\'\"/></div>");
							}
							try {
								__fest_if = params.icon
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-thumb__icon-wrapper\"><div class=\"b-thumb__icon\">");
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.icon)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<i class=\"ico ico_filetype-big ico_filetype-big_" + __fest_attrs[0] + "\"></i></div></div>");
							} else {
								try {
									__fest_if = patron.toolkit['b-thumb'].getIcon
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										var icon = patron.toolkit['b-thumb'].getIcon(params);
									} catch (e) {
										__fest_log_error(e.message);
									}
									try {
										__fest_if = icon
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-thumb__icon-wrapper\">");
										try {
											__fest_attrs[0] = __fest_escapeHTML(icon)
										} catch (e) {
											__fest_attrs[0] = "";
											__fest_log_error(e.message);
										}
										__fest_buf.push("<div class=\"b-thumb__icon b-thumb__icon_" + __fest_attrs[0] + "\"></div></div>");
									}
								} else {
								}
							}
							__fest_buf.push("<div class=\"b-thumb__overlay js-preview-link\" data-name=\"link\" data-mnemo=\"preview\"><div class=\"b-thumb__info\">");
							try {
								__fest_if = params.ctrl
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-thumb__info__ctrl\" data-name=\"ctrl\">");
								__fest_select = "cbx";
								__fest_params = {};
								try {
									__fest_params = {
										id: params.id, classes: 'js-item-cbx', checked: params.__selected__
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.downloadurl)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a href=\"" + __fest_attrs[0] + "\" class=\"js-href b-thumb__info__ctrl__icon\" data-name=\"download\"><i class=\"ico ico_datalist_download\"></i></a>");
								try {
									__fest_if = params.__cols__.toCloud
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_attrs[0] = __fest_escapeHTML(params.filename)
									} catch (e) {
										__fest_attrs[0] = "";
										__fest_log_error(e.message);
									}
									try {
										__fest_attrs[1] = __fest_escapeHTML(params.id)
									} catch (e) {
										__fest_attrs[1] = "";
										__fest_log_error(e.message);
									}
									__fest_buf.push("<span class=\"b-thumb__info__ctrl__icon b-thumb__info__ctrl__icon_left\" data-name=\"toCloud\" data-filename=\"" + __fest_attrs[0] + "\" data-id=\"" + __fest_attrs[1] + "\"><i class=\"ico ico_toolbar_cloud\"></i></span>");
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("</div></div></div><div class=\"b-thumb__name\">");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.href || patron.toolkit['b-datalist'].getItemHref(params))
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<a rel=\"history\" class=\"js-href b-thumb__name__link\" href=\"" + __fest_attrs[0] + "\" data-name=\"link\"><span class=\"b-thumb__name__text\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.name))
							} catch (e) {
								__fest_log_error(e.message + "94");
							}
							__fest_buf.push("</span></a></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-thumb-2"] = function (params) {
							var __fest_buf = [];
							try {
								var isImageThumb = params.icon == 'jpeg' || params.icon == 'jpg' || params.icon == 'png' || params.icon == 'gif' || params.icon == 'psd' || params.icon == 'ai' || params.icon == 'tiff';
							} catch (e) {
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div");
							try {
								__fest_if = params.id != null
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-id=\"");
								try {
									__fest_buf.push(params.id)
								} catch (e) {
									__fest_log_error(e.message + "12");
								}
								__fest_buf.push("\"");
							}
							try {
								__fest_if = params.tnefId
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-tnef-id=\"");
								try {
									__fest_buf.push(params.tnefId)
								} catch (e) {
									__fest_log_error(e.message + "18");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(" class=\"b-thumb-2");
							try {
								__fest_if = params.isVirus
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-thumb-2_virus");
							}
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML('b-thumb-2_' + params.mods.join(' b-thumb-2_')))
								} catch (e) {
									__fest_log_error(e.message + "32");
								}
							}
							try {
								__fest_if = params.__selected__
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-thumb-2_selected");
							}
							try {
								__fest_if = isImageThumb
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-thumb-2_image");
							}
							try {
								__fest_if = params.classes
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML(params.classes))
								} catch (e) {
									__fest_log_error(e.message + "47");
								}
							}
							__fest_buf.push("\"><div class=\"b-thumb-2__inner\" data-name=\"link\" data-mnemo=\"b-thumb-2\"><span class=\"b-thumb-2__name\" data-name=\"ctrl\">");
							try {
								__fest_if = params.ctrl
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "cbx";
								__fest_params = {};
								try {
									__fest_params = {
										id: params.id,
										classes: 'js-item-cbx',
										mods: ['in-thumb'],
										checked: params.__selected__
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_buf.push("<span class=\"b-thumb-2__spacer-ext\">.");
							try {
								__fest_buf.push(__fest_escapeHTML(params.icon))
							} catch (e) {
								__fest_log_error(e.message + "65");
							}
							__fest_buf.push("</span>");
							try {
								__fest_if = params.name
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_if = params.src && !isImageThumb
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "file-icon_thumb";
									__fest_params = {};
									try {
										__fest_params = {
											file: params,
											mod: ['thumb', 'datalist']
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
								__fest_buf.push("<div class=\"b-thumb-2__name-container\"><span class=\"b-thumb-2__name-text\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.name.replace(/\.\w+$/, '')))
								} catch (e) {
									__fest_log_error(e.message + "77");
								}
								__fest_buf.push("</span><span class=\"b-thumb-2__name-ext\">.");
								try {
									__fest_buf.push(__fest_escapeHTML(params.icon))
								} catch (e) {
									__fest_log_error(e.message + "78");
								}
								__fest_buf.push("</span></div>");
							}
							__fest_buf.push("</span>");
							try {
								__fest_if = !params.src && !isImageThumb
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "file-icon_thumb";
								__fest_params = {};
								try {
									__fest_params = {
										file: params,
										mod: 'big'
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_buf.push("<div class=\"b-thumb-2__frame-container\" data-name=\"preview\">");
							try {
								__fest_if = params.src
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-thumb-2__frame b-thumb-2__frame_covered\"><div class=\"b-thumb-2__frame__preview\" data-preview=\"");
								try {
									__fest_buf.push(params.src)
								} catch (e) {
									__fest_log_error(e.message + "96");
								}
								__fest_buf.push("\"></div></div>");
							}
							try {
								__fest_if = !params.src
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									$.event.trigger('ui-abstract-action', {chain: ['b-thumb-2', 'showed', 'stub']});
								} catch (e) {
									__fest_log_error(e.message);
								}
							}
							__fest_buf.push("</div><div class=\"b-thumb-2__foot\"");
							try {
								__fest_if = params.ctrl
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-name=\"ctrl\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = params.__cols__.toCloud
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "btn";
								__fest_params = {};
								try {
									__fest_params = {
										id: params.id,
										icon: 'to-cloud',
										name: 'toCloud',
										href: '#',
										mods: ['transparent', 'float_right', 'single', 'to-cloud'],
										classes: 'js-attachToCloud',
										text: '',
										title: lang['btn']['titles']['toCloud'],
										additionalAttrs: {
											'data-filename': params.filename
										}
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_select = "btn";
							__fest_params = {};
							try {
								__fest_params = {
									icon: 'toolbar_download',
									href: params.downloadurl,
									name: 'download',
									mods: ['transparent', 'single'],
									classes: 'js-download',
									text: lang['btn']['download'] + ' ' + params.filesize
								}
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							__fest_buf.push("</div></div></div>");
							return __fest_buf.join("");
						};
						__fest_blocks["file-icon_thumb"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_if = params.file.icon
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "file-icon";
								__fest_params = {};
								try {
									__fest_params = {
										type: params.file.icon,
										mods: params.file.isVirus ? ['virus', params.mod] : [].concat(params.mod)
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							} else {
								try {
									__fest_if = patron.toolkit['b-thumb-2'].getIcon
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										var icon = patron.toolkit['b-thumb-2'].getIcon(params.file);
									} catch (e) {
										__fest_log_error(e.message);
									}
									try {
										__fest_if = icon
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "file-icon";
										__fest_params = {};
										try {
											__fest_params = {type: icon, mods: [params.mod]}
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
								} else {
								}
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						var json = __fest_context;
						__fest_blocks["b-rb__template"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div><div class=\"b-item b-direct-item\" id=\"YaDirectLine\"></div><div class=\"b-item b-double-item\" id=\"DoubleFormatLine\"></div><div class=\"b-item b-rbline-item\" id=\"RBLine\"></div><span class=\"fade\"></span></div>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-rb"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-rb direct direct_top\">");
							try {
								__fest_if = params.render
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "b-rb__template";
								__fest_params = {};
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-layout"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-layout\">");
							var i, col, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.cols || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								col = __fest_iterator0[i];
								try {
									__fest_attrs[0] = __fest_escapeHTML(i + 1)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(params.cols.length)
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<div class=\"b-layout__col b-layout__col_" + __fest_attrs[0] + "_" + __fest_attrs[1] + "\" style=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(col.style))
								} catch (e) {
									__fest_log_error(e.message + "9");
								}
								__fest_buf.push("\">");
								try {
									__fest_if = !col.items || !col.items.length
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("&nbsp;");
								} else {
									var j, item, __fest_to1, __fest_iterator1;
									try {
										__fest_iterator1 = col.items || [];
										__fest_to1 = __fest_iterator1.length;
									} catch (e) {
										__fest_iterator1 = [];
										__fest_to1 = 0;
										__fest_log_error(e.message);
									}
									for (j = 0; j < __fest_to1; j++) {
										item = __fest_iterator1[j];
										try {
											__fest_if = item.blockId
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_attrs[0] = __fest_escapeHTML(item.blockId)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<div id=\"" + __fest_attrs[0] + "\"");
											try {
												__fest_if = item.style
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push(" style=\"");
												try {
													__fest_buf.push(__fest_escapeHTML(item.style))
												} catch (e) {
													__fest_log_error(e.message + "26");
												}
												__fest_buf.push("\"");
											}
											__fest_buf.push("></div>");
										} else {
											try {
												__fest_if = item.block
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												try {
													__fest_select = item.block
												} catch (e) {
													__fest_select = "";
													__fest_log_error(e.message)
												}
												__fest_params = {};
												try {
													__fest_params = item.params || item
												} catch (e) {
													__fest_log_error(e.message)
												}
												__fest_fn = __fest_blocks[__fest_select];
												if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
											} else {
												try {
													__fest_if = typeof item == 'string'
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													try {
														__fest_buf.push(item)
													} catch (e) {
														__fest_log_error(e.message + "38");
													}
												} else {
												}
											}
										}
									}
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("<div class=\"b-layout__clear\"></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-informer"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-informer_' + params.mods.join(' b-informer_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-informer" + __fest_attrs[0] + "\"");
							try {
								__fest_if = params.mnemo
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-mnemo=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.mnemo))
								} catch (e) {
									__fest_log_error(e.message + "8");
								}
								__fest_buf.push("\" data-rb=\"show\"");
							}
							try {
								__fest_if = params.informerId
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-informer-id=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.informerId))
								} catch (e) {
									__fest_log_error(e.message + "15");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = params.buttons
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-informer__btn\">");
								var idx, data, __fest_to0, __fest_iterator0;
								try {
									__fest_iterator0 = params.buttons || [];
									__fest_to0 = __fest_iterator0.length;
								} catch (e) {
									__fest_iterator0 = [];
									__fest_to0 = 0;
									__fest_log_error(e.message);
								}
								for (idx = 0; idx < __fest_to0; idx++) {
									data = __fest_iterator0[idx];
									__fest_select = "btn";
									__fest_params = {};
									try {
										__fest_params = data
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
								__fest_buf.push("</div>");
							}
							try {
								__fest_if = params.name
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-informer__text\">");
								try {
									var _text = lang['b-informer'];
									if (typeof params.name == 'string') {
										_text = _text[params.name]
									} else {
										_text = lang['b-informer'][params.name.shift()].replace(/\{(\d+)\}/g, function (_, idx) {
											return params.name[idx | 0] || '';
										});
									}
								} catch (e) {
									__fest_log_error(e.message);
								}
								try {
									__fest_if = params.loader
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "ico";
									__fest_params = {};
									try {
										__fest_params = {
											mods: ['loader_blocks'],
											classes: ['b-informer__text__loader']
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
								try {
									__fest_buf.push(_text)
								} catch (e) {
									__fest_log_error(e.message + "49");
								}
								try {
									__fest_if = params.link
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" ");
									try {
										__fest_attrs[0] = __fest_escapeHTML(params.link.href)
									} catch (e) {
										__fest_attrs[0] = "";
										__fest_log_error(e.message);
									}
									__fest_buf.push("<a class=\"b-informer__text__link\" target=\"_blank\" href=\"" + __fest_attrs[0] + "\"");
									try {
										__fest_if = params.link.mnemo
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(" data-mnemo=\"");
										try {
											__fest_buf.push(__fest_escapeHTML(params.link.mnemo))
										} catch (e) {
											__fest_log_error(e.message + "57");
										}
										__fest_buf.push("\"");
									}
									__fest_buf.push(">");
									try {
										__fest_buf.push(__fest_escapeHTML(lang['b-informer'][params.link.name]))
									} catch (e) {
										__fest_log_error(e.message + "62");
									}
									__fest_buf.push("</a>");
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-paginator"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-paginator_' + params.mods.join(' b-paginator_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-paginator b-paginator_adaptive" + __fest_attrs[0] + "\" data-mnemo=\"");
							try {
								__fest_buf.push(__fest_escapeHTML(params.mnemo || "b-paginator"))
							} catch (e) {
								__fest_log_error(e.message + "7");
							}
							__fest_buf.push("\">");
							try {
								__fest_if = params.simple
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_if = params.hasNext || params.hasPrev
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "b-toolbar__btn";
									__fest_params = {};
									try {
										__fest_params = ({
											name: 'prev',
											mods: (!params.hasPrev ? ['disabled'] : []).concat('first'),
											icon: 'toolbar_arrow ico_toolbar_arrow_left',
											shortcut: params.shortcut ? params.shortcut.prev : false
										})
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									__fest_select = "b-toolbar__btn";
									__fest_params = {};
									try {
										__fest_params = ({
											name: 'next',
											mods: (!params.hasNext ? ['disabled'] : []).concat('last'),
											icon: 'toolbar_arrow ico_toolbar_arrow_right',
											shortcut: params.shortcut ? params.shortcut.next : false
										})
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
							} else {
								try {
									__fest_if = params.total > params.limit
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<span class=\"b-paginator__total\">");
									try {
										__fest_buf.push(__fest_escapeHTML(params['from']))
									} catch (e) {
										__fest_log_error(e.message + "34");
									}
									try {
										__fest_if = params.from !== params.to
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("—");
										try {
											__fest_buf.push(__fest_escapeHTML(params['to']))
										} catch (e) {
											__fest_log_error(e.message + "37");
										}
									}
									__fest_buf.push(" ");
									try {
										__fest_buf.push(__fest_escapeHTML(lang['b-paginator']['of']))
									} catch (e) {
										__fest_log_error(e.message + "40");
									}
									__fest_buf.push(" ");
									try {
										__fest_buf.push(__fest_escapeHTML(params['total']))
									} catch (e) {
										__fest_log_error(e.message + "42");
									}
									__fest_buf.push(" </span><span>");
									__fest_select = "b-toolbar__btn";
									__fest_params = {};
									try {
										__fest_params = {
											name: 'prev',
											mods: (params.from == 1 ? ['disabled'] : []).concat('first'),
											icon: 'toolbar_arrow ico_toolbar_arrow_left',
											shortcut: params.shortcut ? params.shortcut.prev : false
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									try {
										var
											_page = params.page, _pages = params.pages, _amount = params.amount, _half = params.half, _startPage = params.startPage, _endPage = params.endPage
											;

										var link = function (link, page) {
											return link.replace('%s', page);
										}
									} catch (e) {
										__fest_log_error(e.message);
									}
									__fest_buf.push("<div class=\"b-paginator__wrapper\">");
									var _page, __fest_to0, __fest_from0, __fest_iterator0;
									try {
										__fest_from0 = _startPage + 1;
										__fest_to0 = _endPage;
									} catch (e) {
										__fest_from0 = 0;
										__fest_to0 = 0;
										__fest_log_error(e.message);
									}
									for (_page = __fest_from0; _page <= __fest_to0; _page++) {
										try {
											__fest_if = _page == params.page
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<span class=\"b-paginator__page b-paginator__page_active\">");
											try {
												__fest_buf.push(__fest_escapeHTML(_page))
											} catch (e) {
												__fest_log_error(e.message + "76");
											}
											__fest_buf.push("</span>");
										} else {
											try {
												__fest_attrs[0] = __fest_escapeHTML(params.link ? link(params.link, _page) : '?page=' + _page)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<a rel=\"history\" href=\"" + __fest_attrs[0] + "\" class=\"b-paginator__page\">");
											try {
												__fest_buf.push(__fest_escapeHTML(_page))
											} catch (e) {
												__fest_log_error(e.message + "82");
											}
											__fest_buf.push("</a>");
										}
										__fest_buf.push(" ");
									}
									__fest_buf.push("</div>");
									__fest_select = "b-toolbar__btn";
									__fest_params = {};
									try {
										__fest_params = {
											name: 'next',
											mods: (params['to'] >= params['total'] ? ['disabled'] : []).concat('last'),
											icon: 'toolbar_arrow ico_toolbar_arrow_right',
											shortcut: params.shortcut ? params.shortcut.next : false
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									__fest_buf.push("</span>");
								}
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-prefoot"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-prefoot\"><div class=\"b-kav-protected\" data-name=\"kav-protected\"><i class=\"icon icon_kav-protected\"></i>");
							try {
								__fest_buf.push(lang['b-prefoot']['html'])
							} catch (e) {
								__fest_log_error(e.message + "7");
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						var json = __fest_context;
						__fest_blocks["b-radiogroup"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_if = Array.isArray(params.items) && params.items.length
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									var currentActive, currentActiveModeIndex, mods
										;

									Array.forEach(params.items, function (item) {
										if (item && typeof item == "object") {
											item.role = "menuitemradio";

											if (item.mods && (currentActiveModeIndex = Array.indexOf(item.mods, "active")) != -1) {
												if (currentActive) {
													currentActive.mods.splice(currentActiveModeIndex, 1);
												}
												currentActive = item;
											}
										}
									});
									if (!currentActive) {
										currentActive = params.items[0];
										mods = currentActive.mods || [];
										mods.push("active");
										currentActive.mods = mods;
									}
								} catch (e) {
									__fest_log_error(e.message);
								}
								__fest_select = "b-toolbar__btn";
								__fest_params = {};
								try {
									__fest_params = {
										group: params.group,
										role: 'menubar',
										mods: (Array.isArray(params.mods) ? params.mods : []).concat('radio-group', 'menubar'),
										items: params.items
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						var json = __fest_context;
						__fest_blocks["b-viewchange"] = function (params) {
							var __fest_buf = [];
							try {
								var rParams = {
									group: params.group || 'viewchange', items: [
										{
											icon: 'viewchange_list', name: 'list', mods: []
										}, {
											icon: 'viewchange_thumbs', name: 'thumbs', mods: []
										}
									]
								};

								var activePos;

								switch (params.active) {
									case 'list':
										activePos = 0;
										break;

									case 'thumbs':
										activePos = 1;
										break;
								}

								rParams.items[activePos || 0].mods.push('active');
							} catch (e) {
								__fest_log_error(e.message);
							}
							__fest_select = "b-radiogroup";
							__fest_params = {};
							try {
								__fest_params = rParams
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-datalist"] = function (params) {
							var __fest_buf = [];
							try {
								var _self = toolkit['b-datalist'];

								var _defCols = {
									'def': {
										cbx: 1,
										status: 1,
										pic: 1,
										flag: 1,
										from: 1,
										subj: 1,
										date: 1,
										attach: 1,
										snippet: patron.newsnippets
									},
									'letters_to': {from: 0, 'to': 1},
									'letters_compact_to': {pic: 0, from: 0, 'to': 1},
									'letters_compact_from': {pic: 0},
									'search_from': {folder: 1, search: 1, attachments: GET.q_query ? 1 : 0},
									'search_compact_from': {
										pic: 0,
										folder: 1,
										search: 1,
										attachments: GET.q_query ? 1 : 0
									},
									'fileSearch_from': {
										pic: 'icon',
										status: 0,
										flag: 0,
										filename: 1,
										download: 1,
										from: 0,
										to: 0,
										toCloud: (patron.EnableAttachToCloud) ? 1 : 0
									},
									'fileSearch_all_from': {
										pic: 'icon',
										status: 0,
										flag: 0,
										filename: 1,
										download: 1,
										folder: 1,
										from: 0,
										to: 0,
										toCloud: (patron.EnableAttachToCloud) ? 1 : 0
									},
									'fileSearch_thumb_from': {thumb: 1, toCloud: (patron.EnableAttachToCloud) ? 1 : 0},
									files: {
										cbx: 1,
										pic: 1,
										status: 0,
										flag: 0,
										from: 0,
										subj: 0,
										filename: 1,
										size: 1,
										date: 1,
										snippet: 0,
										to: 0
									},
									files_thumbs: {thumb: 1}
								};

								var _cols = _defCols.def;
								var _mod = (params.mods ? params.mods.join(' ') : '').match(new RegExp('\\b(' + Object.keys(_defCols).join('|') + ')\\b', 'i'));


								if (_mod) {
									$.extend(_cols, _defCols[_mod[1]]);
								}
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_if = params.oneItem
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									var _item = params.oneItem;
									_item.__cols__ = _cols;
									_item.__first__ = (params.head == null) && (_item === params.items[0]);
									_item.__last__ = (params.foot == null) && (_item === params.items[params.items.length - 1]);
									_item.__selected__ = params.selected[_item.id];
									_item.__idx__ = 0;
								} catch (e) {
									__fest_log_error(e.message);
								}
								__fest_select = "b-datalist__item";
								__fest_params = {};
								try {
									__fest_params = _item
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								try {
									delete _item.__cols__;
									delete _item.__selected__;
								} catch (e) {
									__fest_log_error(e.message);
								}
							} else {
								try {
									__fest_if = params.dragItems
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "b-datalist__drag";
									__fest_params = {};
									try {
										__fest_params = {
											cols: _cols,
											items: params.dragItems,
											selected: params.selected,
											selectedCount: params.selectedCount
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								} else {
									try {
										__fest_if = params.items
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div");
										try {
											__fest_if = params.mnemo
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push(" data-mnemo=\"");
											try {
												__fest_buf.push(__fest_escapeHTML(params.mnemo))
											} catch (e) {
												__fest_log_error(e.message + "68");
											}
											__fest_buf.push("\"");
										}
										__fest_buf.push(" class=\"b-datalist");
										try {
											__fest_if = params.mods
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push(" ");
											try {
												__fest_buf.push(__fest_escapeHTML('b-datalist_' + params.mods.join(' b-datalist_')))
											} catch (e) {
												__fest_log_error(e.message + "77");
											}
										}
										try {
											__fest_if = _self.gpu
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push(" ");
											try {
												__fest_buf.push(__fest_escapeHTML('b-datalist_gpu'))
											} catch (e) {
												__fest_log_error(e.message + "82");
											}
										}
										try {
											__fest_if = _cols.thumb
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push(" b-datalist_thumb");
											try {
												__fest_if = patron.isThumb2Active
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push(" b-datalist_thumb2");
											}
										}
										__fest_buf.push("\">");
										try {
											__fest_if = params.head
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												params.head.__cols__ = _cols;
											} catch (e) {
												__fest_log_error(e.message);
											}
											__fest_select = "b-datalist__head";
											__fest_params = {};
											try {
												__fest_params = params.head
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
											try {
												delete params.head.__cols__;
											} catch (e) {
												__fest_log_error(e.message);
											}
										}
										try {
											__fest_if = params.items.length == 0
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_if = params.spinner.show
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_select = "b-datalist__empty_collector";
												__fest_params = {};
												try {
													__fest_params = params
												} catch (e) {
													__fest_log_error(e.message)
												}
												__fest_fn = __fest_blocks[__fest_select];
												if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
											} else {
												__fest_select = "b-datalist__empty";
												__fest_params = {};
												try {
													__fest_params = params
												} catch (e) {
													__fest_log_error(e.message)
												}
												__fest_fn = __fest_blocks[__fest_select];
												if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
											}
										} else {
											__fest_buf.push("<div class=\"b-datalist__body\">");
											var idx, item, __fest_to0, __fest_iterator0;
											try {
												__fest_iterator0 = params.items || [];
												__fest_to0 = __fest_iterator0.length;
											} catch (e) {
												__fest_iterator0 = [];
												__fest_to0 = 0;
												__fest_log_error(e.message);
											}
											for (idx = 0; idx < __fest_to0; idx++) {
												item = __fest_iterator0[idx];
												try {
													item.__cols__ = _cols;
													item.__first__ = (params.head == null || !params.head.items || !params.head.items.length) && (idx == 0);
													item.__last__ = (params.foot == null || !params.foot.items || !params.foot.items.length) && (params.items.length - idx == 1);
													item.__selected__ = params.selected[item.id];
													item.__idx__ = idx;
													item.__offset__ = params.offset + idx;
												} catch (e) {
													__fest_log_error(e.message);
												}
												try {
													__fest_if = _cols.thumb
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													try {
														__fest_attrs[0] = __fest_escapeHTML(item.id)
													} catch (e) {
														__fest_attrs[0] = "";
														__fest_log_error(e.message);
													}
													__fest_buf.push("<div data-id=\"" + __fest_attrs[0] + "\" class=\"b-datalist__item b-datalist__item_thumb");
													try {
														__fest_if = item.__selected__
													} catch (e) {
														__fest_if = false;
														__fest_log_error(e.message);
													}
													if (__fest_if) {
														__fest_buf.push(" b-datalist__item_selected");
													}
													try {
														__fest_if = patron.isThumb2Active
													} catch (e) {
														__fest_if = false;
														__fest_log_error(e.message);
													}
													if (__fest_if) {
														__fest_buf.push(" b-datalist__item_thumb2");
													}
													__fest_buf.push("\">");
													try {
														__fest_if = patron.isThumb2Active
													} catch (e) {
														__fest_if = false;
														__fest_log_error(e.message);
													}
													if (__fest_if) {
														__fest_select = "b-thumb-2";
														__fest_params = {};
														try {
															__fest_params = item
														} catch (e) {
															__fest_log_error(e.message)
														}
														__fest_fn = __fest_blocks[__fest_select];
														if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
													} else {
														__fest_select = "b-thumb";
														__fest_params = {};
														try {
															__fest_params = item
														} catch (e) {
															__fest_log_error(e.message)
														}
														__fest_fn = __fest_blocks[__fest_select];
														if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
													}
													__fest_buf.push("</div>");
												} else {
													__fest_select = "b-datalist__item";
													__fest_params = {};
													try {
														__fest_params = item
													} catch (e) {
														__fest_log_error(e.message)
													}
													__fest_fn = __fest_blocks[__fest_select];
													if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
												}
												try {
													delete item.__cols__;
													delete item.__first__;
													delete item.__last__;
													delete item.__selected__;
													delete item.__idx__;
													delete item.__offset__;
												} catch (e) {
													__fest_log_error(e.message);
												}
											}
											__fest_buf.push("</div>");
										}
										__fest_buf.push("</div>");
									} else {
									}
								}
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-datalist__drag"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-datalist__drag\">");
							try {
								var _items = params.items.slice(0, 3);
							} catch (e) {
								__fest_log_error(e.message);
							}
							var i, item, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = _items || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								item = __fest_iterator0[i];
								try {
									item.__cols__ = params.cols;
									item.__first__ = item.__last__ = true
								} catch (e) {
									__fest_log_error(e.message);
								}
								__fest_buf.push("<div style=\"right:");
								try {
									__fest_buf.push(__fest_escapeHTML(i * 4))
								} catch (e) {
									__fest_log_error(e.message + "18");
								}
								__fest_buf.push("px;\n\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\tz-index:");
								try {
									__fest_buf.push(__fest_escapeHTML(100 - i))
								} catch (e) {
									__fest_log_error(e.message + "20");
								}
								__fest_buf.push(";\n\t\t\t\t\t\t\ttop:");
								try {
									__fest_buf.push(__fest_escapeHTML(i * 4))
								} catch (e) {
									__fest_log_error(e.message + "21");
								}
								__fest_buf.push("px;\n\t\t\t\t\t\t\tleft:");
								try {
									__fest_buf.push(__fest_escapeHTML(i * 4))
								} catch (e) {
									__fest_log_error(e.message + "22");
								}
								__fest_buf.push("px;\">");
								__fest_select = "b-datalist__item";
								__fest_params = {};
								try {
									__fest_params = item
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
								try {
									delete item.__cols__;
									delete item.__first__;
									delete item.__last__;
								} catch (e) {
									__fest_log_error(e.message);
								}
							}
							__fest_buf.push("<div class=\"b-datalist__drag__cover\"></div>");
							try {
								__fest_if = params.items.length > 3
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__drag__cnt\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.selectedCount))
								} catch (e) {
									__fest_log_error(e.message + "39");
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-datalist__empty"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-datalist__empty\"><div class=\"b-datalist__empty__block\">");
							try {
								__fest_if = params.folderType
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.folderType)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<div class=\"b-datalist__empty__icon b-datalist__empty__icon_" + __fest_attrs[0] + "\"></div><span class=\"b-datalist__empty__text\">");
								try {
									__fest_buf.push(params.emptyHtml)
								} catch (e) {
									__fest_log_error(e.message + "12");
								}
								__fest_buf.push("</span>");
							} else {
								try {
									__fest_buf.push(params.emptyHtml)
								} catch (e) {
									__fest_log_error(e.message + "19");
								}
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-datalist__head"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-datalist__head\" style=\"\">");
							var idx, item, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.items || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (idx = 0; idx < __fest_to0; idx++) {
								item = __fest_iterator0[idx];
								__fest_buf.push("<div");
								try {
									__fest_if = item.id != null
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" id=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(item.id))
									} catch (e) {
										__fest_log_error(e.message + "10");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push(" class=\"b-datalist__head__item");
								try {
									__fest_if = item.mods
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" ");
									try {
										__fest_buf.push(__fest_escapeHTML('b-datalist__head__item_' + item.mods.join(' b-datalist__head__item_')))
									} catch (e) {
										__fest_log_error(e.message + "19");
									}
								}
								try {
									__fest_if = idx == 0
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" b-datalist__head__item_first");
								}
								try {
									__fest_if = params.items - idx == 1
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" b-datalist__head__item_last");
								}
								__fest_buf.push("\">");
								try {
									__fest_if = item.block
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										item.__cols__ = params.__cols__;
									} catch (e) {
										__fest_log_error(e.message);
									}
									try {
										__fest_select = item.block
									} catch (e) {
										__fest_select = "";
										__fest_log_error(e.message)
									}
									__fest_params = {};
									try {
										__fest_params = item.params || item
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									try {
										delete item.__cols__;
									} catch (e) {
										__fest_log_error(e.message);
									}
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-datalist__head__cols"] = function (params) {
							var __fest_buf = [];
							try {
								var _cols = params.__cols__;
							} catch (e) {
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-datalist__head__cols\">");
							try {
								__fest_if = _cols.cbx
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"js-item-cbx b-datalist__head__cols__cbx\">");
								__fest_select = "cbx";
								__fest_params = {};
								try {
									__fest_params = $.extend({}, params, {
										classes: 'js-select-all-cbx'
									})
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
							}
							try {
								__fest_if = _cols.filename
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__head__cols__col b-datalist__head__cols__col_filename\"><span class=\"b-datalist__head__cols__col__value b-datalist__head__cols__col_filename__value\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.cols.filename))
								} catch (e) {
									__fest_log_error(e.message + "21");
								}
								__fest_buf.push("</span></div>");
							}
							try {
								__fest_if = _cols.date
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__head__cols__col b-datalist__head__cols__col_date\"><span class=\"b-datalist__head__cols__col__value b-datalist__head__cols__col_date__value\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.cols.date))
								} catch (e) {
									__fest_log_error(e.message + "27");
								}
								__fest_buf.push("</span></div>");
							}
							try {
								__fest_if = _cols.size
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__head__cols__col b-datalist__head__cols__col_size\"><span class=\"b-datalist__head__cols__col__value b-datalist__head__cols__col_size__value\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.cols.size))
								} catch (e) {
									__fest_log_error(e.message + "33");
								}
								__fest_buf.push("</span></div>");
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						try {
							var getFileDetails = function (file) {
								var _mime = file.ContentType,
									_imageFormats = ['psd', 'tga', 'ai', 'tif', 'tiff', 'eps', 'image', 'bmp', 'gif', 'jpg', 'jpeg', 'png', 'tif', 'psd', 'psp', 'svg'],
									ext = String(file.name).replace(/^(.*)\./, '').toLowerCase(),
									icon = 'Other',
									type = 'Other';

								if (file.IsMp3 || ext == 'mp3') {
									icon = 'Mp3';
								} else if (ext == 'tar' || ext == '7z' || ext == 'gz' || ext == 'zip' || ext == 'rar' || _mime == 'application/zip' || _mime == 'application/x-rar-compressed') {
									icon = 'Arhiv';
								} else if (/image/.test(_mime) || _imageFormats.indexOf(ext) !== -1) {
									icon = 'Picture';
								} else if (ext == 'doc' || ext == 'docx') {
									icon = 'Word';
									type = 'Office';
								} else if (ext == 'xls' || ext == 'xlsx') {
									icon = 'Exel';
									type = 'Office';
								} else if (ext == 'ppt' || ext == 'pptx') {
									icon = 'PowerPoint';
									type = 'Office';
								} else if (ext == 'txt') {
									icon = 'Txt';
								} else if (ext == 'eml') {
									icon = 'Letter';
								} else if (ext == 'pdf') {
									icon = 'Pdf';
								}

								return {
									ext: ext,
									type: type,
									icon: icon
								}
							};

							var getHighLightValue = function (value, open, close) {
								open = open || '<span class="search_tick">';
								close = close || '</span>';
								var string = '',
									_insertTag = function (string, tag, position) {
										return string.slice(0, position) + tag + string.slice(position);
									}

								if (typeof value === 'string') {
									string = value;
								} else {
									string = value.Value;
									Array.reduceRight(value.Color, function (reduced, rightPair) {
										string = _insertTag(string, close, rightPair[1]);
										string = _insertTag(string, open, rightPair[0]);
									}, value.Value);
								}

								return string;
							}

							var unescapeHighlight = function (escapeVal) {
								var tags = [
									{
										open: {
											regExp: /\&lt;span class=\&quot;search_tick\&quot;\&gt;/g,
											value: '<span class="search_tick">'
										},
										close: {
											regExp: /\&lt;\/span&gt;/g,
											value: '</span>'
										}
									},
									{
										open: {
											regExp: /\&lt;b\&gt;/g,
											value: '<b>'
										},
										close: {
											regExp: /\&lt;\/b\&gt;/g,
											value: '</b>'
										}
									}
								];

								Array.forEach(tags, function (tag) {
									escapeVal = escapeVal.replace(tag.open.regExp, tag.open.value)
										.replace(tag.close.regExp, tag.close.value);
								});

								return escapeVal;
							};
						} catch (e) {
							__fest_log_error(e.message);
						}
						__fest_blocks["b-datalist__item"] = function (params) {
							var __fest_buf = [];
							try {
								var _self = toolkit['b-datalist'],
									_cols = params.__cols__,
									_idx = params.__idx__;
								_self.prepareItem(params);

								var searchAttachesExists = _cols.attachments && _self.hasItemSearchAttaches(params);
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.id)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div data-bem=\"b-datalist__item\" data-id=\"" + __fest_attrs[0] + "\" class=\"b-datalist__item");
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push('b-datalist__item_' + params.mods.join(' b-datalist__item_'))
								} catch (e) {
									__fest_log_error(e.message + "22");
								}
							}
							try {
								__fest_if = params.unread
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-datalist__item_unread");
							}
							try {
								__fest_if = params.reply || params.forward
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-datalist__item_replied");
							}
							try {
								__fest_if = params.__selected__
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-datalist__item_selected");
							}
							try {
								__fest_if = params.__first__
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-datalist__item_first");
							}
							try {
								__fest_if = params.__last__
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-datalist__item_last");
							}
							try {
								__fest_if = searchAttachesExists
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" b-datalist__item_withattach");
							}
							__fest_buf.push("\"><div class=\"b-datalist__item__body\">");
							try {
								__fest_if = 'icon' == _cols.pic
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.previewurl)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a href=\"" + __fest_attrs[0] + "\" target=\"_blank\" class=\"js-href b-datalist__item__filename__link\" data-name=\"preview\">");
								try {
									__fest_if = _cols.filename
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-datalist__item__filename\"><span class=\"b-datalist__item__value b-datalist__item__filename__value js-filename\">");
									try {
										__fest_buf.push(__fest_escapeHTML(params.filename))
									} catch (e) {
										__fest_log_error(e.message + "63");
									}
									__fest_buf.push("</span></div>");
								}
								__fest_buf.push("</a>");
							}
							try {
								__fest_if = _cols.download
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.downloadurl)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a href=\"" + __fest_attrs[0] + "\" class=\"js-clickable js-href b-datalist__item__download__link\" data-name=\"download\">");
								try {
									__fest_if = _cols.download
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-datalist__item__download\"><i class=\"b-datalist__item__download__icon ico ico_datalist_download\"></i>");
									try {
										__fest_buf.push(params.filesize)
									} catch (e) {
										__fest_log_error(e.message + "74");
									}
									__fest_buf.push("</div>");
								}
								__fest_buf.push("</a>");
							}
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.href || _self.getItemHref(params, _idx))
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<a rel=\"history\" href=\"" + __fest_attrs[0] + "\" class=\"js-href b-datalist__item__link\" data-name=\"link\" title=\"");
							try {
								__fest_buf.push(_self.getItemTitle(params, _cols))
							} catch (e) {
								__fest_log_error(e.message + "83");
							}
							__fest_buf.push("\"");
							try {
								__fest_if = params.subject
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-subject=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.subject))
								} catch (e) {
									__fest_log_error(e.message + "87");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push(">");
							try {
								__fest_if = _cols.cbx
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"js-item-cbx b-datalist__item__cbx\">");
								__fest_select = "cbx";
								__fest_params = {};
								try {
									__fest_params = params
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
							}
							try {
								__fest_if = _cols.toCloud
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.filename)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(params.id)
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<span href=\"#\" class=\"js-href b-datalist__item__download__link b-datalist__item__download__link_to-cloud\" data-name=\"toCloud\" data-filename=\"" + __fest_attrs[0] + "\" data-id=\"" + __fest_attrs[1] + "\"></span>");
							}
							try {
								__fest_if = _cols.attach
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_if = params.attachment
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_attrs[0] = __fest_escapeHTML(params.id)
									} catch (e) {
										__fest_attrs[0] = "";
										__fest_log_error(e.message);
									}
									__fest_buf.push("<div class=\"b-datalist__item__attach\" data-id=\"" + __fest_attrs[0] + "\" data-act=\"attach\"><i class=\"ico ico_datalist_attach\"></i></div>");
								}
							}
							try {
								__fest_if = _cols.status
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__item__status\"><span class=\"b-datalist__item__status-reply\">");
								try {
									__fest_if = params.reply && params.forward
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<i class=\"b-datalist__item__status__icon ico ico_datalist_reply-forward\"></i>");
								} else {
									try {
										__fest_if = params.reply
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<i class=\"b-datalist__item__status__icon ico ico_datalist_reply\"></i>");
									} else {
										try {
											__fest_if = params.forward
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<i class=\"b-datalist__item__status__icon ico ico_datalist_forward\"></i>");
										} else {
										}
									}
								}
								__fest_buf.push("</span>");
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.unread ? 'unread' : 'read')
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<span class=\"b-datalist__item__status-" + __fest_attrs[0] + "\">");
								__fest_select = "b-letterstatus";
								__fest_params = {};
								try {
									__fest_params = params
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</span></div>");
							}
							try {
								__fest_if = _cols.flag
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__item__flag\">");
								__fest_select = "b-flag";
								__fest_params = {};
								try {
									__fest_params = params
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
							}
							try {
								__fest_if = _cols.toCloud
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.filename)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(params.id)
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<span href=\"#\" class=\"js-href b-datalist__item__download__link b-datalist__item__download__link_to-cloud\" data-name=\"toCloud\" data-filename=\"" + __fest_attrs[0] + "\" data-id=\"" + __fest_attrs[1] + "\"><div class=\"b-datalist__item__download b-datalist__item__download_to-cloud\"><i class=\"b-datalist__item__download ico ico_toolbar_cloud\"></i></div></span>");
							}
							__fest_buf.push("<div class=\"b-datalist__item__panel\">");
							try {
								__fest_if = _cols.size
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__item__size\"><span class=\"b-datalist__item__value b-datalist__item__size__value\">");
								try {
									__fest_buf.push(_self.getItemSize ? _self.getItemSize(params) : params.size)
								} catch (e) {
									__fest_log_error(e.message + "157");
								}
								__fest_buf.push("</span></div>");
							}
							try {
								__fest_if = _cols.folder
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__item__folder\">");
								try {
									__fest_buf.push(__fest_escapeHTML(_self.getItemFolderName(params)))
								} catch (e) {
									__fest_log_error(e.message + "164");
								}
								__fest_buf.push("</div>");
							}
							try {
								__fest_if = _cols.date
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__item__date\">");
								try {
									__fest_attrs[0] = __fest_escapeHTML(_self.getItemFullDate(params))
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<span class=\"b-datalist__item__value b-datalist__item__date__value\" title=\"" + __fest_attrs[0] + "\">");
								try {
									__fest_buf.push(_self.getItemDate(params))
								} catch (e) {
									__fest_log_error(e.message + "170");
								}
								__fest_buf.push("</span></div>");
							}
							try {
								__fest_if = _cols.pic
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									var pic = _self.getItemPic(params);
									var avatar_style = "background-image: url(\"" + pic + "\");";
								} catch (e) {
									__fest_log_error(e.message);
								}
								try {
									__fest_if = pic && 'icon' != _cols.pic
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_attrs[0] = __fest_escapeHTML(avatar_style)
									} catch (e) {
										__fest_attrs[0] = "";
										__fest_log_error(e.message);
									}
									__fest_buf.push("<div class=\"b-datalist__item__pic\" style=\"" + __fest_attrs[0] + "\"></div>");
								} else {
									try {
										__fest_if = _self.getItemIcon
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-datalist__item__icon\">");
										__fest_select = "file-icon";
										__fest_params = {};
										try {
											__fest_params = {type: _self.getItemIcon(params), mods: ['datalist']}
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										__fest_buf.push("</div>");
									} else {
									}
								}
							}
							try {
								__fest_if = _cols.subj || _cols.snippet || _cols.from || _cols['to']
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__item__info\">");
								try {
									__fest_if = _cols.subj || _cols.snippet
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-datalist__item__subj\">");
									try {
										__fest_if = params.priority == 1
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span class=\"ico ico_datalist_priority\"></span>");
									}
									try {
										__fest_if = params.threadLength > 1
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span class=\"b-datalist__item__badge\">");
										try {
											__fest_buf.push(__fest_escapeHTML(params.threadLength))
										} catch (e) {
											__fest_log_error(e.message + "203");
										}
										__fest_buf.push("</span>");
									}
									try {
										__fest_if = _cols.subj || _cols.snippet
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											__fest_if = _cols.search && params.SearchSubject
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_buf.push(params.SearchSubject)
											} catch (e) {
												__fest_log_error(e.message + "210");
											}
										} else {
											try {
												__fest_buf.push(__fest_escapeHTML(params.subject || ('<' + lang['no-subject'] + '>')))
											} catch (e) {
												__fest_log_error(e.message + "213");
											}
										}
									}
									try {
										__fest_if = _cols.snippet
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span class=\"b-datalist__item__subj__snippet\">");
										try {
											__fest_if = _cols.search && params.SearchSnippet
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_buf.push(params.SearchSnippet)
											} catch (e) {
												__fest_log_error(e.message + "222");
											}
										} else {
											try {
												__fest_buf.push(__fest_escapeHTML(params.snippet))
											} catch (e) {
												__fest_log_error(e.message + "225");
											}
										}
										__fest_buf.push("</span>");
									}
									__fest_buf.push("</div>");
								}
								try {
									__fest_if = _cols.from || _cols['to']
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-datalist__item__addr\">");
									try {
										__fest_if = _cols.search && params.SearchFrom
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											__fest_buf.push(params.SearchFrom)
										} catch (e) {
											__fest_log_error(e.message + "237");
										}
									} else {
										try {
											__fest_buf.push(__fest_escapeHTML(_cols.from
												? params.FromShort
												: _self.getToShort(params.correspondents)))
										} catch (e) {
											__fest_log_error(e.message + "245");
										}
									}
									__fest_buf.push("</div>");
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("</div></a></div>");
							try {
								__fest_if = searchAttachesExists
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-datalist__item__footer\"><ul class=\"b-datalist__item__attachments\">");
								var attach_idx, attach_item, __fest_to0, __fest_iterator0;
								try {
									__fest_iterator0 = params.AttachList || [];
									__fest_to0 = __fest_iterator0.length;
								} catch (e) {
									__fest_iterator0 = [];
									__fest_to0 = 0;
									__fest_log_error(e.message);
								}
								for (attach_idx = 0; attach_idx < __fest_to0; attach_idx++) {
									attach_item = __fest_iterator0[attach_idx];
									try {
										__fest_if = attach_item
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										var fileName = (function () {
											var __fest_buf = [], __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
											try {
												__fest_buf.push(__fest_escapeHTML(getHighLightValue(attach_item.FileName)))
											} catch (e) {
												__fest_log_error(e.message + "262");
											}
											return __fest_buf.join("");
										})();
										var snippet = (function () {
											var __fest_buf = [], __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
											try {
												__fest_buf.push(__fest_escapeHTML(getHighLightValue(attach_item.Snippet)))
											} catch (e) {
												__fest_log_error(e.message + "263");
											}
											return __fest_buf.join("");
										})();
										try {
											var _fileDetails = getFileDetails({
													name: typeof attach_item.FileName === 'string' ? attach_item.FileName : attach_item.FileName.Value
												}),
												_ext = _fileDetails.ext,
												resultsVals = [];

											Array.forEach([fileName, snippet], function (escapeVal) {
												escapeVal = escapeVal || '';
												resultsVals.push(unescapeHighlight(escapeVal));
											});

										} catch (e) {
											__fest_log_error(e.message);
										}
										__fest_buf.push("<li class=\"b-datalist__item__attachment\"><a href=\"#\" class=\"js-attach-link b-datalist__item__attachment__link\" data-part-id=\"");
										try {
											__fest_buf.push(__fest_escapeHTML(attach_item.PartID))
										} catch (e) {
											__fest_log_error(e.message + "284");
										}
										__fest_buf.push("\" data-file-ext=\"");
										try {
											__fest_buf.push(__fest_escapeHTML(_ext))
										} catch (e) {
											__fest_log_error(e.message + "287");
										}
										__fest_buf.push("\"><div class=\"b-datalist__item__icon b-datalist__item__icon_in-attachments\"><i class=\"ico ico_filetype ico_filetype_");
										try {
											__fest_buf.push(__fest_escapeHTML(_ext))
										} catch (e) {
											__fest_log_error(e.message + "295");
										}
										__fest_buf.push("\"></i></div><div class=\"b-datalist__item__size\"><span class=\"b-datalist__item__value b-datalist__item__size__value\">");
										try {
											__fest_buf.push(String.sizeFormat(attach_item.Size))
										} catch (e) {
											__fest_log_error(e.message + "305");
										}
										__fest_buf.push("</span></div><div class=\"b-datalist__item__subj b-datalist__item__subj_in-attachments\">");
										try {
											__fest_buf.push(resultsVals[0])
										} catch (e) {
											__fest_log_error(e.message + "310");
										}
										__fest_buf.push(" <span class=\"b-datalist__item__subj__snippet\">");
										try {
											__fest_buf.push(resultsVals[1])
										} catch (e) {
											__fest_log_error(e.message + "313");
										}
										__fest_buf.push("</span></div></a></li>");
									}
								}
								__fest_buf.push("</ul></div>");
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						var json = __fest_context;
						__fest_blocks["b-datalist__item__attach__dropdown"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.MailAttachPreviewHost)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div cnt_sb=\"366559\" class=\"messagelist__dropdown\" previewUrl=\"\/\/" + __fest_attrs[0] + "\/cgi-bin\/readmsg\/\"><div class=\"b-dropdown  b-dropdown_expanded b-dropdown_right\"><div class=\"b-dropdown__ctrl b-dropdown__ctrl_attach\"><i class=\"ico ico_datalist_attach\"></i></div><div class=\"b-dropdown__list b-dropdown__list_attach");
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push('b-dropdown__list_' + params.mods.join(' b-dropdown__list_'))
								} catch (e) {
									__fest_log_error(e.message + "15");
								}
							}
							__fest_buf.push("\">");
							var idx, item, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.Attachments || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (idx = 0; idx < __fest_to0; idx++) {
								item = __fest_iterator0[idx];
								try {
									// a.href & a.data-href
									var _href = '//' + params.MainMailHost + '/cgi-bin/', _icon = 'Other', _type = 'Other', _canPreview = false;

									if (params.docs.canThumbnail(item.name)) {
										_canPreview = true;
										_type = 'Office';
									} else if (params.apf.canThumbnail(item.name)) {
										_canPreview = true;
									}

									if (item.isRFC822) {
										_href = 'readmsg?id' + item.PartID
									}
									else if (item.isTNEF && !item.IsRtf) {
										_href += 'get_tnef_part?' + ajs.toQuery({
											id: item.PartID, tnef_id: item.tnef_id, mode: 'tnef_attach'
										});
									}
									else {
										_href += 'getattach?' + ajs.toQuery({
											id: item.PartID,
											file: item.name,
											channel: item.Channel,
											mode: 'attachment',
											bs: item.BodyStart,
											bl: item.OriginalBodyLen,
											ct: item.ContentType,
											cn: item.ContentName,
											cte: item.ContentEncoding
										});
									}

									var
										_mime = item.ContentType,
										_ext = String(item.name).replace(/^(.*)\./, '').toLowerCase(),
										_offset = item.PartID.substr(item.PartID.indexOf(';') + 1)
										;

									// File-Icon mod
									if (item.IsMp3) {
										_icon = 'Mp3';
									} else if (_ext == 'tar' || _ext == '7z' || _ext == 'gz' || _ext == 'zip' || _ext == 'rar' || _mime == 'application/zip' || _mime == 'application/x-rar-compressed') {
										_icon = 'Arhiv';
									} else if (/image/.test(_mime)) {
										_icon = 'Picture';
									} else if (_ext == 'doc' || _ext == 'docx') {
										_icon = 'Word';
									} else if (_ext == 'xls' || _ext == 'xlsx') {
										_icon = 'Exel';
									} else if (_ext == 'ppt' || _ext == 'pptx') {
										_icon = 'PowerPoint';
									} else if (_ext == 'txt') {
										_icon = 'Txt';
									} else if (_ext == 'eml') {
										_icon = 'Letter';
									} else if (_ext == 'pdf') {
										_icon = 'Pdf';
									}

								} catch (e) {
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a class=\"b-dropdown__list__item b-dropdown__list__item_hashover\" target=\"_blank\" href=\"");
								try {
									__fest_buf.push(__fest_escapeHTML((
										params.NewAttachViewer
											? '/attaches-viewer/?id=' + params.MessageId + '&offset=' + _offset
											: _href
									)))
								} catch (e) {
									__fest_log_error(e.message + "91");
								}
								__fest_buf.push("\" data-href=\"");
								try {
									__fest_if = _type === 'Office'
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_buf.push(__fest_escapeHTML('//docs.' + params.SingleDomainName + '/preview/206x206/?src=' + encodeURIComponent(params.httpProtocol + _href)))
									} catch (e) {
										__fest_log_error(e.message + "96");
									}
								} else {
									try {
										__fest_buf.push(__fest_escapeHTML(_href))
									} catch (e) {
										__fest_log_error(e.message + "99");
									}
								}
								__fest_buf.push("\" data-type=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(_type))
								} catch (e) {
									__fest_log_error(e.message + "103");
								}
								__fest_buf.push("\"><span class=\"b-dropdown__list__icon ");
								try {
									__fest_if = _canPreview
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("js-attachePicture");
								}
								__fest_buf.push("\"><i class=\"ico ico_filetype ico_filetype_");
								try {
									__fest_buf.push(__fest_escapeHTML(_ext))
								} catch (e) {
									__fest_log_error(e.message + "125");
								}
								__fest_buf.push(" \"></i></span><span class=\"b-dropdown__list__text\">");
								try {
									__fest_if = item.isRFC822
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_buf.push(__fest_escapeHTML(item.Subject || 'No Subject'))
									} catch (e) {
										__fest_log_error(e.message + "137");
									}
								} else {
									try {
										__fest_if = item.FileName
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											__fest_buf.push(__fest_escapeHTML(item.FileName))
										} catch (e) {
											__fest_log_error(e.message + "138");
										}
									} else {
										try {
											__fest_if = item.name
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_buf.push(__fest_escapeHTML(item.name))
											} catch (e) {
												__fest_log_error(e.message + "139");
											}
										} else {
											try {
												__fest_buf.push(__fest_escapeHTML(item.URLFileName))
											} catch (e) {
												__fest_log_error(e.message + "140");
											}
										}
									}
								}
								__fest_buf.push("&nbsp;");
								try {
									__fest_buf.push(__fest_escapeHTML(Math.round(item.size / 1024)))
								} catch (e) {
									__fest_log_error(e.message + "145");
								}
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML(Lang.get('Size').kb))
								} catch (e) {
									__fest_log_error(e.message + "147");
								}
								__fest_buf.push("</span></a>");
							}
							try {
								__fest_if = !params.Attachments.length
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-dropdown__list__item\"><span class=\"b-dropdown__list__icon\"><i class=\"ico ico_filetype ico_filetype__letter\"></i></span><span class=\"b-dropdown__list__text\">");
								try {
									__fest_buf.push(__fest_escapeHTML(Lang.str('readmsg.text').toLowerCase()))
								} catch (e) {
									__fest_log_error(e.message + "158");
								}
								__fest_buf.push("&nbsp;");
								try {
									__fest_buf.push(__fest_escapeHTML(params.letter_size))
								} catch (e) {
									__fest_log_error(e.message + "160");
								}
								__fest_buf.push("</span></div>");
							}
							__fest_buf.push("</div></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-datalist__empty_collector"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-datalist__empty_collector\">");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.spinner.host)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-datalist__empty_collector__providers b-datalist__empty_collector__providers_" + __fest_attrs[0] + "\"></div><div class=\"b-datalist__empty_collector__text\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.spinner.text))
							} catch (e) {
								__fest_log_error(e.message + "6");
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-thread-letters"] = function (params) {
							var __fest_buf = [];
							try {
								var collapsed,
									modelReplyTo = params.modelReplyTo || {},
									iterateParams = {
										$GET: params.query,
										thread: params.thread
									}
									;
							} catch (e) {
								__fest_log_error(e.message);
							}
							var i, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.models || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								try {
									var msg = params.messages[i];
									var model = params.models[i];
									var collapsed = (msg.body || msg.let_body) === void 0;
									var isShort = (modelReplyTo.id != msg.id);

									model.flags = msg.flags;
									model.Unread = msg.flags.unread;
									model.Flagged = msg.flags.flagged;
									model.correspondents = msg.correspondents;

									iterateParams.model = model;
									iterateParams.folder = patron.Folders.getSafe(msg.folder);
									iterateParams.rbLine = !i && !params.hasViews;
									iterateParams.isShort = isShort;
									iterateParams.isCollapsed = collapsed;
									iterateParams.skin = params.skin;

									iterateParams.mods = [
										'thread',
										(iterateParams.isShort && 'short'),
									];

									if (i === 0 && !params.hasViews) {
										iterateParams.mods.push('first');
									}
								} catch (e) {
									__fest_log_error(e.message);
								}
								__fest_buf.push("<div>");
								__fest_select = "b-letter";
								__fest_params = {};
								try {
									__fest_params = iterateParams
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
							}
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter"] = function (params) {
							var __fest_buf = [];
							try {
								var model = params.model;
								var folder = params.folder;
								var _helpUrl = patron.IsMyCom ? '//help.my.com/mail' : '//help.mail.ru/mail-help';
								var isSpam = folder.isSpam();

								model.threadActs = !!params.thread;

								params.mods.push(params.isCollapsed ? 'collapsed' : 'expanded');
								params.isCollapsed && params.mods.push('hr');
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_if = !params.thread
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-announcements\"></div>");
							}
							try {
								__fest_if = patron.ShowThreadBtnInLetter && params.$GET.threadId
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-announcement b-announcement_notice\" style=\"padding: 0\">");
								__fest_select = "b-informer";
								__fest_params = {};
								try {
									__fest_params = {
										buttons: [{
											rel: "history",
											text: lang['b-letter']['show-thread'],
											href: "/thread/" + params.$GET.threadId + "/?msgId=" + model.id
										}],
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
							}
							try {
								__fest_attrs[0] = __fest_escapeHTML(model.id)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(params.mods ? ' b-letter_' + params.mods.join(' b-letter_') : '')
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div data-letter-id=\"" + __fest_attrs[0] + "\" data-mnemo=\"letter\" class=\"b-letter" + __fest_attrs[1] + "\">");
							try {
								__fest_if = model.NoMSG
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-letter__body\" style=\"padding: 100px 0 200px; text-align: center; font-size: 200%;\">");
								try {
									__fest_buf.push(__fest_escapeHTML(Lang.get('MessageNotFound')))
								} catch (e) {
									__fest_log_error(e.message + "83");
								}
								__fest_buf.push("</div>");
							} else {
								try {
									__fest_if = !folder.isSecureOpen()
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"js-secure b-letter__head b-letter__head_collapsed\"><div class=\"b-letter__details\">");
									try {
										__fest_attrs[0] = __fest_escapeHTML(patron.Utils.getAvatarSrc())
									} catch (e) {
										__fest_attrs[0] = "";
										__fest_log_error(e.message);
									}
									__fest_buf.push("<div class=\"b-letter__head__avatar\" style=\"background: url(\'" + __fest_attrs[0] + "\') no-repeat;\"></div></div><div class=\"b-letter__head__wrapper\"><div><b>");
									try {
										__fest_buf.push(__fest_escapeHTML(lang['b-letter']['secure-subject']))
									} catch (e) {
										__fest_log_error(e.message + "95");
									}
									__fest_buf.push("</b></div><span class=\"b-letter__head__folder\">");
									try {
										__fest_buf.push(__fest_escapeHTML(folder.get('name')))
									} catch (e) {
										__fest_log_error(e.message + "96");
									}
									__fest_buf.push("</span></div></div>");
								} else {
									__fest_select = "b-letter__head";
									__fest_params = {};
									try {
										__fest_params = params
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									try {
										__fest_if = !params.isCollapsed
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"js-informers\">");
										try {
											__fest_if = model.Receipt
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-informer";
											__fest_params = {};
											try {
												__fest_params = {
													mods: ['notice'],
													link: {name: 'what', href: _helpUrl + '/letters/create/request'},
													name: 'letter.receipt',
													buttons: [{name: 'sendRead'}]
												}
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = model.HasBannedImages
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-informer";
											__fest_params = {};
											try {
												__fest_params = {
													mods: ['notice'],
													link: {name: 'details', href: _helpUrl + '/security/blockpic'},
													name: 'letter.bannedimages'
												}
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = model.x_ubl_black && isSpam
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-informer";
											__fest_params = {};
											try {
												__fest_params = {
													mods: ['notice'],
													link: {name: 'details', href: _helpUrl + '/spam/why'},
													name: ['letter.spamblack', model.From]
												}
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = (model.x_spam || model.x_mras) && !model.x_ubl_black && isSpam
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-informer";
											__fest_params = {};
											try {
												__fest_params = {
													mods: ['notice'],
													link: {name: 'details', href: _helpUrl + '/spam/why'},
													name: 'letter.spaminfo'
												}
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = model.MailWithImages && model.ImagesAreHidden
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-informer";
											__fest_params = {};
											try {
												__fest_params = {
													mods: ['notice'],
													name: 'letter.imagehidden',
													buttons: [{name: 'showImages'}]
												}
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = model.dmarc_warning
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-informer";
											__fest_params = {};
											try {
												__fest_params = {
													mods: ['notice'],
													name: 'letter.dmarc_warning',
													mnemo: 'dmarc_warning',
													link: {
														name: 'details',
														href: 'http://r.mail.ru/n126855101',
														mnemo: 'dmarc_warning_details'
													}
												}
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										__fest_buf.push("</div>");
										try {
											__fest_if = !patron.threads || (model.body || model.let_body) !== void 0
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__body";
											__fest_params = {};
											try {
												__fest_params = model
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
											__fest_select = "b-letter__foot";
											__fest_params = {};
											try {
												__fest_params = model
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										} else {
											__fest_buf.push("<div class=\"b-letter__body\"><div style=\"text-align: center; margin: 30px;\"><i class=\"icon icon_loader\"></i>");
											try {
												__fest_buf.push(__fest_escapeHTML(' ' + lang.loading))
											} catch (e) {
												__fest_log_error(e.message + "169");
											}
											__fest_buf.push("&hellip;</div></div>");
										}
									}
								}
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-letter__body"] = function (params) {
							var __fest_buf = [];
							try {
								var _body_ = $('<div/>').innerHTML((params.body ? params.body.html : params.let_body) + '').innerHTML();
							} catch (e) {
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-letter__details\">");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-letter__body_' + params.mods.join(' b-letter__body_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-letter__body" + __fest_attrs[0] + "\"><div class=\"js-body b-letter__body__wrap\">");
							try {
								__fest_buf.push(_body_)
							} catch (e) {
								__fest_log_error(e.message + "14");
							}
							__fest_buf.push("</div>");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.Id)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"js-attachments-view b-letter__body__attachments\" data-message-id=\"" + __fest_attrs[0] + "\"></div></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-letter__foot__tab"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.name)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<span data-compose-act=\"" + __fest_attrs[0] + "\" class=\"b-letter__foot__tab\"><span>");
							try {
								__fest_buf.push(__fest_escapeHTML(lang.btn[params.name]))
							} catch (e) {
								__fest_log_error(e.message + "6");
							}
							__fest_buf.push("</span></span>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter__foot"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-letter__details\">");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-letter__foot_' + params.mods.join(' b-letter__foot_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(patron.threads ? ' b-letter__foot_threads' : '')
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-letter__foot" + __fest_attrs[0] + "" + __fest_attrs[1] + "\"><div class=\"js-compose-act b-letter__foot__wrapper\"><div data-compose-act=\"replyAll\" class=\"b-letter__foot__box\"><div class=\"b-letter__foot__tabs\">");
							try {
								__fest_buf.push(lang.get('b-letter.fast_compose.action'))
							} catch (e) {
								__fest_log_error(e.message + "16");
							}
							__fest_buf.push("</div></div></div><div data-mnemo=\"compose\" class=\"b-letter__fastcompose\"><div class=\"js-compose\"></div></div></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-letter__head"] = function (params) {
							var __fest_buf = [];
							try {
								var model = params.model;
								var folder = params.folder;

								var isThread = !!params.thread || params.isLikeThread;
								var isShort = params.isShort;
								var isFull = !isShort;

								var isCollapsed = params.isCollapsed;
								var isExpanded = !isCollapsed;

								var timestamp = patron.Utils.getCorrectedTimestamp(model.date || model.DateUTS);
								var dateString = new Date(timestamp * 1000).getLocaleDateFull();

								// Тема и Снипет
								var subject = model.Subject || model.subject;
								var snippet = model.Microformat && model.Microformat.text || model.snippet || "";

								// Корреспонденты
								var correspondents = model.correspondents;

								// Флаги
								var flags = model.flags || model;

								// Тип папки
								var isSent = folder && folder.isSent && folder.isSent();

								// Кол-во аттачей (примерно)
								var attachments = ((model.Attachfiles_Items | 0) + (model.Attachlinks_Items | 0)) || +!!(model.Attachment || flags.attach);

								var _getAddrs = patron.Utils.extractEmailsAndNames;
								if (!correspondents || !correspondents.cc) {

									correspondents = {
										'from': [{email: model.From, name: model.FromName || model.FromShort || ""}],
										'to': _getAddrs(model.ToList || model.ToFull),
										'cc': _getAddrs(model.Cc),
										'bcc': []
									};
								}
								//correspondents['bcc'] = correspondents['bcc'].concat([{"email":"rijp@inbox.ru","name":"Юрий Popov","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true},{"email":"rijp@inbox.ru","name":"support@corp.mail.ru","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true},{"email":"rijp@inbox.ru","name":"","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true}]);
								//correspondents['cc'] = correspondents['cc'].concat([{"email":"rijp@inbox.ru","name":"Юрий Popov","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true},{"email":"rijp@inbox.ru","name":"support@corp.mail.ru","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true},{"email":"rijp@inbox.ru","name":"","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true}]);
								//correspondents['to'] = correspondents['to'].concat([{"email":"rijp@inbox.ru","name":"Юрий Popov","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true},{"email":"rijp@inbox.ru","name":"Юрий, Алоэ, Popov","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true},{"email":"rijp@inbox.ru","name":"Юрий Popov","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true},{"email":"rijp@inbox.ru","name":"Юрий Popov","avatars":{"50x50":"https://filin.mail.ru/pic?width=50&height=50&email=rijp@inbox.ru","default":"https://filin.mail.ru/pic?width=90&height=90&email=rijp@inbox.ru"},"__escape":true}]);

								correspondents['to'] = Array.filter(correspondents['to'], function (item) {
									return item && item.email != '<' + Lang.get('readmsg.not_specified') + '>';
								});

								if (model.ReSentTo && patron.ContactInformerInLetter) {
									correspondents['resend_to'] = _getAddrs(model.ReSentTo);
								}
								if (model.ReSentFrom && patron.ContactInformerInLetter) {
									correspondents['resend_from'] = _getAddrs(model.ReSentFrom);
								}

								if (!isSent || !correspondents['bcc']) {
									correspondents['bcc'] = [];
								}

								if (correspondents['from']) {
									var _isInAb = patron.Utils.isInAddressBookSync;
									_isInAb(''); // load ab
									Array.forEach(correspondents['from'], function (item) {
										item.isInAb = patron.LetterCheckFromEmail ? _isInAb(item.email) : false;
									});
								}

								flags.unread = model.get('Unread');
								flags.flagged = model.get('Flagged');


								var pic = patron.Utils.getAvatarSrcByMessage(model, isFull ? 90 : 45, null, isThread);
								var avatar_style = "background-image: url(\"" + pic + "\");";
								var avatar_href = !patron.IsMyCom && patron.Utils.getAvatarUrlByMessage(model);
								var avatar_email = patron.Utils.getAvatarEmailByMessage(model, isThread);

								var calendar = {},
									desc = model.let_body_plain || '',
									attendees;

								if (desc.length > 320) {
									desc = desc.substr(0, 320) + '...';
								}

								calendar.day = (new Date()).getDate();
								calendar.href = '//calendar.mail.ru/?action=eventCreate&url={location}&attendees={attendees}&summary={summary}&description={description}';

								attendees = Array.map(correspondents.to.concat(correspondents.cc || []).concat(correspondents.from), function (user) {
									return user.email;
								});

								calendar.href = calendar.href
									.replace('{summary}', encodeURIComponent(model.Subject))
									.replace('{location}', encodeURIComponent(location.href))
									.replace('{attendees}', encodeURIComponent(attendees.join(',')))
									.replace('{description}', encodeURIComponent(desc));

							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_if = params.rbLine
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-letter__head__rb\">");
								__fest_select = "b-rb";
								__fest_params = {};
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
							}
							try {
								__fest_attrs[0] = __fest_escapeHTML(model.mods ? ' b-letter__head_' + model.mods.join(' b-letter__head_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(!isThread && params.rbLine ? ' b-letter__head_with-rb' : '')
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[2] = __fest_escapeHTML(isThread ? ' b-letter__head_threads' : '')
							} catch (e) {
								__fest_attrs[2] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-letter__head" + __fest_attrs[0] + "" + __fest_attrs[1] + "" + __fest_attrs[2] + "\">");
							try {
								__fest_if = isThread
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-letter__controls\"><div class=\"b-letter__controls__flag b-letter__controls__item\">");
								__fest_select = "b-flag";
								__fest_params = {};
								try {
									__fest_params = {id: model.id, flagged: flags.flagged}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div><div class=\"b-letter__controls__status b-letter__controls__item\">");
								__fest_select = "b-letterstatus";
								__fest_params = {};
								try {
									__fest_params = {id: model.id, unread: flags.unread}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
								try {
									__fest_if = patron.ShowCreateEventButton
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-letter__controls__item\">");
									try {
										__fest_attrs[0] = __fest_escapeHTML(calendar.href)
									} catch (e) {
										__fest_attrs[0] = "";
										__fest_log_error(e.message);
									}
									__fest_buf.push("<a data-fishing-disabled=\"data-fishing-disabled\" target=\"_blank\" data-mnemo=\"create-event\" href=\"" + __fest_attrs[0] + "\" title=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(lang['b-letter'].header['create-event']))
									} catch (e) {
										__fest_log_error(e.message + "125");
									}
									__fest_buf.push("\"><span class=\"ico b-letter__head__calendar_icon\"><span class=\"b-letter__head__calendar_day\">");
									try {
										__fest_buf.push(__fest_escapeHTML(calendar.day))
									} catch (e) {
										__fest_log_error(e.message + "128");
									}
									__fest_buf.push("</span></span></a></div>");
								}
								__fest_buf.push("<div class=\"b-letter__head__button  b-letter__controls__item b-letter__controls__item_last\"><div data-group=\"more\" class=\"b-letter__button b-letter__button_last b-letter__button_more\"><div class=\"js-preload-click b-letter__button__ctrl\"><i class=\"ico ico_letter ico_letter_more\"></i></div><div class=\"b-dropdown__list\" style=\"display:none;\"></div></div></div></div><div class=\"b-letter__details\">");
								__fest_select = "b-letter__head__avatar";
								__fest_params = {};
								try {
									__fest_params = {
										href: avatar_href,
										style: avatar_style,
										email: avatar_email,
										model: model,
										full: isFull
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div><div class=\"b-letter__head__wrapper\">");
								try {
									__fest_if = isShort
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-letter__head__wrapper-short\"><div class=\"b-letter__head__subj\"><strong");
									try {
										__fest_if = patron.ContactInformerInLetter
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(" class=\"js-contact-informer\" data-contact-informer-message-id=\"");
										try {
											__fest_buf.push(__fest_escapeHTML(model.id))
										} catch (e) {
											__fest_log_error(e.message + "189");
										}
										__fest_buf.push("\" data-contact-informer-email=\"");
										try {
											__fest_buf.push(__fest_escapeHTML(correspondents['from'][0].email))
										} catch (e) {
											__fest_log_error(e.message + "192");
										}
										__fest_buf.push("\"");
									}
									__fest_buf.push(">");
									try {
										__fest_buf.push(__fest_escapeHTML(correspondents['from'][0].name || correspondents['from'][0].email))
									} catch (e) {
										__fest_log_error(e.message + "196");
									}
									__fest_buf.push("</strong>");
									try {
										__fest_if = isCollapsed
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(": <span class=\"b-letter__head__snippet\">");
										try {
											__fest_buf.push(__fest_escapeHTML(snippet || subject || ajs.Html.escape(lang['no-subject'])))
										} catch (e) {
											__fest_log_error(e.message + "202");
										}
										__fest_buf.push("</span>");
									}
									__fest_buf.push("</div></div>");
									try {
										__fest_if = isExpanded
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-letter__details\">");
										try {
											__fest_attrs[0] = __fest_escapeHTML(isShort ? 'display: none' : '')
										} catch (e) {
											__fest_attrs[0] = "";
											__fest_log_error(e.message);
										}
										__fest_buf.push("<div class=\"js-headers\" style=\"" + __fest_attrs[0] + "\">");
										try {
											__fest_if = correspondents['from'].length && isFull
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs_new";
											__fest_params = {};
											try {
												__fest_params = ({
													name: 'from',
													model: model,
													list: correspondents['from'],
													bold: true,
													search: isThread ? '&q_threads=1' : true
												})
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = correspondents['to'].length
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs_new";
											__fest_params = {};
											try {
												__fest_params = ({
													name: 'to', model: model, list: correspondents['to']
												})
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = correspondents['cc'].length
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs_new";
											__fest_params = {};
											try {
												__fest_params = ({
													name: 'cc', model: model, list: correspondents['cc']
												})
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = correspondents['bcc'].length
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs_new";
											__fest_params = {};
											try {
												__fest_params = ({
													name: 'bcc', model: model, list: correspondents['bcc']
												})
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = model.ReSentTo && model.ReSentTo.length
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs_new";
											__fest_params = {};
											try {
												__fest_params = ({
													name: 'resentto',
													list: correspondents['resend_to'],
													model: model,
													text: model.ReSentTo
												})
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = model.ReSentFrom && model.ReSentFrom.length
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs_new";
											__fest_params = {};
											try {
												__fest_params = ({
													name: 'resentfrom',
													list: correspondents['resend_from'],
													model: model,
													text: model.ReSentFrom
												})
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = model.ReSentDate && model.ReSentDate.length
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs_new";
											__fest_params = {};
											try {
												__fest_params = ({
													name: 'resentdate',
													model: model,
													text: model.ReSentDate,
													hidden: isShort
												})
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										try {
											__fest_if = model.ReSentComment && model.ReSentComment.length
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs_new";
											__fest_params = {};
											try {
												__fest_params = ({
													name: 'resentcomment', model: model, text: model.ReSentComment
												})
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										}
										__fest_buf.push("</div></div>");
									}
									__fest_buf.push("<span class=\"b-letter__head__folder\">");
									try {
										__fest_buf.push(__fest_escapeHTML(folder.get('name')))
									} catch (e) {
										__fest_log_error(e.message + "285");
									}
									__fest_buf.push("</span>, <span class=\"b-letter__head__date\"> ");
									try {
										__fest_buf.push(__fest_escapeHTML(dateString))
									} catch (e) {
										__fest_log_error(e.message + "290");
									}
									__fest_buf.push("</span>");
									try {
										__fest_if = attachments > 0
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span data-name=\"go2attachments\" class=\"js-show-attachments b-letter__head__attach\"><span class=\"ico ico_datalist_attach\"></span>");
										try {
											__fest_if = isExpanded
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<span class=\"link link_black link_dotted\">");
											try {
												__fest_buf.push(__fest_escapeHTML(ajs.plural(attachments, 'files.plural', ' ')))
											} catch (e) {
												__fest_log_error(e.message + "298");
											}
											__fest_buf.push("</span>");
										}
										__fest_buf.push("</span>");
									}
									try {
										__fest_if = model.isHigh()
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span class=\"b-letter__head__priority\"><span class=\"b-letter__head__priority__icon b-letter__head__priority__icon_high\">!</span>");
										try {
											__fest_buf.push(__fest_escapeHTML(Lang.get('Message').important))
										} catch (e) {
											__fest_log_error(e.message + "307");
										}
										__fest_buf.push("</span>");
									}
									try {
										__fest_if = isExpanded
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span data-name=\"headers-toggle\" class=\"b-letter__head__details\"><span class=\"js-headers-expand\">");
										try {
											__fest_buf.push(__fest_escapeHTML(lang.get('b-letter.headers.expand')))
										} catch (e) {
											__fest_log_error(e.message + "313");
										}
										__fest_buf.push("</span><span class=\"js-headers-collapse\" style=\"display: none\">");
										try {
											__fest_buf.push(__fest_escapeHTML(lang.get('b-letter.headers.collapse')))
										} catch (e) {
											__fest_log_error(e.message + "314");
										}
										__fest_buf.push("</span></span>");
									}
								} else {
									try {
										var addrsLength = 2;
										var addressCut = function (To, CC, BCC, addrsLength) {
											var result = {};
											if (To < addrsLength || (CC == 0 && To <= addrsLength)) {
												result.addressTo = To;
											} else {
												result.addressTo = addrsLength - 1;
											}
											result.addressMore = To - result.addressTo + CC + BCC;
											return result;
										}
										var addressCutLength = addressCut(
											correspondents['to'].length,
											correspondents['cc'].length,
											correspondents['bcc'].length,
											addrsLength
										);

										var addrsMax = 3;
										var addrsToLength = correspondents['to'].length;
										var addrsMoreLength = (addrsToLength - Math.min(addrsToLength, addrsMax)) + correspondents['cc'].length;

									} catch (e) {
										__fest_log_error(e.message);
									}
									try {
										__fest_if = isFull
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__subj";
										__fest_params = {};
										try {
											__fest_params = subject
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									__fest_buf.push("<div");
									try {
										__fest_if = isShort
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(" class=\"js-headers\" style=\"display: \'none\'\"");
									}
									__fest_buf.push(">");
									try {
										__fest_if = correspondents['from'].length && isFull
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-letter__head__addrs__from\">");
										var i, addr, __fest_to0, __fest_iterator0;
										try {
											__fest_iterator0 = correspondents['from'] || [];
											__fest_to0 = __fest_iterator0.length;
										} catch (e) {
											__fest_iterator0 = [];
											__fest_to0 = 0;
											__fest_log_error(e.message);
										}
										for (i = 0; i < __fest_to0; i++) {
											addr = __fest_iterator0[i];
											try {
												__fest_if = patron.ContactInformerInLetter
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												try {
													__fest_attrs[0] = __fest_escapeHTML(model.id)
												} catch (e) {
													__fest_attrs[0] = "";
													__fest_log_error(e.message);
												}
												try {
													__fest_attrs[1] = __fest_escapeHTML(addr.email)
												} catch (e) {
													__fest_attrs[1] = "";
													__fest_log_error(e.message);
												}
												__fest_buf.push("<span class=\"b-contact-informer-target js-contact-informer\" data-contact-informer-message-id=\"" + __fest_attrs[0] + "\" data-contact-informer-email=\"" + __fest_attrs[1] + "\">");
												__fest_select = "b-letter__head__addr-value";
												__fest_params = {};
												try {
													__fest_params = {addr: addr}
												} catch (e) {
													__fest_log_error(e.message)
												}
												__fest_fn = __fest_blocks[__fest_select];
												if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
												__fest_buf.push("<span class=\"b-contact-informer-target__comma\">");
												try {
													__fest_if = i < correspondents['from'].length - 1
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													__fest_buf.push(",");
												}
												__fest_buf.push("</span></span>");
											} else {
												try {
													__fest_if = i > 0
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													__fest_buf.push(", ");
												}
												try {
													__fest_attrs[0] = __fest_escapeHTML(addr.email)
												} catch (e) {
													__fest_attrs[0] = "";
													__fest_log_error(e.message);
												}
												__fest_buf.push("<span title=\"" + __fest_attrs[0] + "\">");
												try {
													__fest_if = addr.name
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													try {
														__fest_buf.push(__fest_escapeHTML(addr.name))
													} catch (e) {
														__fest_log_error(e.message + "376");
													}
													__fest_buf.push(" &lt;");
													try {
														__fest_buf.push(__fest_escapeHTML(addr.email))
													} catch (e) {
														__fest_log_error(e.message + "378");
													}
													__fest_buf.push("&gt;");
												}
												try {
													__fest_if = !addr.name
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													try {
														__fest_buf.push(__fest_escapeHTML(addr.email))
													} catch (e) {
														__fest_log_error(e.message + "381");
													}
												}
												__fest_buf.push("</span>");
											}
											try {
												var search_link = '/search/?&q_threads=1&' + ajs.toQuery({q_from: addr.email});
											} catch (e) {
												__fest_log_error(e.message);
											}
											try {
												__fest_if = !patron.ContactInformerInLetter
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push("&nbsp;");
											}
											try {
												__fest_attrs[0] = __fest_escapeHTML(search_link)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											try {
												__fest_attrs[1] = __fest_escapeHTML(lang['b-dropdown']['letter-more.']['search'])
											} catch (e) {
												__fest_attrs[1] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<a data-name=\"search\" rel=\"history\" class=\"b-letter__head__search\" href=\"" + __fest_attrs[0] + "\" title=\"" + __fest_attrs[1] + "\" style=\"");
											try {
												__fest_if = patron.ContactInformerInLetter
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												__fest_buf.push("margin-left:-4px;");
											}
											__fest_buf.push("\"><i class=\"ico ico_search\"></i></a>");
										}
										__fest_buf.push("</div>");
									}
									try {
										__fest_if = correspondents['to'].length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-letter__head__addrs\"><span class=\"b-letter__head__addrs__name\">");
										try {
											__fest_buf.push(__fest_escapeHTML(lang.get('b-letter.header.to') + ':'))
										} catch (e) {
											__fest_log_error(e.message + "412");
										}
										__fest_buf.push(" </span><span class=\"b-letter__head__addrs__value\">");
										try {
											__fest_if = patron.ContactInformerInLetter
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_select = "b-letter__head__addrs__list_contact-informer";
											__fest_params = {};
											try {
												__fest_params = {
													list: correspondents['to'],
													model: model
												}
											} catch (e) {
												__fest_log_error(e.message)
											}
											__fest_fn = __fest_blocks[__fest_select];
											if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										} else {
											var i, addr, __fest_to1, __fest_iterator1;
											try {
												__fest_iterator1 = correspondents['to'] || [];
												__fest_to1 = __fest_iterator1.length;
											} catch (e) {
												__fest_iterator1 = [];
												__fest_to1 = 0;
												__fest_log_error(e.message);
											}
											for (i = 0; i < __fest_to1; i++) {
												addr = __fest_iterator1[i];
												try {
													__fest_if = i > 0
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													__fest_buf.push(", ");
												}
												try {
													__fest_attrs[0] = __fest_escapeHTML(addr.email)
												} catch (e) {
													__fest_attrs[0] = "";
													__fest_log_error(e.message);
												}
												__fest_buf.push("<span title=\"" + __fest_attrs[0] + "\">");
												try {
													__fest_if = addr.name
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													try {
														__fest_buf.push(__fest_escapeHTML(addr.name))
													} catch (e) {
														__fest_log_error(e.message + "431");
													}
													__fest_buf.push(" &lt;");
													try {
														__fest_buf.push(__fest_escapeHTML(addr.email))
													} catch (e) {
														__fest_log_error(e.message + "433");
													}
													__fest_buf.push("&gt;");
												}
												try {
													__fest_if = !addr.name
												} catch (e) {
													__fest_if = false;
													__fest_log_error(e.message);
												}
												if (__fest_if) {
													try {
														__fest_buf.push(__fest_escapeHTML(addr.email))
													} catch (e) {
														__fest_log_error(e.message + "436");
													}
												}
												__fest_buf.push("</span>");
											}
										}
										__fest_buf.push("</span></div>");
									}
									__fest_buf.push("<div class=\"js-headers\" style=\"display: block\">");
									try {
										__fest_if = correspondents['cc'].length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs_new";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'cc', list: correspondents['cc'], model: model
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = correspondents['bcc'].length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs_new";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'bcc', list: correspondents['bcc'], model: model
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = model.ReSentTo && model.ReSentTo.length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs_new";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'resentto',
												list: correspondents['resend_to'],
												model: model,
												text: model.ReSentTo
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = model.ReSentFrom && model.ReSentFrom.length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs_new";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'resentfrom',
												list: correspondents['resend_from'],
												model: model,
												text: model.ReSentFrom
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = model.ReSentDate && model.ReSentDate.length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs_new";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'resentdate',
												model: model,
												text: model.ReSentDate,
												hidden: isShort
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = model.ReSentComment && model.ReSentComment.length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs_new";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'resentcomment', model: model, text: model.ReSentComment
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									__fest_buf.push("</div></div><div class=\"b-letter__head__date\">");
									try {
										__fest_buf.push(__fest_escapeHTML(dateString))
									} catch (e) {
										__fest_log_error(e.message + "549");
									}
									__fest_buf.push("</div>");
									try {
										__fest_if = model.isHigh()
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-letter__head__priority\"><span class=\"b-letter__head__priority__icon b-letter__head__priority__icon_high\">!</span>");
										try {
											__fest_buf.push(__fest_escapeHTML(Lang.get('Message').important))
										} catch (e) {
											__fest_log_error(e.message + "555");
										}
										__fest_buf.push("</div>");
									}
									try {
										__fest_if = attachments > 0
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span data-name=\"go2attachments\" class=\"js-show-attachments b-letter__head__attach\"><span class=\"ico ico_datalist_attach\"></span><span class=\"link link_black link_dotted\">");
										try {
											__fest_buf.push(__fest_escapeHTML(ajs.plural(attachments, 'files.plural', ' ')))
										} catch (e) {
											__fest_log_error(e.message + "562");
										}
										__fest_buf.push("</span></span>");
									}
								}
								__fest_buf.push("</div>");
								try {
									__fest_if = (isThread && (isFull || isExpanded)) || !isThread
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-letter__head__hr\"></div>");
								}
							} else {
								__fest_buf.push("<div class=\"b-letter__details\">");
								__fest_select = "b-letter__head__avatar";
								__fest_params = {};
								try {
									__fest_params = {
										href: avatar_href,
										style: avatar_style,
										email: avatar_email,
										model: model,
										full: isFull
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div><div class=\"b-letter__head__wrapper\"><div class=\"b-letter__head__flag\">");
								__fest_select = "b-flag";
								__fest_params = {};
								try {
									__fest_params = {id: model.id, flagged: flags.flagged}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("</div>");
								try {
									__fest_if = isFull
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "b-letter__head__subj";
									__fest_params = {};
									try {
										__fest_params = subject
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								} else {
									__fest_buf.push("<div class=\"b-letter__head__wrapper-short\"><div class=\"b-letter__head__subj\">");
									__fest_select = "b-letter__head__addr-value";
									__fest_params = {};
									try {
										__fest_params = {
											addr: correspondents['from'][0],
											bold: true
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									try {
										__fest_if = isCollapsed
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(": <span class=\"b-letter__head__snippet\">");
										try {
											__fest_buf.push(__fest_escapeHTML(snippet || subject || ajs.Html.escape(lang['no-subject'])))
										} catch (e) {
											__fest_log_error(e.message + "621");
										}
										__fest_buf.push("</span>");
									} else {
										__fest_buf.push("<span data-name=\"headers-toggle\" class=\"b-letter__head__details link link_dotted\"><span class=\"js-headers-expand\">");
										try {
											__fest_buf.push(__fest_escapeHTML(lang.get('b-letter.headers.expand')))
										} catch (e) {
											__fest_log_error(e.message + "627");
										}
										__fest_buf.push("</span><span class=\"js-headers-collapse\" style=\"display: none\">");
										try {
											__fest_buf.push(__fest_escapeHTML(lang.get('b-letter.headers.collapse')))
										} catch (e) {
											__fest_log_error(e.message + "628");
										}
										__fest_buf.push("</span></span>");
									}
									__fest_buf.push("</div></div>");
									try {
										__fest_if = !isExpanded
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-letter__head__status\">");
										__fest_select = "b-letterstatus";
										__fest_params = {};
										try {
											__fest_params = {id: model.id, unread: flags.unread}
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										__fest_buf.push("</div><span class=\"b-letter__head__folder\">");
										try {
											__fest_buf.push(__fest_escapeHTML(folder.get('name')))
										} catch (e) {
											__fest_log_error(e.message + "640");
										}
										__fest_buf.push("</span>, <span class=\"b-letter__head__date\"> ");
										try {
											__fest_buf.push(__fest_escapeHTML(dateString))
										} catch (e) {
											__fest_log_error(e.message + "645");
										}
										__fest_buf.push("</span>");
										try {
											__fest_if = attachments > 0
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<span data-name=\"go2attachments\" class=\"js-show-attachments b-letter__head__attach\"><span class=\"ico ico_datalist_attach\"></span>");
											try {
												__fest_if = isExpanded
											} catch (e) {
												__fest_if = false;
												__fest_log_error(e.message);
											}
											if (__fest_if) {
												try {
													__fest_buf.push(__fest_escapeHTML(ajs.plural(attachments, 'files.plural', ' ')))
												} catch (e) {
													__fest_log_error(e.message + "652");
												}
											}
											__fest_buf.push("</span>");
										}
										try {
											__fest_if = model.isHigh()
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<span class=\"b-letter__head__priority\"><span class=\"b-letter__head__priority__icon b-letter__head__priority__icon_high\">!</span>");
											try {
												__fest_buf.push(__fest_escapeHTML(Lang.get('Message').important))
											} catch (e) {
												__fest_log_error(e.message + "660");
											}
											__fest_buf.push("</span>");
										}
										try {
											__fest_if = patron.ShowCreateEventButton
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<span class=\"b-letter__head__create_event\"><span class=\"ico b-letter__head__calendar_icon\"><span class=\"b-letter__head__calendar_day\">");
											try {
												__fest_buf.push(__fest_escapeHTML(calendar.day))
											} catch (e) {
												__fest_log_error(e.message + "667");
											}
											__fest_buf.push("</span></span>");
											try {
												__fest_attrs[0] = __fest_escapeHTML(calendar.href)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<a class=\"link link_black link_dotted\" data-fishing-disabled=\"data-fishing-disabled\" target=\"_blank\" data-mnemo=\"create-event\" href=\"" + __fest_attrs[0] + "\">");
											try {
												__fest_buf.push(__fest_escapeHTML(lang['b-letter'].header['create-event']))
											} catch (e) {
												__fest_log_error(e.message + "669");
											}
											__fest_buf.push("</a></span>");
										}
									}
									try {
										__fest_if = patron.ShowCreateEventButton
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<span class=\"b-letter__head__create_event\"><span class=\"ico b-letter__head__calendar_icon\"><span class=\"b-letter__head__calendar_day\">");
										try {
											__fest_buf.push(__fest_escapeHTML(calendar.day))
										} catch (e) {
											__fest_log_error(e.message + "677");
										}
										__fest_buf.push("</span></span>");
										try {
											__fest_attrs[0] = __fest_escapeHTML(calendar.href)
										} catch (e) {
											__fest_attrs[0] = "";
											__fest_log_error(e.message);
										}
										__fest_buf.push("<a class=\"link link_black link_dotted\" target=\"_blank\" data-mnemo=\"create-event\" href=\"" + __fest_attrs[0] + "\">");
										try {
											__fest_buf.push(__fest_escapeHTML(lang['b-letter'].header['create-event']))
										} catch (e) {
											__fest_log_error(e.message + "679");
										}
										__fest_buf.push("</a></span>");
									}
								}
								try {
									__fest_if = isExpanded
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-letter__details");
									try {
										__fest_if = (isFull && !isThread)
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(" b-letter__details_full");
									}
									__fest_buf.push("\">");
									try {
										__fest_attrs[0] = __fest_escapeHTML(isShort ? 'display: none;' : '')
									} catch (e) {
										__fest_attrs[0] = "";
										__fest_log_error(e.message);
									}
									__fest_buf.push("<div class=\"js-headers\" style=\"" + __fest_attrs[0] + "\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><colgroup><col width=\"*\"/><col width=\"100%\"/></colgroup>");
									try {
										__fest_if = correspondents['from'].length && isFull
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'from',
												list: correspondents['from'],
												bold: true,
												search: isThread ? '&q_threads=1' : true,
												model: model
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = correspondents['to'].length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'to', list: correspondents['to'], model: model
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = correspondents['cc'].length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'cc', list: correspondents['cc'], model: model
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = correspondents['bcc'].length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'bcc', list: correspondents['bcc'], model: model
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = model.ReSentTo && model.ReSentTo.length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'resentto',
												list: correspondents['resend_to'],
												model: model,
												text: model.ReSentTo
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = model.ReSentFrom && model.ReSentFrom.length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'resentfrom',
												list: correspondents['resend_from'],
												model: model,
												text: model.ReSentFrom
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = model.ReSentDate && model.ReSentDate.length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'resentdate',
												text: model.ReSentDate,
												hidden: isShort,
												model: model
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									try {
										__fest_if = model.ReSentComment && model.ReSentComment.length
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_select = "b-letter__head__addrs";
										__fest_params = {};
										try {
											__fest_params = ({
												name: 'resentcomment', text: model.ReSentComment, model: model
											})
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
									__fest_buf.push("</table></div>");
									try {
										__fest_if = isFull || (isExpanded && isThread)
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-letter__head__status");
										try {
											__fest_if = (isFull && !isThread)
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push(" b-letter__head__status_full");
										}
										__fest_buf.push("\">");
										__fest_select = "b-letterstatus";
										__fest_params = {};
										try {
											__fest_params = {id: model.id, unread: flags.unread}
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
										__fest_buf.push("</div>");
										try {
											__fest_if = isExpanded && isThread
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<div class=\"b-letter__head__button\">");
											try {
												__fest_attrs[0] = __fest_escapeHTML(model.id)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<div data-id=\"" + __fest_attrs[0] + "\" data-compose-page=\"reply\" class=\"js-hover b-letter__button b-letter__button_first b-letter__button_reply b-letter__button_hover\" title=\"Ответить\"><i class=\"ico ico_letter ico_letter_reply\"></i></div>");
											try {
												__fest_attrs[0] = __fest_escapeHTML(model.id)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<div data-id=\"" + __fest_attrs[0] + "\" data-compose-page=\"replyall\" class=\"js-hover b-letter__button b-letter__button_reply-all\" title=\"Ответить всем\"><i class=\"ico ico_letter ico_letter_reply-all\"></i></div>");
											try {
												__fest_attrs[0] = __fest_escapeHTML(model.id)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<div data-id=\"" + __fest_attrs[0] + "\" data-compose-page=\"forward\" class=\"js-hover b-letter__button b-letter__button_forward\" title=\"Переслать\"><i class=\"ico ico_letter ico_letter_forward\"></i></div><div data-group=\"more\" class=\"b-letter__button b-letter__button_last b-letter__button_more\"><div class=\"b-letter__button__ctrl\"><i class=\"ico ico_letter ico_letter_more\"></i></div><div class=\"b-dropdown__list\" style=\"display:none;\"></div></div></div>");
										}
										try {
											__fest_if = !isFull
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<span class=\"b-letter__head__folder\">");
											try {
												__fest_buf.push(__fest_escapeHTML(folder.get('name')))
											} catch (e) {
												__fest_log_error(e.message + "811");
											}
											__fest_buf.push("</span>, ");
										}
										__fest_buf.push("<div class=\"b-letter__head__date\">");
										try {
											__fest_buf.push(__fest_escapeHTML(dateString))
										} catch (e) {
											__fest_log_error(e.message + "815");
										}
										__fest_buf.push("</div>");
										try {
											__fest_if = model.isHigh()
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<div class=\"b-letter__head__priority\"><span class=\"b-letter__head__priority__icon b-letter__head__priority__icon_high\">!</span>");
											try {
												__fest_buf.push(__fest_escapeHTML(Lang.get('Message').important))
											} catch (e) {
												__fest_log_error(e.message + "821");
											}
											__fest_buf.push("</div>");
										}
										try {
											__fest_if = attachments > 0
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<span data-name=\"go2attachments\" class=\"js-show-attachments b-letter__head__attach\"><span class=\"ico ico_datalist_attach\"></span><span class=\"link link_black link_dotted\">");
											try {
												__fest_buf.push(__fest_escapeHTML(ajs.plural(attachments, 'files.plural', ' ')))
											} catch (e) {
												__fest_log_error(e.message + "828");
											}
											__fest_buf.push("</span></span>");
										}
										try {
											__fest_if = patron.ShowCreateEventButton
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<span class=\"b-letter__head__create_event\"><span class=\"ico b-letter__head__calendar_icon\"><span class=\"b-letter__head__calendar_day\">");
											try {
												__fest_buf.push(__fest_escapeHTML(calendar.day))
											} catch (e) {
												__fest_log_error(e.message + "835");
											}
											__fest_buf.push("</span></span>");
											try {
												__fest_attrs[0] = __fest_escapeHTML(calendar.href)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<a class=\"link link_black link_dotted\" target=\"_blank\" data-mnemo=\"create-event\" href=\"" + __fest_attrs[0] + "\">");
											try {
												__fest_buf.push(__fest_escapeHTML(lang['b-letter'].header['create-event']))
											} catch (e) {
												__fest_log_error(e.message + "837");
											}
											__fest_buf.push("</a></span>");
										}
									}
									__fest_buf.push("</div>");
								}
								__fest_buf.push("</div>");
								try {
									__fest_if = isThread && (isFull || isExpanded)
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-letter__head__hr\"></div>");
								}
							}
							__fest_select = "b-letter__mobile-promo";
							__fest_params = {};
							try {
								__fest_params = {mods: ['empty']}
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter__head__addrs"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<tr class=\"b-letter__head__addrs\"");
							try {
								__fest_if = params.hidden
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" style=\"display: none;\"");
							}
							__fest_buf.push("><td class=\"b-letter__head__addrs__name\">");
							try {
								__fest_buf.push(__fest_escapeHTML(lang['b-letter'].header[params.name]))
							} catch (e) {
								__fest_log_error(e.message + "868");
							}
							__fest_buf.push(":</td><td class=\"js-addrs-row b-letter__head__addrs__value\">");
							try {
								__fest_if = params.list
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									var _limit = params.limit
									var _list = params.list;
								} catch (e) {
									__fest_log_error(e.message);
								}
								try {
									__fest_if = patron.ContactInformerInLetter
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "b-letter__head__addrs__list_contact-informer";
									__fest_params = {};
									try {
										__fest_params = {
											list: _list,
											model: params.model,
											bold: params.bold
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								} else {
									var i, addr, __fest_to2, __fest_iterator2;
									try {
										__fest_iterator2 = _list || [];
										__fest_to2 = __fest_iterator2.length;
									} catch (e) {
										__fest_iterator2 = [];
										__fest_to2 = 0;
										__fest_log_error(e.message);
									}
									for (i = 0; i < __fest_to2; i++) {
										addr = __fest_iterator2[i];
										try {
											__fest_buf.push(__fest_escapeHTML(i > 0 ? ', ' : ''))
										} catch (e) {
											__fest_log_error(e.message + "891");
										}
										__fest_buf.push("<span>");
										try {
											__fest_if = addr.name
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_element = params.bold ? 'strong' : 'span';
												if (typeof __fest_element !== "string") {
													__fest_log_error("Element name must be a string");
													__fest_element = "div"
												}
											} catch (e) {
												__fest_element = "div";
												__fest_log_error(e.message);
											}
											__fest_element_stack.push(__fest_element);
											__fest_buf.push("<" + __fest_element);
											__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
											__fest_buf.push(__fest_element in __fest_short_tags ? "/>" : ">");
											try {
												__fest_buf.push(__fest_escapeHTML(addr.name))
											} catch (e) {
												__fest_log_error(e.message + "896");
											}
											__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
											if (!(__fest_element in __fest_short_tags)) {
												__fest_buf.push("</" + __fest_element + ">")
											}
											__fest_element_stack.pop();
											__fest_buf.push(" &lt;");
											try {
												__fest_buf.push(__fest_escapeHTML(addr.email))
											} catch (e) {
												__fest_log_error(e.message + "899");
											}
											__fest_buf.push("&gt;");
										}
										try {
											__fest_if = !addr.name
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_buf.push(__fest_escapeHTML(addr.email))
											} catch (e) {
												__fest_log_error(e.message + "903");
											}
										}
										__fest_buf.push("</span>");
									}
								}
							} else {
								try {
									__fest_buf.push(__fest_escapeHTML(params.text))
								} catch (e) {
									__fest_log_error(e.message + "912");
								}
							}
							try {
								__fest_if = params.search
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									var search_link = '/search/?' + ajs.toQuery({q_from: _list[0].email});
									if (typeof params.search === 'string') {
										search_link += params.search;
									}
								} catch (e) {
									__fest_log_error(e.message);
								}
								__fest_buf.push("&nbsp;");
								try {
									__fest_attrs[0] = __fest_escapeHTML(search_link)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(lang['b-dropdown']['letter-more.']['search'])
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a data-name=\"search\" rel=\"history\" class=\"b-letter__head__search\" href=\"" + __fest_attrs[0] + "\" title=\"" + __fest_attrs[1] + "\"><i class=\"ico ico_search\"></i></a>");
							}
							__fest_buf.push("</td></tr>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter__head__addrs_new"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-letter__head__addrs\"");
							try {
								__fest_if = params.hidden
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" style=\"display: none;\"");
							}
							__fest_buf.push("><span class=\"b-letter__head__addrs__name\">");
							try {
								__fest_buf.push(__fest_escapeHTML(lang['b-letter'].header[params.name]))
							} catch (e) {
								__fest_log_error(e.message + "940");
							}
							__fest_buf.push(": </span><span class=\"js-addrs-row b-letter__head__addrs__value\">");
							try {
								__fest_if = params.list
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									var _limit = params.limit
									var _list = params.list;
								} catch (e) {
									__fest_log_error(e.message);
								}
								try {
									__fest_if = patron.ContactInformerInLetter
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "b-letter__head__addrs__list_contact-informer";
									__fest_params = {};
									try {
										__fest_params = {
											list: _list,
											model: params.model
										}
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								} else {
									var i, addr, __fest_to3, __fest_iterator3;
									try {
										__fest_iterator3 = _list || [];
										__fest_to3 = __fest_iterator3.length;
									} catch (e) {
										__fest_iterator3 = [];
										__fest_to3 = 0;
										__fest_log_error(e.message);
									}
									for (i = 0; i < __fest_to3; i++) {
										addr = __fest_iterator3[i];
										try {
											__fest_buf.push(__fest_escapeHTML(i > 0 ? ', ' : ''))
										} catch (e) {
											__fest_log_error(e.message + "962");
										}
										__fest_buf.push("<span>");
										try {
											__fest_if = addr.name
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_attrs[0] = __fest_escapeHTML(addr.email)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<span title=\"" + __fest_attrs[0] + "\">");
											try {
												__fest_buf.push(__fest_escapeHTML(addr.name || addr.email))
											} catch (e) {
												__fest_log_error(e.message + "967");
											}
											__fest_buf.push(" &lt;");
											try {
												__fest_buf.push(__fest_escapeHTML(addr.email))
											} catch (e) {
												__fest_log_error(e.message + "968");
											}
											__fest_buf.push("&gt;</span>");
										}
										try {
											__fest_if = !addr.name
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											try {
												__fest_attrs[0] = __fest_escapeHTML(addr.email)
											} catch (e) {
												__fest_attrs[0] = "";
												__fest_log_error(e.message);
											}
											__fest_buf.push("<span title=\"" + __fest_attrs[0] + "\">");
											try {
												__fest_buf.push(__fest_escapeHTML(addr.email))
											} catch (e) {
												__fest_log_error(e.message + "974");
											}
											__fest_buf.push("</span>");
										}
										__fest_buf.push("</span>");
									}
								}
							} else {
								try {
									__fest_buf.push(__fest_escapeHTML(params.text))
								} catch (e) {
									__fest_log_error(e.message + "984");
								}
							}
							try {
								__fest_if = params.search
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									var search_link = '/search/?' + ajs.toQuery({q_from: _list[0].email});
									if (typeof params.search === 'string') {
										search_link += params.search;
									}
								} catch (e) {
									__fest_log_error(e.message);
								}
								__fest_buf.push("&nbsp;");
								try {
									__fest_attrs[0] = __fest_escapeHTML(search_link)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(lang['b-dropdown']['letter-more.']['search'])
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a data-name=\"search\" rel=\"history\" class=\"b-letter__head__search\" href=\"" + __fest_attrs[0] + "\" title=\"" + __fest_attrs[1] + "\"><i class=\"ico ico_search\"></i></a>");
							}
							__fest_buf.push("</span></div>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter__head__addrs__list_contact-informer"] = function (params) {
							var __fest_buf = [];
							var i, addr, __fest_to4, __fest_iterator4;
							try {
								__fest_iterator4 = params.list || [];
								__fest_to4 = __fest_iterator4.length;
							} catch (e) {
								__fest_iterator4 = [];
								__fest_to4 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to4; i++) {
								addr = __fest_iterator4[i];
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.model.id)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(addr.email)
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<span class=\"b-contact-informer-target js-contact-informer\" data-contact-informer-message-id=\"" + __fest_attrs[0] + "\" data-contact-informer-email=\"" + __fest_attrs[1] + "\">");
								__fest_select = "b-letter__head__addr-value";
								__fest_params = {};
								try {
									__fest_params = {
										addr: addr,
										bold: params.bold
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								__fest_buf.push("<span class=\"b-contact-informer-target__comma\">");
								try {
									__fest_if = params.hiddenComma && i == params.list.length - 1
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<span class=\"js-headers-hidden\" style=\"display:none;\">,</span>");
								} else {
									try {
										__fest_if = i < params.list.length - 1
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(",");
									}
								}
								__fest_buf.push("</span></span><wbr/>");
							}
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter__head__addr-value"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_if = params.addr.isInAb === undefined || params.addr.isInAb
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_element = params.bold ? 'strong' : 'span';
									if (typeof __fest_element !== "string") {
										__fest_log_error("Element name must be a string");
										__fest_element = "div"
									}
								} catch (e) {
									__fest_element = "div";
									__fest_log_error(e.message);
								}
								__fest_element_stack.push(__fest_element);
								__fest_buf.push("<" + __fest_element);
								__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
								__fest_buf.push(__fest_element in __fest_short_tags ? "/>" : ">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.addr.name || params.addr.email))
								} catch (e) {
									__fest_log_error(e.message + "1037");
								}
								__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
								if (!(__fest_element in __fest_short_tags)) {
									__fest_buf.push("</" + __fest_element + ">")
								}
								__fest_element_stack.pop();
							} else {
								try {
									__fest_if = params.addr.name
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_element = params.bold ? 'strong' : 'span';
										if (typeof __fest_element !== "string") {
											__fest_log_error("Element name must be a string");
											__fest_element = "div"
										}
									} catch (e) {
										__fest_element = "div";
										__fest_log_error(e.message);
									}
									__fest_element_stack.push(__fest_element);
									__fest_buf.push("<" + __fest_element);
									__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
									__fest_buf.push(__fest_element in __fest_short_tags ? "/>" : ">");
									try {
										__fest_buf.push(__fest_escapeHTML(params.addr.name))
									} catch (e) {
										__fest_log_error(e.message + "1043");
									}
									__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
									if (!(__fest_element in __fest_short_tags)) {
										__fest_buf.push("</" + __fest_element + ">")
									}
									__fest_element_stack.pop();
									__fest_buf.push(" &lt;");
									try {
										__fest_buf.push(__fest_escapeHTML(params.addr.email))
									} catch (e) {
										__fest_log_error(e.message + "1046");
									}
									__fest_buf.push("&gt;");
								} else {
									try {
										__fest_element = params.bold ? 'strong' : 'span';
										if (typeof __fest_element !== "string") {
											__fest_log_error("Element name must be a string");
											__fest_element = "div"
										}
									} catch (e) {
										__fest_element = "div";
										__fest_log_error(e.message);
									}
									__fest_element_stack.push(__fest_element);
									__fest_buf.push("<" + __fest_element);
									__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
									__fest_buf.push(__fest_element in __fest_short_tags ? "/>" : ">");
									try {
										__fest_buf.push(__fest_escapeHTML(params.addr.email))
									} catch (e) {
										__fest_log_error(e.message + "1051");
									}
									__fest_element = __fest_element_stack[__fest_element_stack.length - 1];
									if (!(__fest_element in __fest_short_tags)) {
										__fest_buf.push("</" + __fest_element + ">")
									}
									__fest_element_stack.pop();
								}
							}
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter__button__list"] = function (params) {
							var __fest_buf = [];
							try {
								var _lang = lang['b-dropdown']['letter-more.'];
							} catch (e) {
								__fest_log_error(e.message);
							}
							var idx, item, __fest_to5, __fest_iterator5;
							try {
								__fest_iterator5 = params.items || [];
								__fest_to5 = __fest_iterator5.length;
							} catch (e) {
								__fest_iterator5 = [];
								__fest_to5 = 0;
								__fest_log_error(e.message);
							}
							for (idx = 0; idx < __fest_to5; idx++) {
								item = __fest_iterator5[idx];
								try {
									__fest_if = _lang[item.name]
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									try {
										__fest_attrs[0] = __fest_escapeHTML(item.id)
									} catch (e) {
										__fest_attrs[0] = "";
										__fest_log_error(e.message);
									}
									try {
										__fest_attrs[1] = __fest_escapeHTML(item.name)
									} catch (e) {
										__fest_attrs[1] = "";
										__fest_log_error(e.message);
									}
									__fest_buf.push("<div data-id=\"" + __fest_attrs[0] + "\" data-letter-more=\"" + __fest_attrs[1] + "\"");
									try {
										__fest_if = item.disabled
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(" aria-disabled=\"disabled\"");
									}
									__fest_buf.push(" class=\"b-dropdown__list__item");
									try {
										__fest_if = item.disabled
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(" b-dropdown__list__item_disabled");
									}
									try {
										__fest_if = item.mods
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(" ");
										try {
											__fest_buf.push(__fest_escapeHTML('b-dropdown__list__item_' + item.mods.join(' b-dropdown__list__item_')))
										} catch (e) {
											__fest_log_error(e.message + "1081");
										}
									}
									__fest_buf.push("\">");
									try {
										__fest_buf.push(__fest_escapeHTML(_lang[item.name]))
									} catch (e) {
										__fest_log_error(e.message + "1086");
									}
									__fest_buf.push("</div>");
								} else {
									__fest_buf.push("<div class=\"b-dropdown__list__hr\"></div>");
								}
							}
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter__head__subj"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-letter__head__subj\"><div class=\"b-letter__head__subj__text\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params || ajs.Html.escape(lang['no-subject'])))
							} catch (e) {
								__fest_log_error(e.message + "1100");
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-letter__head__avatar"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_if = params.href && !patron.ContactInformerInLetter
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.href)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(params.style)
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a href=\"" + __fest_attrs[0] + "\" target=\"_blank\" class=\"b-letter__head__avatar\" style=\"" + __fest_attrs[1] + "\"></a>");
							} else {
								try {
									__fest_attrs[0] = __fest_escapeHTML(params.full && patron.ContactInformerInLetter ? 'js-contact-informer' : '')
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(params.style)
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<div class=\"b-letter__head__avatar " + __fest_attrs[0] + "\" style=\"" + __fest_attrs[1] + "\"");
								try {
									__fest_if = params.full
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push(" data-contact-informer-message-id=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.model.id))
									} catch (e) {
										__fest_log_error(e.message + "1118");
									}
									__fest_buf.push("\" data-contact-informer-mods=\"letter\" data-contact-informer-email=\"");
									try {
										__fest_buf.push(__fest_escapeHTML(params.email))
									} catch (e) {
										__fest_log_error(e.message + "1122");
									}
									__fest_buf.push("\"");
								}
								__fest_buf.push("></div>");
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-letter__mobile-promo"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-letter__mobile-promo_' + params.mods.join(' b-letter__mobile-promo_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-letter__mobile-promo" + __fest_attrs[0] + "\"></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						var json = __fest_context;
						__fest_blocks["b-letterstatus"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.id)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(params.unread ? ' b-letterstatus_unread' : '')
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div data-id=\"" + __fest_attrs[0] + "\" data-act=\"unread\" class=\"b-letterstatus" + __fest_attrs[1] + "\">");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.unread ? ' ico_letterstatus_unread' : 'ico_letterstatus_read')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(params.shortcut ? 'js-shortcut' : '')
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-letterstatus__icon ico ico_letterstatus " + __fest_attrs[0] + " " + __fest_attrs[1] + "\"");
							try {
								__fest_if = params.shortcut
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" data-shortcut=\"");
								try {
									__fest_buf.push(__fest_escapeHTML(params.shortcut))
								} catch (e) {
									__fest_log_error(e.message + "8");
								}
								__fest_buf.push("\"");
							}
							__fest_buf.push("></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-layer"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-layer\"><div class=\"b-layer__wrapper\">");
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-layer__container_' + params.mods.join(' b-layer__container_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-layer__container" + __fest_attrs[0] + "\"><div class=\"b-layer__placeholder\">");
							try {
								__fest_if = params.block
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_select = params.block
								} catch (e) {
									__fest_select = "";
									__fest_log_error(e.message)
								}
								__fest_params = {};
								try {
									__fest_params = params.params || params
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_buf.push("</div>");
							try {
								__fest_if = params.controls
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-layer__controls\">");
								var i, control, __fest_to0, __fest_iterator0;
								try {
									__fest_iterator0 = params.controls || [];
									__fest_to0 = __fest_iterator0.length;
								} catch (e) {
									__fest_iterator0 = [];
									__fest_to0 = 0;
									__fest_log_error(e.message);
								}
								for (i = 0; i < __fest_to0; i++) {
									control = __fest_iterator0[i];
									try {
										__fest_if = control.block
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											__fest_select = control.block
										} catch (e) {
											__fest_select = "";
											__fest_log_error(e.message)
										}
										__fest_params = {};
										try {
											__fest_params = control
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									} else {
										__fest_select = "btn";
										__fest_params = {};
										try {
											__fest_params = control
										} catch (e) {
											__fest_log_error(e.message)
										}
										__fest_fn = __fest_blocks[__fest_select];
										if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
									}
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("</div></div><div class=\"b-layer__overlay\"></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-layer__close-btn"] = function (params) {
							var __fest_buf = [];
							__fest_select = "btn";
							__fest_params = {};
							try {
								__fest_params = {
									icon: 'layer_close', mods: ['layer_close'], name: 'close', title: 'Закрыть'
								}
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-notice"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div data-bem=\"b-notice\" class=\"b-notice\">");
							try {
								__fest_if = params.mods.length
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "ico";
								__fest_params = {};
								try {
									__fest_params = {
										mods: ['notice'].concat(Array.map(params.mods, function (mod) {
											return 'notice_' + mod
										}))
									}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-notice__text_' + params.mods.join(' b-notice__text_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<span class=\"b-notice__text" + __fest_attrs[0] + "\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.text))
							} catch (e) {
								__fest_log_error(e.message + "10");
							}
							__fest_buf.push("</span></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-back-top"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-back-top\">");
							__fest_select = "btn";
							__fest_params = {};
							try {
								__fest_params = params
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-announcement"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-announcement_' + params.mods.join(' b-announcement_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-announcement b-announcement_notice" + __fest_attrs[0] + "\">");
							try {
								__fest_if = params.closable
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<i class=\"ico ico_announcement_close b-announcement__close js-close\" data-name=\"close\"></i>");
							}
							__fest_buf.push("<div class=\"b-announcement__text\">");
							try {
								__fest_buf.push(params.text)
							} catch (e) {
								__fest_log_error(e.message + "9");
							}
							try {
								__fest_if = params.closeLink
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-announcement__close-link\"><a class=\"pseudo-link js-close js-ok\" href=\"#\">");
								try {
									__fest_buf.push(params.closeLink)
								} catch (e) {
									__fest_log_error(e.message + "13");
								}
								__fest_buf.push("</a></div>");
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-announcement_mailbox-sort"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-announcement_' + params.mods.join(' b-announcement_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							try {
								__fest_attrs[1] = __fest_escapeHTML(params.type)
							} catch (e) {
								__fest_attrs[1] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-announcement b-announcement_notice" + __fest_attrs[0] + " b-announcement_mailbox-sort_" + __fest_attrs[1] + "\"><i class=\"ico ico_announcement_close b-announcement__close js-close\" data-name=\"close\"></i>");
							try {
								__fest_attrs[0] = __fest_escapeHTML('//img.' + patron.staticDomainName + '/mail/ru/images/cleaner/cleaner__announcment__icon.png')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<img class=\"b-announcement__icon\" src=\"" + __fest_attrs[0] + "\"");
							try {
								__fest_if = params.type == 'second'
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" height=\"40px\"");
							}
							__fest_buf.push("/><div class=\"b-announcement__text\">");
							try {
								__fest_if = params.header
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"b-announcement__header\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.header))
								} catch (e) {
									__fest_log_error(e.message + "16");
								}
								__fest_buf.push("</div>");
							}
							try {
								__fest_buf.push(__fest_escapeHTML(params.text))
							} catch (e) {
								__fest_log_error(e.message + "19");
							}
							__fest_buf.push("</div>");
							__fest_select = "b-announcement__controls";
							__fest_params = {};
							try {
								__fest_params = params
							} catch (e) {
								__fest_log_error(e.message)
							}
							__fest_fn = __fest_blocks[__fest_select];
							if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-announcement_last-login"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-announcement_' + params.mods.join(' b-announcement_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-announcement b-announcement_notice" + __fest_attrs[0] + "\"><i class=\"ico ico_announcement_close b-announcement__close js-close\" data-name=\"close\"></i><div class=\"b-announcement__text\">");
							try {
								__fest_if = params.WWWCurrentIP
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div>");
								try {
									__fest_buf.push(__fest_escapeHTML(params.lang['current_ip']))
								} catch (e) {
									__fest_log_error(e.message + "9");
								}
								__fest_buf.push(" ");
								try {
									__fest_buf.push(params.City)
								} catch (e) {
									__fest_log_error(e.message + "9");
								}
								__fest_buf.push(" \\ ");
								try {
									__fest_buf.push(__fest_escapeHTML(params.WWWCurrentIP))
								} catch (e) {
									__fest_log_error(e.message + "9");
								}
								__fest_buf.push("</div>");
							}
							try {
								__fest_if = params.WWWLoginDate || params.POPLoginDate
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div>");
								try {
									__fest_buf.push(__fest_escapeHTML(params.lang['last_login']))
								} catch (e) {
									__fest_log_error(e.message + "13");
								}
								__fest_buf.push(" ");
								var idx, item, __fest_to0, __fest_iterator0;
								try {
									__fest_iterator0 = params.PLogins || [];
									__fest_to0 = __fest_iterator0.length;
								} catch (e) {
									__fest_iterator0 = [];
									__fest_to0 = 0;
									__fest_log_error(e.message);
								}
								for (idx = 0; idx < __fest_to0; idx++) {
									item = __fest_iterator0[idx];
									try {
										__fest_if = params.PLogins.length > 1
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<br/>");
									}
									__fest_buf.push("<span>");
									try {
										__fest_buf.push(__fest_escapeHTML(item.Date))
									} catch (e) {
										__fest_log_error(e.message + "19");
									}
									try {
										__fest_if = item.Region
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push(", ");
										try {
											__fest_buf.push(__fest_escapeHTML(item.Region))
										} catch (e) {
											__fest_log_error(e.message + "21");
										}
										__fest_buf.push(" ");
									}
									__fest_buf.push("\\ ");
									try {
										__fest_buf.push(__fest_escapeHTML(item.IP))
									} catch (e) {
										__fest_log_error(e.message + "23");
									}
									__fest_buf.push(" ");
									try {
										__fest_if = item.IsPOP
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("POP3");
									}
									__fest_buf.push("</span>");
								}
								__fest_buf.push("</div>");
							}
							__fest_buf.push("<div>");
							try {
								__fest_if = params.AccaAvailableButDisabled
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<a href=\"\/settings\/security?acca\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.lang['settings_acca']))
								} catch (e) {
									__fest_log_error(e.message + "34");
								}
								__fest_buf.push("</a>");
							} else {
								__fest_buf.push("<a href=\"\/settings\/security#accalist\">");
								try {
									__fest_buf.push(__fest_escapeHTML(params.lang['settings_acca_on']))
								} catch (e) {
									__fest_log_error(e.message + "37");
								}
								__fest_buf.push("</a>");
							}
							__fest_buf.push("</div></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-announcement_dialog"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-announcement_' + params.mods.join(' b-announcement_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-announcement b-announcement_notice" + __fest_attrs[0] + "\">");
							try {
								__fest_if = params.closable
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<i class=\"ico ico_announcement_close b-announcement__close js-close\" data-name=\"close\"></i>");
							}
							__fest_buf.push("<div class=\"b-announcement__text\">");
							try {
								__fest_buf.push(params.text)
							} catch (e) {
								__fest_log_error(e.message + "9");
							}
							try {
								__fest_if = params.controls
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_select = "b-announcement__controls";
								__fest_params = {};
								try {
									__fest_params = params
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_buf.push("</div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-announcement__controls"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<div class=\"b-announcement__controls\">");
							var i, control, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.controls || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								control = __fest_iterator0[i];
								__fest_select = "b-announcement__controls__item";
								__fest_params = {};
								try {
									__fest_params = control
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
							__fest_buf.push("</div>");
							return __fest_buf.join("");
						};
						__fest_blocks["b-announcement__controls__item"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.mods ? ' b-announcement__controls__item_' + params.mods.join(' b-announcement__controls__item_') : '')
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<a class=\"pseudo-link b-announcement__controls__item" + __fest_attrs[0] + "\"");
							var name, value, __fest_iterator1;
							try {
								__fest_iterator1 = params.attrs || {};
							} catch (e) {
								__fest_iterator = {};
								__fest_log_error(e.message);
							}
							for (name in __fest_iterator1) {
								value = __fest_iterator1[name];
								try {
									__fest_select = (name)
								} catch (e) {
									__fest_select = "";
									__fest_log_error(e.message)
								}
								if (__fest_select !== "") {
									__fest_buf.push(" " + __fest_select + "=\"");
									try {
										__fest_select = (value)
									} catch (e) {
										__fest_select = "";
										__fest_log_error(e.message)
									}
									__fest_buf.push(__fest_select);
									__fest_buf.push("\"");
								}
							}
							__fest_buf.push(">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.text))
							} catch (e) {
								__fest_log_error(e.message + "18");
							}
							__fest_buf.push("</a>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-contact-informer"] = function (params) {
							var __fest_buf = [];
							try {
								var avatar_style = "background-image: url(\"" + params.avatar.src + "\");";
								var avatar_url = null; //params.avatar.url; // https://jira.mail.ru/browse/MAIL-14190?focusedCommentId=2114168&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-2114168
								var position = "";

								if (params.social) {
									Array.forEach(params.social, function (social) {
										if (social.type === "linkedin") {
											avatar_url = social.url;
											position = social.position;
										}
									});
								}
							} catch (e) {
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-contact-informer\"><div class=\"b-contact-informer__t\"><i class=\"b-contact-informer__cn b-contact-informer__cn_tl\"></i><i class=\"b-contact-informer__cn b-contact-informer__cn_tr\"></i><i class=\"b-contact-informer__cn b-contact-informer__cn_tc\"></i></div><div class=\"b-contact-informer__i\"><i class=\"b-contact-informer__sh b-contact-informer__sh_l\"></i><i class=\"b-contact-informer__sh b-contact-informer__sh_r\"></i><i class=\"b-contact-informer__cn b-contact-informer__cn_lc\"></i><i class=\"b-contact-informer__cn b-contact-informer__cn_rc\"></i><div class=\"b-contact-informer__content\"><div class=\"b-contact-informer__avatar__wrapper\">");
							try {
								__fest_if = avatar_url
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_attrs[0] = __fest_escapeHTML(avatar_url)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(avatar_style)
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a href=\"" + __fest_attrs[0] + "\" class=\"b-contact-informer__avatar\" style=\"" + __fest_attrs[1] + "\" target=\"_blank\"></a>");
							} else {
								try {
									__fest_attrs[0] = __fest_escapeHTML(avatar_style)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a class=\"b-contact-informer__avatar\" data-name=\"send\" style=\"" + __fest_attrs[0] + "\"></a>");
							}
							__fest_buf.push("</div><div class=\"b-contact-informer__social__wrapper\">");
							var i, item, __fest_to0, __fest_iterator0;
							try {
								__fest_iterator0 = params.social || [];
								__fest_to0 = __fest_iterator0.length;
							} catch (e) {
								__fest_iterator0 = [];
								__fest_to0 = 0;
								__fest_log_error(e.message);
							}
							for (i = 0; i < __fest_to0; i++) {
								item = __fest_iterator0[i];
								try {
									__fest_attrs[0] = __fest_escapeHTML(item.url)
								} catch (e) {
									__fest_attrs[0] = "";
									__fest_log_error(e.message);
								}
								try {
									__fest_attrs[1] = __fest_escapeHTML(item.type)
								} catch (e) {
									__fest_attrs[1] = "";
									__fest_log_error(e.message);
								}
								__fest_buf.push("<a href=\"" + __fest_attrs[0] + "\" class=\"b-contact-informer__social b-contact-informer__social_" + __fest_attrs[1] + "\" target=\"_blank\"></a>");
							}
							__fest_buf.push("</div><div class=\"b-contact-informer__wrapper\"><div class=\"b-contact-informer__name\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.name))
							} catch (e) {
								__fest_log_error(e.message + "50");
							}
							__fest_buf.push("</div><div class=\"b-contact-informer__email\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.email))
							} catch (e) {
								__fest_log_error(e.message + "51");
							}
							__fest_buf.push("</div><div class=\"b-contact-informer__job\">");
							try {
								__fest_buf.push(__fest_escapeHTML(position))
							} catch (e) {
								__fest_log_error(e.message + "52");
							}
							__fest_buf.push("</div></div><div class=\"b-contact-informer__actions\"><a class=\"b-contact-informer__actions__link\" data-name=\"send\"><i data-bem=\"ico\" class=\"ico ico_toolbar ico_toolbar_compose\"></i><span class=\"b-toolbar__btn__text b-toolbar__btn__text_pad\">");
							try {
								__fest_buf.push(__fest_escapeHTML(lang['b-contact-informer']['send']))
							} catch (e) {
								__fest_log_error(e.message + "56");
							}
							__fest_buf.push("</span></a>");
							try {
								__fest_if = params.addressbook
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<span class=\"b-contact-informer__actions__text\"><i data-bem=\"ico\" class=\"ico ico_toolbar ico_toolbar_ab-added\"></i><span class=\"b-toolbar__btn__text b-toolbar__btn__text_pad\">");
								try {
									__fest_buf.push(__fest_escapeHTML(lang['b-contact-informer']['added']))
								} catch (e) {
									__fest_log_error(e.message + "59");
								}
								__fest_buf.push("</span></span>");
							} else {
								__fest_buf.push("<a class=\"b-contact-informer__actions__link\" data-name=\"add\"><i data-bem=\"ico\" class=\"ico ico_toolbar ico_toolbar_ab-add\"></i><span class=\"b-toolbar__btn__text b-toolbar__btn__text_pad\">");
								try {
									__fest_buf.push(__fest_escapeHTML(lang['b-contact-informer']['add']))
								} catch (e) {
									__fest_log_error(e.message + "62");
								}
								__fest_buf.push("</span></a>");
							}
							__fest_buf.push("<a class=\"b-contact-informer__actions__link\" data-name=\"search\"><i data-bem=\"ico\" class=\"ico ico_toolbar ico_toolbar_search\"></i><span class=\"b-toolbar__btn__text b-toolbar__btn__text_pad\">");
							try {
								__fest_buf.push(__fest_escapeHTML(lang['b-contact-informer']['search']))
							} catch (e) {
								__fest_log_error(e.message + "65");
							}
							__fest_buf.push("</span></a></div></div></div><div class=\"b-contact-informer__b\"><i class=\"b-contact-informer__cn b-contact-informer__cn_bl\"></i><i class=\"b-contact-informer__cn b-contact-informer__cn_br\"></i></div></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-compose__sent"] = function (params) {
							var __fest_buf = [];
							try {// -*- coding: utf-8; indent-tabs-mode: nil; tab-width: 4; c-basic-offset: 4; -*-

								var lang = patron.toolkit.lang['b-letter']['b-sent'];

								Object.extend(params, {
									title: function () {
										var url = {
											message: function () {
												return params.message.link;
											},

											back: function () {
												var url = '/messages/inbox/';

												if (/reply|forward/.test(params.mode)) {
													url = '/message/' + params.message.id +
													'/?folder=' + params.folder.id;
												}

												return url;
											}
										};

										var text = lang.title[params.mode] || lang.title.inbox;

										return text.replace(/%(back|message)/g, function (text, match) {
											try {
												return url[match]();
											}
											catch (error) {
												ajs.log('b-compose__sent:title', error.message);
											}

											return '#';
										});
									}()
								});
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_if = params.IsMyCom
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("<div class=\"message-sent b-compose__sent\"><div class=\"b-compose__sent__body\"><div class=\"b-compose__sent__title\">");
								try {
									__fest_buf.push(params.title)
								} catch (e) {
									__fest_log_error(e.message + "12");
								}
								__fest_buf.push("</div><div class=\"b-compose__sent__info\">");
								var name, value, __fest_iterator0;
								try {
									__fest_iterator0 = params.headers || {};
								} catch (e) {
									__fest_iterator = {};
									__fest_log_error(e.message);
								}
								for (name in __fest_iterator0) {
									value = __fest_iterator0[name];
									try {
										__fest_if = value
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										__fest_buf.push("<div class=\"b-compose__sent__header\"><span class=\"b-compose__sent__header_name\">");
										try {
											__fest_buf.push(__fest_escapeHTML(lang.header[name]))
										} catch (e) {
											__fest_log_error(e.message + "20");
										}
										__fest_buf.push("</span>: <span class=\"b-compose__sent__header_value\">");
										try {
											__fest_buf.push(value)
										} catch (e) {
											__fest_log_error(e.message + "26");
										}
										__fest_buf.push("</span></div>");
									}
								}
								__fest_buf.push("</div></div><div class=\"b-compose__sent__footer\" data-mnemo=\"slots\"></div></div>");
							} else {
								__fest_buf.push("<div class=\"message-sent message-sent_IsSocialConnect\"><div class=\"message-sent__wrap\"><div class=\"message-sent__title\">");
								try {
									__fest_buf.push(params.title)
								} catch (e) {
									__fest_log_error(e.message + "46");
								}
								__fest_buf.push("</div></div><div class=\"message-sent__wrap\">");
								var name, value, __fest_iterator1;
								try {
									__fest_iterator1 = params.headers || {};
								} catch (e) {
									__fest_iterator = {};
									__fest_log_error(e.message);
								}
								for (name in __fest_iterator1) {
									value = __fest_iterator1[name];
									try {
										__fest_if = value
									} catch (e) {
										__fest_if = false;
										__fest_log_error(e.message);
									}
									if (__fest_if) {
										try {
											__fest_if = name === 'to' && (params.headers.cc || params.headers.bcc)
										} catch (e) {
											__fest_if = false;
											__fest_log_error(e.message);
										}
										if (__fest_if) {
											__fest_buf.push("<div style=\"padding-bottom: 8px;\">");
											try {
												__fest_buf.push(__fest_escapeHTML(lang.header[name]))
											} catch (e) {
												__fest_log_error(e.message + "57");
											}
											__fest_buf.push(": <span class=\"message-sent__info\">");
											try {
												__fest_buf.push(__fest_escapeHTML(value))
											} catch (e) {
												__fest_log_error(e.message + "57");
											}
											__fest_buf.push("</span></div>");
										} else {
											__fest_buf.push("<div>");
											try {
												__fest_buf.push(__fest_escapeHTML(lang.header[name]))
											} catch (e) {
												__fest_log_error(e.message + "62");
											}
											__fest_buf.push(": <span class=\"message-sent__info\">");
											try {
												__fest_buf.push(__fest_escapeHTML(value))
											} catch (e) {
												__fest_log_error(e.message + "62");
											}
											__fest_buf.push("</span></div>");
										}
									}
								}
								__fest_buf.push("<div id=\"message-sent__rb-main-container\" class=\"message-sent__rb-main-container\"></div></div><div class=\"message-sent__hr message-sent__hr_big\"></div><div class=\"message-sent__wrap\"><div class=\"message-sent__text\"><div id=\"message-sent__rb-center-container\" style=\"padding: 0 0 10px;\"></div></div></div><div class=\"message-sent__hr message-sent__hr_small\"></div><div class=\"message-sent__wrap\"><div class=\"message-sent__text\" style=\"margin-left: -0.5em;\"><div class=\"js-helper\"><div id=\"preload_banner_1\" class=\"message-sent__ads\"></div></div></div></div></div>");
							}
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-collector-button"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.href)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<a href=\"" + __fest_attrs[0] + "\" data-bem=\"btn\" data-name=\"collector\" class=\"btn b-collector-button\"><span class=\"b-collector-button__providers\"></span><i class=\"ico ico_folder_cross btn__icon b-collector-button__icon\"></i><span class=\"btn__text btn__text_pad b-collector-button__text\">");
							try {
								__fest_buf.push(__fest_escapeHTML(params.text))
							} catch (e) {
								__fest_log_error(e.message + "9");
							}
							__fest_buf.push("</span></a>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-userpic"] = function (params) {
							var __fest_buf = [];
							try {
								__fest_attrs[0] = __fest_escapeHTML(params.pic)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"b-userpic b-userpic_small\" style=\"" + __fest_attrs[0] + "\"></div>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["b-contact-label"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<span class=\"js-compose-label compose__labels__label\"><span class=\"compose__labels__label__text js-label-text\"></span><i class=\"icon icon_compose_label_close js-remove-label\"></i></span>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks.ico = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<i data-bem=\"ico\" class=\"ico");
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML('ico_' + params.mods.join(' ico_')))
								} catch (e) {
									__fest_log_error(e.message + "11");
								}
							}
							try {
								__fest_if = params.classes
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML(params.classes.join(' ')))
								} catch (e) {
									__fest_log_error(e.message + "16");
								}
							}
							__fest_buf.push("\"></i>");
							return __fest_buf.join("");
						};
					})(__fest_context);
					(function (__fest_context) {
						__fest_blocks["file-icon"] = function (params) {
							var __fest_buf = [];
							__fest_buf.push("<i data-bem=\"file-icon\" class=\"file-icon");
							try {
								__fest_if = params.mods
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" ");
								try {
									__fest_buf.push(__fest_escapeHTML('file-icon_' + params.mods.join(' file-icon_')))
								} catch (e) {
									__fest_log_error(e.message + "11");
								}
							}
							try {
								__fest_if = params.type
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" file-icon_type_");
								try {
									__fest_buf.push(__fest_escapeHTML(params.type))
								} catch (e) {
									__fest_log_error(e.message + "16");
								}
							}
							__fest_buf.push("\"></i>");
							return __fest_buf.join("");
						};
					})(__fest_context);
				})(__fest_context);
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-layer__features"] = function (params) {
					var __fest_buf = [];
					__fest_buf.push("<style>.b-features__h3 {\n\t\t\t\tmargin: -5px 0 5px -10px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\n\t\t\t.b-features__tabs {\n\t\t\t\tborder-bottom: 1px solid #ccc;\n\t\t\t}\n\n\t\t\t.b-features__tab {\n\t\t\t\tcolor: #03c;\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tborder-radius: 2px 2px 0 0;\n\t\t\t\tpadding: 10px 20px;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tmargin-bottom: -1px;\n\t\t\t\tmargin-left: 30px;\n\t\t\t}\n\t\t\t\t.b-features__tab_active,\n\t\t\t\t.b-features__tab_active a {\n\t\t\t\t\tcolor: #333;\n\t\t\t\t\tcursor: default;\n\t\t\t\t\tborder-bottom-color: transparent;\n\t\t\t\t}</style><div class=\"b-layer b-features\"><div class=\"b-layer__wrapper\"><div class=\"b-layer__container\"><div class=\"popup__box\"><div class=\"popup__head popup__head_wrap\">Бета-тестирование</div><div class=\"b-features__tabs\"><div data-name=\"switchTab\" data-tab=\"features\" class=\"b-features__tab\"><a href=\"#\" class=\"pseudo-link\">Возможности</a></div><div data-name=\"switchTab\" data-tab=\"feedback\" class=\"b-features__tab b-features__tab_active\"><a href=\"#\" class=\"pseudo-link\">Сообщить о проблеме</a></div></div>");
					try {
						var unique = {};
						var features = params.features;
						var disabledMenu = features.get('disabled-menu').data;
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_buf.push("<div style=\"margin: 20px 30px 0; width: 475px\"><div class=\"js-features\" style=\"display: none;\"><div style=\"min-height: 240px;\">");
					var idx, user, __fest_to0, __fest_iterator0;
					try {
						__fest_iterator0 = ['corp', 'tester'] || [];
						__fest_to0 = __fest_iterator0.length;
					} catch (e) {
						__fest_iterator0 = [];
						__fest_to0 = 0;
						__fest_log_error(e.message);
					}
					for (idx = 0; idx < __fest_to0; idx++) {
						user = __fest_iterator0[idx];
						try {
							__fest_if = features.has(user)
						} catch (e) {
							__fest_if = false;
							__fest_log_error(e.message);
						}
						if (__fest_if) {
							try {
								var menu = features.get(user + "-menu").data;
								var list = features.filter(function (feature, name) {
									var retVal = !unique[name] && (feature.menu && features.isAvailable(name) || Array.contains(menu, name)) && !Array.contains(disabledMenu, name);
									retVal && (unique[name] = true);
									return retVal;
								});
							} catch (e) {
								__fest_log_error(e.message);
							}
							try {
								__fest_if = list.length
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								try {
									__fest_if = idx === 0
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_buf.push("<div class=\"b-layer__features__h3\">Корпоративные:</div>");
								}
								__fest_select = "b-layer__features__list";
								__fest_params = {};
								try {
									__fest_params = {list: list}
								} catch (e) {
									__fest_log_error(e.message)
								}
								__fest_fn = __fest_blocks[__fest_select];
								if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
							}
						}
					}
					try {
						__fest_if = params.dev
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						__fest_buf.push("<div class=\"b-features__h3\">Эксперементальные</div>");
						__fest_select = "b-layer__features__list";
						__fest_params = {};
						try {
							__fest_params = {
								list: features.filter(function (feature, name) {
									var retVal = !unique[name] && feature.configurable && features.isAvailable(name);
									retVal && (unique[name] = true);
									return retVal;
								})
							}
						} catch (e) {
							__fest_log_error(e.message)
						}
						__fest_fn = __fest_blocks[__fest_select];
						if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					}
					try {
						__fest_if = params.dev && params.all
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						__fest_buf.push("<div class=\"b-features__h3\">Флаги</div>");
						__fest_select = "b-layer__features__list";
						__fest_params = {};
						try {
							__fest_params = {
								list: features.filter(function (feature, name) {
									return !unique[name] && !feature.hidden;
								}),
								configurable: true
							}
						} catch (e) {
							__fest_log_error(e.message)
						}
						__fest_fn = __fest_blocks[__fest_select];
						if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
						__fest_buf.push("<div><input name=\"newFlags\" type=\"text\"/><input data-name=\"addFlags\" value=\"добавить флаги\" type=\"button\"/>(через пробел)</div>");
					}
					__fest_buf.push("</div><div class=\"popup__controls\">");
					__fest_select = "btn";
					__fest_params = {};
					try {
						__fest_params = {name: "save", mods: ["main", "disabled"]}
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					__fest_select = "btn";
					__fest_params = {};
					try {
						__fest_params = {name: "cancel"}
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					__fest_buf.push("</div></div><div class=\"js-feedback\"><textarea class=\"form__field form__field_wide form__field_editor\" style=\"height: 250px;\"></textarea><div class=\"popup__controls\" style=\"text-decoration: none;\"><a data-name=\"exit\" style=\"float: right; margin-top: 5px;\" class=\"pseudo-link\">не хочу быть бетатестером</a>");
					__fest_select = "btn";
					__fest_params = {};
					try {
						__fest_params = {name: "send", mods: ["main", "disabled"]}
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					__fest_select = "btn";
					__fest_params = {};
					try {
						__fest_params = {name: "cancel"}
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					__fest_buf.push("</div></div></div></div></div></div><div class=\"b-layer__overlay\"></div></div>");
					return __fest_buf.join("");
				};
				__fest_blocks["b-layer__features__list"] = function (params) {
					var __fest_buf = [];
					__fest_buf.push("<div class=\"form__row\">");
					var i, feature, __fest_to1, __fest_iterator1;
					try {
						__fest_iterator1 = params.list || [];
						__fest_to1 = __fest_iterator1.length;
					} catch (e) {
						__fest_iterator1 = [];
						__fest_to1 = 0;
						__fest_log_error(e.message);
					}
					for (i = 0; i < __fest_to1; i++) {
						feature = __fest_iterator1[i];
						try {
							var id = Math.random().toString(36);
							var desc = Lang.str('feature.desc:' + feature.name);
						} catch (e) {
							__fest_log_error(e.message);
						}
						__fest_buf.push("<div class=\"js-row form__checkbox\">");
						try {
							__fest_attrs[0] = __fest_escapeHTML(id)
						} catch (e) {
							__fest_attrs[0] = "";
							__fest_log_error(e.message);
						}
						try {
							__fest_attrs[1] = __fest_escapeHTML(feature.name)
						} catch (e) {
							__fest_attrs[1] = "";
							__fest_log_error(e.message);
						}
						__fest_buf.push("<input id=\"" + __fest_attrs[0] + "\" class=\"form__checkbox__checkbox\" name=\"" + __fest_attrs[1] + "\" type=\"checkbox\"");
						try {
							__fest_if = feature.state
						} catch (e) {
							__fest_if = false;
							__fest_log_error(e.message);
						}
						if (__fest_if) {
							__fest_buf.push(" checked=\"checked\"");
						}
						try {
							__fest_if = !feature.configurable
						} catch (e) {
							__fest_if = false;
							__fest_log_error(e.message);
						}
						if (__fest_if) {
							__fest_buf.push(" disabled=\"disabled\"");
						}
						__fest_buf.push("/>");
						try {
							__fest_attrs[0] = __fest_escapeHTML(id)
						} catch (e) {
							__fest_attrs[0] = "";
							__fest_log_error(e.message);
						}
						__fest_buf.push("<label for=\"" + __fest_attrs[0] + "\" class=\"form__checkbox__label\">");
						try {
							__fest_buf.push(__fest_escapeHTML(feature.title || Lang.str('feature:' + feature.name) || feature.name))
						} catch (e) {
							__fest_log_error(e.message + "163");
						}
						__fest_buf.push("</label>");
						try {
							__fest_if = desc
						} catch (e) {
							__fest_if = false;
							__fest_log_error(e.message);
						}
						if (__fest_if) {
							__fest_buf.push("<div style=\"color: #666; padding-bottom: 10px\">");
							try {
								__fest_buf.push(__fest_escapeHTML(desc))
							} catch (e) {
								__fest_log_error(e.message + "168");
							}
							__fest_buf.push("</div>");
						}
						try {
							__fest_if = params.configurable
						} catch (e) {
							__fest_if = false;
							__fest_log_error(e.message);
						}
						if (__fest_if) {
							__fest_buf.push(" — ");
							try {
								__fest_attrs[0] = __fest_escapeHTML(feature.name)
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<a data-id=\"" + __fest_attrs[0] + "\" data-name=\"enableFlag\" class=\"pseudo-link\">toggle</a>");
						}
						__fest_buf.push("</div>");
					}
					__fest_buf.push("</div>");
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-informer_multiselect"] = function (params) {
					var __fest_buf = [];
					__fest_select = "b-informer";
					__fest_params = {};
					try {
						__fest_params = {

							mods: ['notice'], name: params.allSelected ?
								['letters.multiselect.selectall', String.num(params.letters, lang['b-nav_folders'].title.plural.letter, ' ')
								]
								: ['letters.multiselect.select', String.num(params.letters, lang['b-nav_folders'].title.plural.letter, ' ')
							]
							/*[ 'letters.multiselect.select'
							 , params.type == 'attach' ?
							 String.num(params.letters, lang['b-nav_folders'].title.plural.letter, ' ')
							 + ' ' + String.num(params.letters, lang['b-informer']['letters.multiselect.messages'][params.type])
							 : (typeof params.type == 'string' && params.type.indexOf('addr') > -1) ?
							 String.num(params.letters, lang['b-nav_folders'].title.plural.letter, ' ')
							 + ' ' + params.type.replace(/^addr/, '')
							 : String.num(params.letters, lang['b-nav_folders'].title.plural.letter, (lang['b-informer']['letters.multiselect.messages'][params.type] ?
							 ' ' + String.num(params.letters, lang['b-informer']['letters.multiselect.messages'][params.type])
							 : '') + ' ')
							 ]*/, buttons: [{name: params.allSelected ? 'deselectAllLetters' : 'selectAllLetters'}]

						}
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				var ctx = __fest_context;
				__fest_blocks["b-nav_folders"] = function (params) {
					var __fest_buf = [];
					try {/** @namespace params -- block params */
						/** @namespace patron.EnableCollectors */


// folders type
						var _types = {
							0: 'inbox',
							950: 'spam',
							500000: 'send',
							500001: 'drafts',
							500002: 'trash',
							500006: 'templates'
						};

						var NavFolder = function (folder) {
							this.id = (folder.id + '');
							this.parent = folder.get('parent');
							this.href = folder.getUrl();
							this.text = folder.get('name');
							this.total = folder.get('messages');
							this.unread = folder.get('unread');
							this.isSubfolder = (this.parent != -1);
							this.secure = folder.isSecure() ? (folder.isSecureOpen() ? 2 : 1) : 0;
							this.folding = folder.folding;
							this.isSpamOrTrash = folder.isTrash() || folder.isSpam();
							this.archive = folder.isArchive();
							this.processing = !!folder.get('processing');

							if (!this.isSubfolder) {
								this.level = 0;
							}

							var shortcut = folder.isDrafts() ? 'g,d' : folder.isSent() ? 'g,s' : null;
							if (!params.hasBackToSearch && params.useEscShortcut && folder.id == params.activeId) {
								shortcut = shortcut ? shortcut + '|esc' : 'esc';
							}

							this.shortcut = shortcut;
						};

						NavFolder.prototype.getLevel = function () {
							this.level = this.level !== undefined ? this.level : (this.isSubfolder ? ( foldersMap[this.parent].getLevel() + 1 ) : 0);
							return this.level;
						};

						NavFolder.prototype.getRootId = function () {
							this.rootId = !this.isSubfolder ? this.id : foldersMap[this.parent].getRootId();
							return this.rootId;
						};

						NavFolder.prototype._getSumOfDescendants = function (param) {
							var sum = 0;
							if (this.descendants) {
								Array.forEach(this.descendants, function (descendant) {
									sum += descendant[param];
								});
							}
							return sum;
						};

						NavFolder.prototype.getTotal = function () {
							this._total = this.total;
							this._totalWithChilds = this.totalWithChilds !== undefined ? this.totalWithChilds : this.total + this._getSumOfDescendants('total');
							if (this.folding === 'close') {
								return this._totalWithChilds;
							} else {
								return this._total;
							}
						};

						NavFolder.prototype.getUnread = function () {
							this._unread = this.unread;
							this._unreadWithChilds = this.unreadWithChilds !== undefined ? this.unreadWithChilds : this.unread + this._getSumOfDescendants('unread');
							if (this.folding === 'close') {
								return this._unreadWithChilds;
							} else {
								return this._unread;
							}
						};

						var _items = [],
// Mods for b-nav
							withFoldings,
							withIcons = true,
							foldersMap = {};

// Populate _items and folders map from params.items
						Array.forEach(params.items, function (item) {
							var _item = new NavFolder(item);
							_items.push(_item);
							foldersMap[item.id] = _item;

							if (_item.isSubfolder) {
								withFoldings = true;
							}
						});


// Sort array by level and original position
						Array.map(_items, function (item, index) {
							// Save initial folders order
							item._sourceIndex = index;
							return item;
						}).sort(function (a, b) {
							// Root first, then childs, grandchilds at last
							var levelA = foldersMap[a.id].getLevel(),
								levelB = foldersMap[b.id].getLevel(),
								result;

							return !( result = levelA - levelB ) ? a._sourceIndex - b._sourceIndex : result;
						});


// Create nested folders
						var nestedItems = [],
							level = 0;
						for (var i = 0, ii = _items.length; i < ii; i++) {
							var folder = _items[i];

							// Add root folders
							if (!folder.isSubfolder) {
								nestedItems.push(folder);
							} else {
								if (folder.getLevel() !== level) {
									level++;
								}

								// First level childs of Parent Folder
								var parentFolder = foldersMap[folder.parent];
								if (parentFolder.items === undefined) {
									parentFolder.items = [];
								}
								parentFolder.items.push(folder);

								// All descendants of Root Folder
								var rootFolder = foldersMap[folder.getRootId()];
								if (rootFolder.descendants === undefined) {
									rootFolder.descendants = [];
								}
								rootFolder.descendants.push(folder);
							}
						}


// Additional params to templates
						Array.forEach(_items, function (folder) {
							var title = lang['b-nav_folders']['title']['empty'];

							// If state is not defined by storage, then folder open by default
							if (!folder.folding) {
								folder.folding = 'open';
							}

							// But if no descendants then it doesn't matter.
							// Or Folding is disabled
							if (!( folder.descendants && folder.descendants.length ) || !patron.foldingIsActive) {
								folder.folding = null;
							}

							var messages = folder.getTotal(),
								unread = folder.getUnread();

							if (messages) {
								title = lang['b-nav_folders']['title']['all'] + ' ' + ajs.plural(messages, lang['b-nav_folders']['title']['plural']['letter'], ' ');
								if (unread) {
									title += ', ' + ajs.plural(unread, lang['b-nav_folders']['title']['plural']['unread'], ' ');
								}
							}

							var icontype;

							if (folder.secure == '1') {
								icontype = 'secret';
							} else if (folder.secure == '2') {
								icontype = 'secret_open';
							} else if (folder.archive) {
								icontype = 'archive';
							} else {
								icontype = ( _types[folder.id] || 'user' );
							}

							if (folder.folding) {
								folder.messageCounts = JSON.stringify({
									"total": folder._total,
									"unread": folder._unread,
									"totalWithChilds": folder._totalWithChilds,
									"unreadWithChilds": folder._unreadWithChilds
								});

								// Add title to folding
								folder.foldingTitle = lang['b-nav_folders']['folding-title'][folder.folding === 'open' ? 'close' : 'open'];
							}

							ajs.extend(folder, {
								icon: 'ico_folder_' + icontype,
								total: messages,
								unread: !folder.isSpamOrTrash && (!folder.archive || !params.hideArchiveFolderCounter) && unread,
								title: title,
								clean: folder.isSpamOrTrash
							});
						});

						if (patron.ShowDeletedFolder) {
							// MAIL-26437
							nestedItems.push({
								text: lang['b-nav_folders']['deleted'],
								icon: 'ico_folder_trash',
								href: '/messages/folder/500008',
								withoutHistory: true
							});

						}

						nestedItems.push(
							!patron.IsMyCom && {
								icon: 'ico_folder_mrim',
								href: '/agent/archive',
								text: lang['b-nav_folders']['mrim'],
								active: patron.isMRIMPage(),
								withoutHistory: true
							}, {
								text: lang['b-nav_folders']['settings'],
								href: '/settings/folders?from=leftcol',
								type: 'setting',
								withoutHistory: true
							}
						);


						if (patron.ShowCollectorButton) {
							nestedItems.push(
								{
									text: lang['b-nav_folders']['add_collector'],
									href: '/settings/collector',
									block: 'b-collector-button',
									withoutHistory: true
								}
							);
						}

						nestedItems.push(
							'hr', {
								icon: 'ico_folder_unread',
								href: '/search/?q_read=2&q_folder=all' + (patron.threads ? '&q_threads=1' : ''),
								text: lang['b-nav_folders']['unread'],
								mnemo: 'unread'
							}, {
								icon: 'ico_folder_important',
								href: '/search/?q_flag=2&q_folder=all' + (patron.threads ? '&q_threads=1' : ''),
								text: lang['b-nav_folders']['important'],
								mnemo: 'important',
								shortcut: 'g,l'
							}
						);


						/** @namespace patron.ShowSeptimaWriteReviewButton */
						if (patron.ShowSeptimaWriteReviewButton) {
							nestedItems.push(
								'hr', {
									icon: 'ico_folder_favorite',
									href: 'http://help.mail.ru/mail-feedback/new_interface',
									text: lang['b-nav_folders']['feedback'],
									withoutHistory: true
								});
						}


						if (patron.EnableCollectors) {
							nestedItems.push({
								text: lang['b-nav_folders']['add_mailbox'],
								href: '/settings/folders',
								type: 'option',
								withoutHistory: true
							});
						}


						/** @namespace patron.ShowSeptimaDisableSwitcher */
						if (patron.ShowSeptimaDisableSwitcher) {
							nestedItems.push({
								icon: 'ico_folder_switcher-back',
								text: lang['b-nav_folders']['disable_new_design'],
								name: 'toogle-design',
								href: '#',
								withoutHistory: true
							});
						}


						var _params = {
							mods: ['folders'],
							mnemo: 'nav-folders',
							hoverId: params.hoverId,
							activeId: params.activeId,
							items: nestedItems
						};

// Set b-nav mode, depending on items properties
						if (withFoldings && patron.foldingIsActive && withIcons) {
							_params.mods.push('foldings-and-icons');
						} else if (withFoldings && patron.foldingIsActive) {
							_params.mods.push('foldings');
						} else if (withIcons) {
							_params.mods.push('icons');
						}
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-nav";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-nav_search"] = function (params) {
					var __fest_buf = [];
					try {
						var _lang = lang['b-nav_search'];
						var _$GET = params.$GET;
						var _dates = params.dates;

						var _types = {
							0: 'inbox', 950: 'spam', 500000: 'send', 500001: 'drafts', 500002: 'trash'
						};

						var _pads = {},
							_additionalParams = (_$GET.q_trash ? '&q_trash=1' : '') + (_$GET.q_threads ? '&q_threads=1' : '')
							;


						Array.forEach(patron.Folders.getAll(), function (folder) {
							_pads[folder.Id] = folder.isSubfolder();
						});

						var items = [{
							text: _lang['back'],
							href: patron.getPageURL('msglist', {folder: 'inbox'}),
							icon: 'ico_folder_inbox'
						}];

						if (params.SearchPerson) {
							items.push(
								'hr', {
									text: _lang['correspondence'],
									href: !_$GET.search_persons && ('/search/?' + params.SearchPersonBothPrefix + _additionalParams)
								}, {
									text: _lang['q_form'].replace('{0}', params.SearchPerson),
									href: !_$GET.q_from && ('/search/?' + params.SearchPersonFromPrefix + _additionalParams)
								}, {
									text: _lang['q_to'].replace('{0}', params.SearchPerson),
									href: !_$GET.q_to && ('/search/?' + params.SearchPersonToPrefix + _additionalParams)
								}
							);
						}

						items.push('hr');

// Folders group
						items.push({
							group: {
								name: _lang['all_folders'],
								href: _$GET.q_folder != null && _$GET.q_folder != 'all' && ('/search/?' + params.SearchFoldersResetSuffix + _additionalParams),
								active: (_$GET.q_folder == null || _$GET.q_folder == 'all')
							}, items: Array.map(params.SearchFolder, function (folder) {
								return {
									id: folder.id,
									uglyshift: _pads[folder.id] ? true : false,
									text: ajs.Html.unescape(folder.Name),
									href: '/search/?' + folder.UrlSuffix + _additionalParams,
									active: folder.Selected,
									icon: 'ico_folder_' + (_types[folder.id] || 'user'),
									found: folder.Found
								};
							})

						});


// dates
						items.push('hr');

						var dates = [];
						items.push({
							group: {
								name: _lang['all_dates'],
								href: _dates.SearchPeriodsResetSuffix && ('/search/?' + _dates.SearchPeriodsResetSuffix + _additionalParams),
								active: !_dates.SearchPeriodsResetSuffix
							}, items: dates
						});

						Array.forEach(['Today', 'Yesterday', 'Week', 'Month'], function (type) {
							if (_dates['Search' + type + 'Found']) {
								dates.push({
									text: _lang[type.toLowerCase()],
									href: !_dates['Search' + type + 'Selected'] && '/search/?' + (_dates['Search' + type + 'Suffix'] + _additionalParams),
									found: _dates['Search' + type + 'Found'],
									active: _dates['Search' + type + 'Selected'],
									icon: 'ico_folder_empty'
								});
							}
						});


						Array.forEach(_dates.SearchMonths, function (res) {
							dates.push({
								text: res.Name,
								href: !res.Selected && ('/search/?' + res.Suffix + _additionalParams),
								found: res.Found,
								active: res.Selected,
								icon: 'ico_folder_empty'
							});
						});

						Array.forEach(_dates.SearchYear, function (res) {
							dates.push({
								text: _lang['year'].replace('{0}', res.Year),
								href: !res.Selected && ('/search/?' + res.Suffix + _additionalParams),
								found: res.Found,
								active: res.Selected,
								icon: 'ico_folder_empty'
							});
						});

						items.push('hr');

						items.push({
							group: {
								name: _lang['show_only'], mods: 'search'
							}, items: [
								{
									type: 'checkbox',
									text: _lang['only_unread'],
									checked: _$GET.q_read == 2,
									href: '/search/?' + jsHistory.buildParams(_$GET.q_read != 2 && {q_read: 2}, ['q_read', 'page']),
									name: 'filter-unread'
								}, {
									type: 'checkbox',
									text: _lang['only_flag'],
									checked: _$GET.q_flag == 2,
									href: '/search/?' + jsHistory.buildParams(_$GET.q_flag != 2 && {q_flag: 2}, ['q_flag', 'page']),
									name: 'filter-flagged'
								}, {
									type: 'checkbox',
									text: _lang['only_attach'],
									checked: _$GET.q_attach == 1,
									href: '/search/?' + jsHistory.buildParams(_$GET.q_attach != 1 && {q_attach: 1}, ['q_attach', 'page']),
									name: 'filter-attach'
								}
							]
						});

						var _params = {
							mods: ['search', 'icons'],
							mnemo: 'search-filters',
							hoverId: params.hoverId,
							activeId: params.activeId,
							items: items
						};
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-nav";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-nav_fileSearch"] = function (params) {
					var __fest_buf = [];
					try {
						var _lang = lang['b-nav_fileSearch'];
						var _$GET = params.$GET;
						var query;

						if (_$GET.q_query) {
							query = ajs.Html.escape(_$GET.q_query);
						}

						var _types = {
							0: 'inbox', 950: 'spam', 500000: 'send', 500001: 'drafts', 500002: 'trash'
						};

						var _mailboxFolders = ajs.filter(params.items, function (folder) {
							return !(folder.isSpam() || folder.isDrafts() || folder.isTemplates() || folder.isTrash());
						});

						var cntType = parseInt(_$GET.content_type_id, 10);
						cntType = isNaN(cntType) ? -1 : cntType;
						var folderId = Math.max(_$GET.folder_id | 0, -1);

						var _geItemByContentType = function (name, type) {
							var item = {text: _lang[name], active: cntType == type, icon: 'ico_datalist_type_' + name};

							if (!item.active) {
								item.href = ('/filesearch?folder_id=' + folderId + '&content_type_id=' + type + (_$GET.only_hidden ? '&only_hidden=1' : '') + (query ? '&q_query=' + query : ''));
							}

							return item;
						};

						var _items = [
							_geItemByContentType('photo', 1), _geItemByContentType('docs', 4), _geItemByContentType('music', 2), _geItemByContentType('video', 3), _geItemByContentType('other', 0), _geItemByContentType('all_types', -1), 'hr'
						];


						var NavFolder = function (folder) {
							this.id = folder.id;
							this.parent = folder.get('parent');
							this.href = '/filesearch?folder_id=' + folder.id + '&content_type_id=' + cntType + (query ? '&q_query=' + query : '');
							this.text = folder.get('name');
							this.isSubfolder = (this.parent != -1);

							if (!this.isSubfolder) {
								this.level = 0;
							}
						};

						NavFolder.prototype.getLevel = function () {
							this.level = this.level !== undefined ? this.level : (this.isSubfolder ? ( foldersMap[this.parent].getLevel() + 1 ) : 0);
							return this.level;
						};

						NavFolder.prototype.getRootId = function () {
							this.rootId = !this.isSubfolder ? this.id : foldersMap[this.parent].getRootId();
							return this.rootId;
						};

						NavFolder.prototype._getSumOfDescendants = function (param) {
							var sum = 0;
							if (this.descendants) {
								Array.forEach(this.descendants, function (descendant) {
									sum += descendant[param];
								});
							}
							return sum;
						};

						var withFoldings,
							foldersMap = {};

						var mailFolders = Array.map(_mailboxFolders, function (folder) {
							var _folder = new NavFolder(folder);
							_folder.icon = 'ico_folder_' + (_types[folder.id] || 'user');
							_folder.active = '' + folder.id === '' + folderId;

							if (folder.isSubfolder()) {
								withFoldings = true;
							}

							foldersMap[folder.id] = _folder;

							return _folder;
						});

						Array.map(mailFolders, function (item, index) {
							// Save initial folders order
							item._sourceIndex = index;
							return item;
						}).sort(function (a, b) {
							// Root first, then childs, grandchilds at last
							var levelA = foldersMap[a.id].getLevel(),
								levelB = foldersMap[b.id].getLevel(),
								result;

							return !( result = levelA - levelB ) ? a._sourceIndex - b._sourceIndex : result;
						});

// Create nested folders
						var nestedItems = [],
							level = 0;
						for (var i = 0, ii = mailFolders.length; i < ii; i++) {
							var folder = mailFolders[i];

							// Add root folders
							if (!folder.isSubfolder) {
								nestedItems.push(folder);
							} else {
								if (folder.getLevel() !== level) {
									level++;
								}

								// First level childs of Parent Folder
								var parentFolder = foldersMap[folder.parent];
								if (parentFolder.items === undefined) {
									parentFolder.items = [];
								}
								parentFolder.items.push(folder);

								// All descendants of Root Folder
								var rootFolder = foldersMap[folder.getRootId()];
								if (rootFolder.descendants === undefined) {
									rootFolder.descendants = [];
								}
								rootFolder.descendants.push(folder);
							}
						}

// Additional params to templates
						Array.forEach(mailFolders, function (folder) {

							// If state is not defined by storage, then folder open by default
							if (!folder.folding) {
								folder.folding = 'open';
							}

							// But if no descendants then it doesn't matter.
							// Or Folding is disabled
							if (!( folder.descendants && folder.descendants.length ) || !patron.foldingIsActive) {
								folder.folding = null;
							}

							var icontype;

							if (folder.secure == '1') {
								icontype = 'secret';
							} else if (folder.secure == '2') {
								icontype = 'secret_open';
							} else {
								icontype = ( _types[folder.id] || 'user' );
							}

							if (folder.folding) {
								// Add title to folding
								folder.foldingTitle = lang['b-nav_folders']['folding-title'][folder.folding === 'open' ? 'close' : 'open'];
							}

							ajs.extend(folder, {
								icon: 'ico_folder_' + icontype
							});
						});


						_items = _items.concat(nestedItems, [{
								text: _lang['all_folders'],
								href: '/filesearch?folder_id=-1&content_type_id=' + cntType + (query ? '&q_query=' + query : ''),
								active: !_$GET.only_hidden && (folderId == -1) // MAIL-19267
								//, active: folderId == -1
							}, 'hr', {
								text: _lang['hidden'],
								href: '/filesearch?folder_id=-1&content_type_id=' + cntType + '&only_hidden=1' + (query ? '&q_query=' + query : ''),
								active: _$GET.only_hidden == 1
							}]
						);

						var _params = {
							mods: ['fileSearch', 'icons'],
							hoverId: params.hoverId,
							activeId: params.activeId,
							items: _items
						};

						if (withFoldings && patron.foldingIsActive) {
							_params.mods.push('foldings-and-icons');
						}
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-nav";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-nav_addressbook"] = function (params) {
					var __fest_buf = [];
					try {
						var activeId;

						Array.forEach(params.menu[0].items, function (label) {
							if (label.selected) {
								activeId = label.data_id;
							}
						})

						var subParams = $.extend({}, params, {
							mods: ['addressbook'],
							activeId: activeId,
							items: Array.map(params.menu[0].items, function (label) {
								return {
									id: label.data_id,
									pad: false,
									text: label.text,
									title: label.title,
									href: label.href,
									icon: label.icon,
									total: label.count,
									withoutHistory: true
								}
							})
						});
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-nav";
					__fest_params = {};
					try {
						__fest_params = subParams
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_agent"] = function (params) {
					var __fest_buf = [];
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = {
							mnemo: 'toolbar-agent', items: [
								{
									group: 'right', mods: ['right'], items: [
									params.hasClearAll && {
										block: 'b-toolbar__btn', name: 'clearMRIM', icon: 'toolbar_remove'
									}, {
										block: 'b-toolbar__inp',
										name: 'text',
										value: params.searchText,
										placeholder: 'search.onagent',
										classes: ['b-toolbar__inp_agent js-sticky-el js-sticky-el-hidden']
									}, {
										block: 'b-toolbar__btn',
										name: 'search',
										icon: 'toolbar_search',
										classes: ['js-sticky-el js-sticky-el-hidden']
									}
								]
								}, params.hasBack && {
									block: 'b-toolbar__btn', name: 'back', icon: 'toolbar_back'
								}
							]
						}
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_folders"] = function (params) {
					var __fest_buf = [];
					try {
						/** @namespace params -- block params */
						var _getParams = function () {
							return {
								mnemo: 'toolbar-folders', items: [
									{
										group: 'right', mods: ['right'], items: _right_items
									}, {
										group: 'left', mods: ['left'], items: [
											{
												block: 'b-toolbar__btn',
												name: 'compose',
												icon: 'toolbar_compose',
												href: '/compose/?' + Date.now(),
												shortcut: 'n',
												mods: params.withFoldings ? ['with-foldings'] : undefined
												//, mods:		['adaptive']
											}
										]
									}

									/*
									 , {
									 block:	'b-toolbar__btn'
									 , name:		'scrollToTop'
									 , mods:		['hidden']
									 , classes:  ['js-sticky-el js-sticky-el-hidden']
									 }
									 */
								]
							};
						}

						var _right_items = [];

						if (0 && params.hasRefresh) {
							_right_items.push({
								block: 'b-toolbar__btn',
								name: 'refresh',
								mods: ['refresh'],
								icon: 'toolbar_refresh',
								text: ''
							});
						}

						if (params.hasBackToSearch) {
							_right_items.push({
								block: 'b-toolbar__btn',
								name: 'back',
								mods: ['back'],
								icon: 'toolbar_back',
								text: '',
								title: lang['btn']['titles']['back_to_search'],
								shortcut: 'esc'
							});
						}
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = _getParams()
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_letters"] = function (params) {
					var __fest_buf = [];
					try {
						/** @namespace params -- block params */

						var _sortBy = params.sortby || GET.sortby || patron.messagesSort;
						var _isSpamFolder = params.isSpamFolder;
						var _isSentOrDraftsFolder = params.isSentOrDraftsFolder;
						var _isArchiveOrDraftsFolder = params.isArchiveOrDraftsFolder;

						var _sortItems = [
							{name: 'date_desc', sort: 'D'}, {name: 'date_asc', sort: 'd'}, {
								name: '{type}_asc',
								sort: 'f'
							}, {name: '{type}_desc', sort: 'F'}, {name: 'subj_asc', sort: 's'}, {
								name: 'subj_desc',
								sort: 'S'
							}
						];

						Array.forEach(_sortItems, function (item) {
							item.name = 'sort_' + item.name.replace(/\{type\}/g, _isSentOrDraftsFolder ? 'to' : 'from');
							item.disabled = _sortBy == item.sort || item.sort == 'D' && !_sortBy;
						});

						if (params.canSort) {
							_sortItems.unshift('hr');
						} else {
							_sortItems = [];
						}

						var _threadsSwitcher = [];

						if (params.hasThreadsSwitcher && (patron.threads || patron.ThreadsSwitcher)) {
							_threadsSwitcher.push(
								{name: 'threads-toggle', text: patron.threads ? 'threads-off' : 'threads-on'}, 'hr'
							);
						}


						var _params = {
							mnemo: 'toolbar-letters', mods: ['adaptive'], items: [
								// Right group
								{
									group: 'right', mods: ['right'], items: [
									{
										block: 'b-paginator',
										params: ajs.extend(params.paginator, {
											shortcut: {
												prev: 'ctrl+left|command+left',
												next: 'ctrl+right|command+right'
											}
										}),
										mods: ['first']
									}, {
										block: 'b-dropdown', group: 'view', mods: ['right'], items: [].concat(
											_threadsSwitcher,
											[
												{name: 'compact', disabled: params.isCompactView},
												{name: 'detail', disabled: !params.isCompactView}
											],
											_sortItems
										)
									}
								]
								},

								// Left group
								{
									group: 'left', items: [
									// SelectAll: dropdown
									{
										block: 'b-dropdown', group: 'selectAll', mods: ['selectAll'], ctrl: {
										block: 'cbx',
										name: 'toggle',
										mods: ['transparent', (params.hasSelected && 'checked' + (!params.hasSelectedAll ? '_mixed' : ''))],
										shortcut: 'ctrl+a|command+a'
									}, items: []
									}, {
										block: 'b-toolbar__btn', items: [
											// Remove: button
											{
												block: 'b-toolbar__btn', icon: 'toolbar_remove', mods: [
												(!params.hasArchive || _isArchiveOrDraftsFolder) && 'grouped_last',
												params.canDisabled && !params.hasSelected && ['disabled'],
												'adaptive',
												'adaptive_msgl-high'
											], name: 'remove', shortcut: 'del|command+backspace'
											},

											// Archive: button
											{
												block: 'b-toolbar__btn', icon: 'toolbar_archive', mods: [
												(!params.hasArchive || _isArchiveOrDraftsFolder) && 'excluded',
												'grouped_last',
												'adaptive',
												'adaptive_msgl-high',
												'archive',
												params.canDisabled && !params.hasSelected && 'disabled'
											], name: 'archive', shortcut: 'e', rb: 'show'
											},


											{
												block: 'b-dropdown',
												group: 'remove-more',
												ctrl: {shortcut: "e: 'archive' "},
												mods: [
													(!params.hasArchive || _isArchiveOrDraftsFolder) && 'excluded',
													'grouped',
													'grouped_last',
													'grouped_last_no-text',
													'right',
													'adaptive',
													'adaptive_rdm-mid',
													params.hasArchive && !_isArchiveOrDraftsFolder && 'archive',
													params.canDisabled && !params.hasSelected && 'disabled'
												],
												name: 'remove',
												items: []
											}
										]
									}

									// Spam: button
									, {
										block: 'b-toolbar__btn',
										mods: [
											params.hasSpamMore && 'grouped', params.hasSpamMore && 'grouped_first', params.canDisabled && !params.hasSelected && 'disabled', 'adaptive', 'adaptive_msgl-high'
										],
										icon: 'toolbar_' + (_isSpamFolder ? 'noSpam' : 'spam'),
										name: (_isSpamFolder ? 'noSpam' : (params.hasSuperSpam ? 'superSpam' : 'spam')),
										shortcut: 'j'
									}, {
										block: 'b-dropdown',
										group: 'spam-more',
										mods: [
											!params.hasSpamMore && 'hidden', 'grouped', 'grouped_last', 'grouped_last_no-text', 'right', 'adaptive', 'adaptive_rdm-mid'
										],
										name: (_isSpamFolder ? 'noSpam' : (params.hasSuperSpam ? 'superSpam' : 'spam')),
										items: []
									}

									// MoveTo & More dropdown
									, {
										block: 'b-toolbar__btn', items: [
											// MoveTo: dropdown
											{
												block: 'b-dropdown',
												group: 'moveTo',
												mods: ['moveTo', params.canDisabled && !params.hasSelected && 'disabled', 'adaptive', 'adaptive_msgl-high'],
												ctrl: {icon: 'toolbar_move', shortcut: "v: 'true' "},
												items: []
											}

											// More: dropdown
											, {
												block: 'b-dropdown',
												group: 'letters-more',
												mods: ['more', 'adaptive', 'right', params.canDisabled && !params.hasSelected && 'disabled'],
												ctrl: {
													icon: 'toolbar_more',
													shortcut: ".: 'true', q: 'read', u: 'unread', i: 'flag_toggle', shift+c: 'addressbook', shift+l:'create_filter', shift+s: 'search' "
												},
												items: []
											}

										]
									}
//				// MoveTo: dropdown
//				, {
//					  block: 'b-dropdown'
//					, group: 'moveTo'
//					, mods:  ['moveTo', params.canDisabled && !params.hasSelected && 'disabled', 'adaptive', 'adaptive_msgl-mid']
//					, ctrl:  { icon: 'toolbar_move' }
//					, items: []
//				}
//
//				// MarkAs: dropdown
//				, {
//					  block: 'b-dropdown'
//					, group: 'markAs'
//					, mods:  ['markAs', params.canDisabled && !params.hasSelected && 'disabled', 'adaptive', 'adaptive_msgl-mid']
//					, ctrl:  { icon: 'toolbar_mark' }
//					, items: []
//				}
//
//				// More: dropdown
//				, {
//					  block: 'b-dropdown'
//					, group: 'letters-more'
//					, mods:  ['more', params.canDisabled && !params.hasSelected && 'disabled']
//					, ctrl:	 { icon: 'toolbar_more' }
//					, items: []
//				}
								]
								}
							]
						};
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_letters_bottom"] = function (params) {
					var __fest_buf = [];
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = {
							mnemo: 'toolbar-letters_bottom', items: [
								// Right group
								{
									group: 'right', mods: ['right'], items: [
									{
										block: 'b-paginator', params: params.paginator
									}
								]
								}
							]
						}
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_letter"] = function (params) {
					var __fest_buf = [];
					try {
						/** @namespace params -- block params */

						var _isDisabled = params.disabled || !params.editable;
						var _isDisabledMore = _isDisabled && params.editable;
						/*Disable "More" dropdown*/
						var _isSpamFolder = params.folder && params.folder.isSpam();
						var _isArchiveFolder = params.folder && params.folder.isArchive();
						var _left_items = [];


						if (params.hasPrevNext) {
							_left_items.push({
								block: 'b-toolbar__btn', items: [
									{
										mods: !_isDisabled && params.hasPrev ? null : ['disabled'],
										name: 'letter_prev',
										icon: 'toolbar_arrow ico_toolbar_arrow_up',
										shortcut: 'ctrl+up|ctrl+j'
									},
									{
										mods: !_isDisabled && params.hasNext ? null : ['disabled'],
										name: 'letter_next',
										icon: 'toolbar_arrow ico_toolbar_arrow_down',
										shortcut: 'ctrl+down|ctrl+k'
									}
								]
							});
						}


						var _removeSpamBtn = [

							{
								block: 'b-toolbar__btn', items: [
								// Remove: button
								{
									block: 'b-toolbar__btn', icon: 'toolbar_remove', mods: [
									(!params.hasArchive || _isArchiveFolder) && 'grouped_last',
									'adaptive',
									'adaptive_rdm-mid',
									_isDisabled && 'disabled'
								], name: 'remove', shortcut: 'del|command+backspace'
								},

								// Archive: button
								{
									block: 'b-toolbar__btn', icon: 'toolbar_archive', mods: [
									(!params.hasArchive || _isArchiveFolder) && 'excluded',
									'grouped_last',
									'adaptive',
									'adaptive_rdm-mid',
									'archive',
									_isDisabled && 'disabled'
								], name: 'archive', shortcut: 'e', rb: 'show'
								},

								{
									block: 'b-dropdown',
									group: 'remove-more',
									ctrl: {shortcut: "e: 'archive' "},
									mods: [
										(!params.hasArchive || _isArchiveFolder) && 'excluded',
										'grouped',
										'grouped_last',
										'grouped_last_no-text',
										'right',
										'adaptive',
										'adaptive_rdm-mid',
										params.hasArchive && !_isArchiveFolder && 'archive',
										_isDisabled && 'disabled'
									],
									items: []
								}
							]
							},

							{
								block: 'b-toolbar__btn', items: [
								// Spam: button
								{
									block: 'b-toolbar__btn',
									icon: 'toolbar_' + (_isSpamFolder ? 'noSpam' : 'spam'),
									mods: [
										params.hasSpamMore && 'grouped',
										params.hasSpamMore && 'grouped_first',
										!params.hasSpamMore && 'grouped_last',
										'adaptive',
										'adaptive_rdm-mid',
										_isDisabled && 'disabled'
									],
									name: (_isSpamFolder ? 'noSpam' : (params.hasSuperSpam ? 'superSpam' : 'spam')),
									shortcut: 'j'
								},

								// Unsubscribe: button
								{
									block: 'b-toolbar__btn', icon: 'toolbar_unsubscribe', mods: [
									!params.hasUnsubscribe && 'excluded',
									'grouped',
									!params.hasSuperSpamButton && 'grouped_last',
									'adaptive',
									'adaptive_rdm-mid',
									'unsubscribe',
									_isDisabled && 'disabled'
								], name: 'unsubscribe'
								},

								{
									block: 'b-dropdown',
									group: 'spam-more',
									mods: [
										!params.hasSpamMore && 'excluded',
										'grouped',
										'grouped_last',
										'grouped_last_no-text',
										'right',
										'adaptive',
										'adaptive_rdm-mid',
										!params.hasSuperSpamButton && params.hasUnsubscribe && 'unsubscribe',
										_isDisabled && 'disabled'
									],
									name: (_isSpamFolder ? 'noSpam' : (params.hasSuperSpam ? 'superSpam' : 'spam')),
									items: []
								}

							]
							}

						];


// Compose buttons
						var _composeBtn = {
							block: 'b-toolbar__btn', items: [
								// Reply: button
								{
									name: 'reply',
									icon: 'toolbar_reply',
									mods: ['adaptive', 'adaptive_rdm-mid', _isDisabled && 'disabled'],
									shortcut: 'r'
								}

								// ReplyAll: button
								, params.canReplyAll && {
									name: 'replyAll',
									icon: 'toolbar_replyAll',
									mods: ['adaptive', 'adaptive_rdm-mid', _isDisabled && 'disabled'],
									shortcut: 'shift+r'
								}

								// Forward: button
								, {
									name: 'forward',
									icon: 'toolbar_forward',
									mods: ['adaptive', 'adaptive_rdm-mid', _isDisabled && 'disabled'],
									shortcut: 'f'
								}
							]
						};


						var _params = {
							mnemo: 'toolbar-letter', mods: ['adaptive'], items: [
								// Right group
								{
									group: 'right', mods: ['right'], items: [
									// Print & translate buttons
									{
										block: 'b-toolbar__btn', items: [
										// Print: button
										{
											block: 'b-toolbar__btn',
											name: 'print',
											icon: 'toolbar_print',
											shortcut: 'shift+p'
										}

										// Translate: button
										, {
											block: 'b-toolbar__btn',
											name: 'translate',
											icon: ( patron.IsMyCom ) ? 'toolbar_translate_en' : 'toolbar_translate'
										}

									]
									}
								]
								},

								// Left group
								{
									group: 'left', items: _left_items.concat(
									_composeBtn,
									_removeSpamBtn,
									[
										// MoveTo & More dropdown
										{
											block: 'b-toolbar__btn', items: [
											// MoveTo: dropdown
											{
												block: 'b-dropdown',
												ctrl: {icon: 'toolbar_move', shortcut: "v: 'true' "},
												group: 'moveTo',
												mods: ['moveTo', 'adaptive', _isDisabled && 'disabled'],
												items: []
											}

											// MarkAs: dropdown
											//					, {
											//						  block: 'b-dropdown'
											//						, ctrl:  { icon: 'toolbar_mark' }
											//						, group: 'markAs'
											//						, mods:  ['markAs', 'adaptive', 'adaptive_rdm-low', _isDisabled && 'disabled']
											//						, items: []
											//					}
											// More: dropdown
											, {
												block: 'b-dropdown',
												group: 'letter-more',
												ctrl: {
													icon: 'toolbar_more',
													shortcut: ".: 'true', q: 'read', u: 'unread', i: 'flag_toggle', shift+c: 'addressbook', shift+l:'create_filter', shift+s: 'search'"
												},
												mods: ['more', 'adaptive', 'right', _isDisabledMore && 'disabled'],
												items: []
											}

										]
										}
									]
								)
								}
							]
						};
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					try {
						__fest_if = patron.TabletMessagesChangeButtonsOn
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						__fest_select = "b-toolbar";
						__fest_params = {};
						try {
							__fest_params = {
								mods: ['touch-btns'], items: [{
									block: 'btn', items: [
										{
											mods: !_isDisabled && _prevId ? ['touch'] : ['disabled', 'touch'],
											name: 'letter_prev',
											icon: 'toolbar_arrow ico_toolbar_arrow_up'
										},
										{
											mods: !_isDisabled && _nextId ? ['touch'] : ['disabled', 'touch'],
											name: 'letter_next',
											icon: 'toolbar_arrow ico_toolbar_arrow_down'
										}
									]
								}]
							}
						} catch (e) {
							__fest_log_error(e.message)
						}
						__fest_fn = __fest_blocks[__fest_select];
						if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					}
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_compose"] = function (params) {
					var __fest_buf = [];
					try {
						/** @namespace params -- block params */

						var _hasSaveTemplates = params.templatesEnabled && (params.isNewMessage || params.isNewTemplate);
						var _isNewTemplate = _hasSaveTemplates && params.isNewTemplate;

						var _params = {
							mnemo: 'toolbar-compose', items: [
								{
									group: 'right',
									mods: ['right'],
									items: (patron.MrimDisabled || !params.templatesEnabled) ? [] : [
										{
											block: 'b-dropdown', group: 'templates', mods: ['right'], items: []
										}
									]
								},

								{
									group: 'left', items: patron.MrimDisabled ? [] : [
									{
										block: 'b-toolbar__btn',
										name: 'send',
										shortcut: 'ctrl+enter|command+enter',
										mods: [
											params.disabled && params.disabled.send && 'disabled'
										]
									}, {
										block: 'b-toolbar__btn', items: [

											// save draft: button
											{
												block: 'b-toolbar__btn',
												name: 'saveDraft',
												shortcut: 'ctrl+s|command+s',
												mods: [
													_isNewTemplate && 'excluded',
													!_hasSaveTemplates && 'grouped_last',
													params.disabled && params.disabled.draft && 'disabled'
												]
											},

											// save template: button
											{
												block: 'b-toolbar__btn', name: 'saveTemplate', mods: [
												!_isNewTemplate && 'excluded',
												'grouped_first',
												params.disabled && params.disabled.templates && 'disabled'
											]
											},

											// save dropdown
											{
												block: 'b-dropdown', group: 'save-more', mods: [
												!_hasSaveTemplates && 'excluded',
												'grouped_last',
												'grouped_last_no-text',
												'right'
											], name: 'save-more', items: []
											}

										]

									}, {
										block: 'b-toolbar__btn', name: 'cancel'
									}, {
										block: 'b-toolbar__message',
										mnemo: 'loadProgress',
										mods: ['progress'],
										hide: true
									}, {
										block: 'b-toolbar__message', mnemo: 'saveError', mods: ['error'], hide: true
									}, {
										block: 'b-toolbar__message', mnemo: 'saveStatus', hide: true
									}
								]
								}
							]
						};
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_search"] = function (params) {
					var __fest_buf = [];
					try {
						/** @namespace params -- block params */

						var _right_items = [];

						if (params.hasSearch) {
							_right_items.push({
								block: 'b-toolbar__btn',
								name: 'search',
								icon: 'toolbar_search',
								text: '',
								title: lang['btn']['titles']['change_query']
							});
						}

						var _params = {
							mnemo: 'toolbar-search', mods: ['adaptive'], items: [
								{
									group: 'right', mods: ['right'], items: _right_items
								}, {
									group: 'left', mods: ['left'], items: [
										{
											block: 'b-toolbar__btn',
											name: 'compose',
											icon: 'toolbar_compose',
											shortcut: 'n'
											//, mods:	['adaptive']
										}
									]
								}
							]
						};
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_fileSearch"] = function (params) {
					var __fest_buf = [];
					try {
						/** @namespace params -- block params */


						var _params = {
							mnemo: 'toolbar-fileSearch', mods: ['adaptive'], items: [
								// Right group
								{
									group: 'right', mods: ['right'], items: [
									{
										block: 'b-paginator',
										params: ajs.extend(params.paginator, {
											shortcut: {
												prev: 'ctrl+left|command+left',
												next: 'ctrl+right|command+right'
											}
										})
									}, {
										block: 'b-viewchange',
										group: 'view',
										active: params.isThumbView ? 'thumbs' : 'list',
										icon: 'toolbar_viewchange'
									}
								]
								},

								// Left group
								{
									group: 'left', items: [
									// SelectAll: dropdown
									{
										block: 'b-dropdown', group: 'selectAllFiles', mods: ['selectAll'], ctrl: {
										block: 'cbx',
										name: 'toggle',
										mods: ['transparent', (params.hasSelected && 'checked' + (!params.hasSelectedAll ? '_mixed' : ''))]
									}, items: []
									}, {
										block: 'b-toolbar__btn', items: [
											{
												mods: [params.canDisabled && !params.hasSelected && ['disabled']],
												icon: 'toolbar_download',
												name: 'download'
											}, {
												mods: [params.canDisabled && !params.hasSelected && ['disabled']],
												icon: 'toolbar_forward',
												name: 'forward'
											}
										]
									}, {
										block: 'b-toolbar__btn',
										mods: [params.canDisabled && !params.hasSelected && ['disabled']],
										name: 'archive',
										text: lang['btn'][params.$GET.only_hidden == 1 ? 'show' : 'hide']
									}
								]
								}
							]
						};

						if (!($.browser.msie && (parseInt($.browser.version, 10) <= 8)) && patron.EnableAttachToCloud) {
							var toCloud = {
								block: 'b-toolbar__btn',
								mods: [params.canDisabled && !params.hasSelected && ['disabled']],
								name: 'toCloud',
								text: lang['btn'].toСloud
							};

							_params.items[1].items.splice(2, 0, toCloud);
						}
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				__fest_blocks["b-toolbar_settings"] = function (params) {
					var __fest_buf = [];
					try {
						/** @namespace params -- block params */


						var _params = {
							mnemo: 'toolbar-settings', items: [
								// Right group
								{
									group: 'right', mods: ['right'], items: [{
									block: 'b-toolbar__btn', target: params.target, href: params.href, text: params.text
								}]
								}
							]
						};
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "b-toolbar";
					__fest_params = {};
					try {
						__fest_params = _params
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				var ctx = __fest_context;
				__fest_blocks["b-layer__archive"] = function (params) {
					var __fest_buf = [];
					__fest_buf.push("<div class=\"b-layer\"><div class=\"b-layer__wrapper\"><div class=\"b-layer__container\">");
					try {
						var _lang = lang['b-layer']['archive'], _close = {
							name: 'close',
							mods: ['layer_close'],
							icon: 'layer_close'
						};
					} catch (e) {
						__fest_log_error(e.message);
					}
					__fest_select = "btn";
					__fest_params = {};
					try {
						__fest_params = _close
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					__fest_buf.push("<div class=\"popup__head\"><div class=\"b-layer__header\">");
					try {
						__fest_buf.push(__fest_escapeHTML(_lang['title']))
					} catch (e) {
						__fest_log_error(e.message + "19");
					}
					__fest_buf.push("</div></div><div class=\"b-layer__content\"><div class=\"form__row__subwidget\">");
					try {
						__fest_buf.push(__fest_escapeHTML(_lang['description']))
					} catch (e) {
						__fest_log_error(e.message + "23");
					}
					__fest_buf.push("</div><div class=\"form__row__subwidget\">");
					try {
						__fest_if = params.showNewFolder
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						__fest_buf.push("<label class=\"form__checkbox form__checkbox_inline\"><input class=\"form__checkbox__checkbox\" type=\"radio\" name=\"newfolder\" value=\"0\"/><span class=\"form__checkbox__label\">");
						try {
							__fest_buf.push(__fest_escapeHTML(_lang['moveto']))
						} catch (e) {
							__fest_log_error(e.message + "30");
						}
						__fest_buf.push("</span></label>");
					} else {
						__fest_buf.push("<span class=\"form__row__subwidget_inline\">");
						try {
							__fest_buf.push(__fest_escapeHTML(_lang['moveto']))
						} catch (e) {
							__fest_log_error(e.message + "34");
						}
						__fest_buf.push("</span>");
					}
					__fest_buf.push("<div class=\"form__row__subwidget_inline form__row__shift form__select form__select_medium\"><div class=\"form__select__box\"><div class=\"form__select__box__text js-text\"></div></div><i class=\"form__select__arrow\"></i><select name=\"folder\" class=\"form__select__select\">");
					try {
						__fest_if = params.folders
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						var i, folder, __fest_to0, __fest_iterator0;
						try {
							__fest_iterator0 = params.folders || [];
							__fest_to0 = __fest_iterator0.length;
						} catch (e) {
							__fest_iterator0 = [];
							__fest_to0 = 0;
							__fest_log_error(e.message);
						}
						for (i = 0; i < __fest_to0; i++) {
							folder = __fest_iterator0[i];
							try {
								__fest_attrs[0] = __fest_escapeHTML(folder.get('id'))
							} catch (e) {
								__fest_attrs[0] = "";
								__fest_log_error(e.message);
							}
							__fest_buf.push("<option value=\"" + __fest_attrs[0] + "\"");
							try {
								__fest_if = folder.get('id') == params.selectedFolderId
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" selected=\"selected\"");
							}
							__fest_buf.push(">");
							try {
								__fest_buf.push(__fest_escapeHTML(folder.get('name')))
							} catch (e) {
								__fest_log_error(e.message + "52");
							}
							__fest_buf.push("</option>");
						}
					}
					__fest_buf.push("</select></div></div>");
					try {
						__fest_if = params.showNewFolder
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						__fest_buf.push("<div class=\"form__row\"><label class=\"form__checkbox\"><input class=\"form__checkbox__checkbox\" type=\"radio\" name=\"newfolder\" value=\"1\" checked=\"checked\"/><span class=\"form__checkbox__label\">");
						try {
							__fest_buf.push(__fest_escapeHTML(_lang['create']))
						} catch (e) {
							__fest_log_error(e.message + "64");
						}
						__fest_buf.push("</span></label></div>");
					}
					__fest_buf.push("</div><div class=\"b-layer__controls\"><button class=\"btn btn_main confirm-ok\" type=\"submit\" data-name=\"submit\"><span class=\"btn__text\">");
					try {
						__fest_buf.push(__fest_escapeHTML(_lang['submit']))
					} catch (e) {
						__fest_log_error(e.message + "71");
					}
					__fest_buf.push("</span></button><button class=\"btn confirm-cancel\" type=\"button\" data-name=\"cancel\"><span class=\"btn__text\">");
					try {
						__fest_buf.push(__fest_escapeHTML(_lang['cancel']))
					} catch (e) {
						__fest_log_error(e.message + "72");
					}
					__fest_buf.push("</span></button></div></div></div><div class=\"b-layer__overlay\"></div></div>");
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				var ctx = __fest_context;
				__fest_blocks["b-layer__septima-on"] = function (params) {
					var __fest_buf = [];
					__fest_buf.push("<div class=\"b-layer\"><div class=\"b-layer__wrapper\"><div class=\"b-layer__container\"><div class=\"septima-on-popup\"><div class=\"js-step-first septima-on-popup__wrapper\"><div class=\"septima-on-popup__title\">");
					try {
						__fest_buf.push(lang['b-layer']['septima-on']['title'])
					} catch (e) {
						__fest_log_error(e.message + "9");
					}
					__fest_buf.push("</div><div class=\"septima-on-popup__subtitle\">");
					try {
						__fest_buf.push(lang['b-layer']['septima-on']['subtitle'])
					} catch (e) {
						__fest_log_error(e.message + "10");
					}
					__fest_buf.push("</div><div class=\"septima-on-popup__bar\"><div class=\"js-bar septima-on-popup__bar__spiner\" style=\"width: 0%;\"></div></div><div class=\"septima-on-popup__desc\"><div class=\"js-stage-text septima-on-popup__text\"></div><div class=\"js-remains septima-on-popup__timer\"></div></div></div><div class=\"js-step-second\" style=\"display: none\"></div></div></div></div><div class=\"b-layer__overlay\"></div></div>");
					return __fest_buf.join("");
				};
			})(__fest_context);
			(function (__fest_context) {
				var ctx = __fest_context;
				__fest_blocks["b-layer__shortcuts"] = function (params) {
					var __fest_buf = [];
					try {
						__fest_if = params.close
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						__fest_select = "btn";
						__fest_params = {};
						try {
							__fest_params = params.close
						} catch (e) {
							__fest_log_error(e.message)
						}
						__fest_fn = __fest_blocks[__fest_select];
						if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					}
					__fest_buf.push("<div class=\"shortcuts\"><div class=\"shortcuts__header\">");
					try {
						__fest_buf.push(lang['b-layer']['shortcuts']['title'])
					} catch (e) {
						__fest_log_error(e.message + "9");
					}
					__fest_buf.push("</div><table><tr><td class=\"shortcuts__col\">");
					__fest_select = "b-layer__shortcuts__col";
					__fest_params = {};
					try {
						__fest_params = params.column1
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					__fest_buf.push("</td><td class=\"shortcuts__col\">");
					__fest_select = "b-layer__shortcuts__col";
					__fest_params = {};
					try {
						__fest_params = params.column2
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					__fest_buf.push("</td><td class=\"shortcuts__col\">");
					__fest_select = "b-layer__shortcuts__col";
					__fest_params = {};
					try {
						__fest_params = params.column3
					} catch (e) {
						__fest_log_error(e.message)
					}
					__fest_fn = __fest_blocks[__fest_select];
					if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
					__fest_buf.push("</td></tr></table></div>");
					return __fest_buf.join("");
				};
				__fest_blocks["b-layer__shortcuts__col"] = function (params) {
					var __fest_buf = [];
					var i, group, __fest_to0, __fest_iterator0;
					try {
						__fest_iterator0 = params || [];
						__fest_to0 = __fest_iterator0.length;
					} catch (e) {
						__fest_iterator0 = [];
						__fest_to0 = 0;
						__fest_log_error(e.message);
					}
					for (i = 0; i < __fest_to0; i++) {
						group = __fest_iterator0[i];
						try {
							__fest_if = group.group
						} catch (e) {
							__fest_if = false;
							__fest_log_error(e.message);
						}
						if (__fest_if) {
							try {
								var _langGroup = lang['b-layer']['shortcuts'][group.group];
							} catch (e) {
								__fest_log_error(e.message);
							}
							__fest_buf.push("<div class=\"shortcuts__item shortcuts__item_header");
							try {
								__fest_if = i
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push(" shortcuts__item_header_gap");
							}
							__fest_buf.push("\">");
							try {
								__fest_buf.push(_langGroup && _langGroup['title'] ? _langGroup['title'] : group.header)
							} catch (e) {
								__fest_log_error(e.message + "48");
							}
							__fest_buf.push("</div>");
							var j, item, __fest_to1, __fest_iterator1;
							try {
								__fest_iterator1 = group.items || [];
								__fest_to1 = __fest_iterator1.length;
							} catch (e) {
								__fest_iterator1 = [];
								__fest_to1 = 0;
								__fest_log_error(e.message);
							}
							for (j = 0; j < __fest_to1; j++) {
								item = __fest_iterator1[j];
								try {
									if (item && (item instanceof Object)) {
										item.text = (item.text == null ? _langGroup[item.name] : item.text);
									}
								} catch (e) {
									__fest_log_error(e.message);
								}
								try {
									__fest_if = !item.disabled
								} catch (e) {
									__fest_if = false;
									__fest_log_error(e.message);
								}
								if (__fest_if) {
									__fest_select = "b-layer__shortcuts__col__item";
									__fest_params = {};
									try {
										__fest_params = item
									} catch (e) {
										__fest_log_error(e.message)
									}
									__fest_fn = __fest_blocks[__fest_select];
									if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
								}
							}
						}
					}
					return __fest_buf.join("");
				};
				__fest_blocks["b-layer__shortcuts__col__item"] = function (params) {
					var __fest_buf = [];
					__fest_buf.push("<div class=\"shortcuts__item\"><span class=\"shortcuts__item__shortcut\">");
					try {
						__fest_if = params.shortcutMods
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						var i, mod, __fest_to2, __fest_iterator2;
						try {
							__fest_iterator2 = params.shortcutMods || [];
							__fest_to2 = __fest_iterator2.length;
						} catch (e) {
							__fest_iterator2 = [];
							__fest_to2 = 0;
							__fest_log_error(e.message);
						}
						for (i = 0; i < __fest_to2; i++) {
							mod = __fest_iterator2[i];
							try {
								__fest_if = i
							} catch (e) {
								__fest_if = false;
								__fest_log_error(e.message);
							}
							if (__fest_if) {
								__fest_buf.push("+");
							}
							try {
								__fest_buf.push(__fest_escapeHTML(mod))
							} catch (e) {
								__fest_log_error(e.message + "86");
							}
						}
					}
					try {
						__fest_if = params.shortcut
					} catch (e) {
						__fest_if = false;
						__fest_log_error(e.message);
					}
					if (__fest_if) {
						try {
							__fest_if = params.shortcutMods
						} catch (e) {
							__fest_if = false;
							__fest_log_error(e.message);
						}
						if (__fest_if) {
							__fest_buf.push("+");
						}
						try {
							__fest_buf.push(__fest_escapeHTML(params.shortcut))
						} catch (e) {
							__fest_log_error(e.message + "93");
						}
					}
					__fest_buf.push("</span><span class=\"shortcuts__item__text\">");
					try {
						__fest_buf.push(params.text)
					} catch (e) {
						__fest_log_error(e.message + "98");
					}
					__fest_buf.push("</span></div>");
					return __fest_buf.join("");
				};
			})(__fest_context);
			__fest_blocks["b-prefoot-hidden"] = function (params) {
				var __fest_buf = [];
				__fest_buf.push("<div id=\"b-prefoot\" style=\"display: none\">");
				__fest_select = "b-prefoot";
				__fest_params = {};
				__fest_fn = __fest_blocks[__fest_select];
				if (__fest_fn)__fest_buf.push(__fest_call(__fest_fn, __fest_params, false));
				__fest_buf.push("</div>");
				return __fest_buf.join("");
			};
		}
		try {
			__fest_if = ctx.layout == 'mail'
		} catch (e) {
			__fest_if = false;
			__fest_log_error(e.message);
		}
		if (__fest_if) {
			__fest_buf.push("<div class=\"b-sticky\">");
			__fest_select = "b-layout";
			__fest_params = {};
			try {
				__fest_params = {
					cols: [
						{items: [{blockId: 'b-toolbar__left'}]}, {items: [{blockId: 'b-toolbar__right'}]}
					]
				}
			} catch (e) {
				__fest_log_error(e.message)
			}
			__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
			__fest_buf = [];
			__fest_buf.push("</div>");
			__fest_select = "b-layout";
			__fest_params = {};
			try {
				__fest_params = {
					cols: [
						{
							items: [
								{blockId: 'b-nav_folders'}, {blockId: 'b-nav_search'}, {blockId: 'b-nav_fileSearch'}, {
									block: 'b-slot',
									id: 'b-slot_left_informer',
									mods: ['banner'],
									style: 'display: none;'
								}, {
									block: 'b-slot',
									id: 'b-slot_left_banner',
									mods: ['banner'],
									style: 'display: none;'
								}, {
									block: 'b-slot',
									id: 'b-slot_left_direct',
									mods: ['banner'],
									style: 'display: none;'
								}
							]
						}, {
							items: [
								{blockId: 'b-compose', style: 'display: none'}, {
									blockId: 'b-compose__sent',
									style: 'display: none'
								}, {blockId: 'b-letters', style: 'display: none'}, {
									blockId: 'b-letter',
									style: 'display: none'
								}, {blockId: 'b-fromsearch-letter', style: 'display: none'}, {
									blockId: 'b-search',
									style: 'display: none'
								}, {
									blockId: 'b-fileSearch',
									style: 'display: none'
								}, {blockId: 'b-agent'}, {
									blockId: 'b-thread',
									style: 'display: none'
								}, {block: 'b-prefoot-hidden'}
							]
						}
					]
				}
			} catch (e) {
				__fest_log_error(e.message)
			}
			__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
			__fest_buf = [];
			__fest_select = "b-back-top";
			__fest_params = {};
			try {
				__fest_params = {
					text: toolkit.lang['b-back-top'].text,
					icon: 'back-top',
					href: '#ScrollBody',
					mods: ['touch']
				}
			} catch (e) {
				__fest_log_error(e.message)
			}
			__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
			__fest_buf = [];
		} else {
			try {
				__fest_if = ctx.block
			} catch (e) {
				__fest_if = false;
				__fest_log_error(e.message);
			}
			if (__fest_if) {
				try {
					__fest_select = ctx.block
				} catch (e) {
					__fest_select = "";
					__fest_log_error(e.message)
				}
				__fest_params = {};
				try {
					__fest_params = ctx.params || ctx
				} catch (e) {
					__fest_log_error(e.message)
				}
				__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
				__fest_buf = [];
			} else {
				try {
					__fest_if = false
				} catch (e) {
					__fest_if = false;
					__fest_log_error(e.message);
				}
				if (__fest_if) {
					__fest_select = "cbx";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "btn";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "btn-group";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-slot";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-prefoot";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-prefoot-hidden";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-layout";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-toolbar";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-informer";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-datalist";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-paginator";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-toolbar_agent";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-toolbar_folders";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-toolbar_letter";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-toolbar_letters";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-toolbar_compose";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-toolbar_search";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-letter";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-letter__button__list";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
					__fest_select = "b-datalist__item__attach__dropdown";
					__fest_params = {};
					__fest_chunks.push(__fest_buf.join(""), {name: __fest_select, params: __fest_params, cp: false});
					__fest_buf = [];
				} else {
				}
			}
		}
		__fest_to = __fest_chunks.length;
		if (__fest_to) {
			__fest_iterator = 0;
			for (; __fest_iterator < __fest_to; __fest_iterator++) {
				__fest_chunk = __fest_chunks[__fest_iterator];
				if (typeof __fest_chunk === "string") {
					__fest_html.push(__fest_chunk);
				} else {
					__fest_fn = __fest_blocks[__fest_chunk.name];
					if (__fest_fn) __fest_html.push(__fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp));
				}
			}
			__fest_html.push(__fest_buf.join(""));
			return __fest_html.join("")
		} else {
			return __fest_buf.join("");
		}
	};
	if (x.jsLoader !== undefined && x.jsLoader.loaded !== undefined && typeof x.jsLoader.loaded === 'function') {
		x.jsLoader.loaded('{festTemplate}pages/lego')
	}
	;
})();
