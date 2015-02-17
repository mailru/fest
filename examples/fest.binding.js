(function () {
	function transformTemplate(name) {
		var bindIdx = 0,
			template = window.fest[name].toString();

		template = template
					.replace(/(var __xid)/g, 'var __xb = [], __xid')
					.replace(/\/\*M\$\*\/([^<]*?)\/\*\$M\*\//g, '$1') // сливам все модификаторы в один
				;

		do {
			template = template.replace(/\/\*\$(V|M|B|IF)\*\/([\s\S]*?)\/\*(\1)\$\*\//g, function (_, type, expr) {
				var __xb = '__xb[' + bindIdx + ']',
					code = [];

				if (type === 'M') { // MOD
					code.push(
						'__fest_buf +=  " m=' + bindIdx + '";',
						__xb + ' = {};',
						__xb + '.name = __bem_x;',
						__xb + '.mods = __bem_mods;',
						__xb + '.$apply = function (__bem_block_mods) {',
						'__bem_mods = this.mods;',
						'__bem_x = this.name;',
						expr,
						'return __bem_mods;',
						'}',
						expr
					);
				}
				else if (type === 'B') { // BLOCK
					code.push(
						__xb + ' = {};',
						__xb + '.$apply = function () {',
						expr.split('/*$*/')[0],
						'this.model.$set(__fest_params);',
						'};',
						expr,
						__xb + '.model = __fest_params'
					);
				}
				else {
					code.push(
						__xb + ' = function () {var __fest_buf = "";',
						expr.replace(/\b__fest_escape[^(]+/g, ''),
						'return __fest_buf;}'
					);


					if (type === 'IF') {
						code.push(
								__xb + '.last = !!__fest_if;',
								__xb + '.test = function () {',
								expr.split('/*$*/')[0],
								'if (this.last !== !!__fest_if) { this.last = !!__fest_if; return true; }',
								'};'
						);
					}

					// Обертка коментариями
					code.push(
						'__fest_buf += "<!--' + bindIdx + '-->";',
						expr,
						'__fest_buf += "<!--/' + bindIdx + '-->";'
					);
				}

				code.push(__xb + '.type = "' + type + '";');
				bindIdx++;

				return code.join('\n');
			});
//					console.log('---------');
//					console.log(template);
//					console.log('~~~~~')
		} while (/\/\*(\$[A-Z]+|[A-Z]\$)\*\//.test(template));

		template = template.replace(/<[a-z][^>]+/g, function (entry) {
			var idx = 0;

			return entry.replace(/\son-([a-z]+)(-outside)?=\\"(.*?)\\"/g, function (_, event, outside, expr) {
				return ' e' + (idx++) + '=" + __xevents.push({' +
					'name:"' + event + '",' +
					'outside: ' + !!outside + ',' +
					'fn: ' + 'function (evt, el) {return (' + expr.trim().replace(/;+$/, '')  + ');}' +
					'}) + "'
				;
			});
		});

//				console.log(template)
		template = new Function('return ' + template)();

		template({}); // init call

		return template;
	}

	var _fragment = document.createElement('div');

	function _createFragment(html) {
		if (/^(<!--.*?-->)?<option/i.test(html)) {
			_fragment.innerHTML = '<select>' + html + '</select>';
			_fragment = _fragment.firstChild;
		}
		else if (/^(<!--.*?-->)?<tr/.test(html)) {
			_fragment.innerHTML = '<table><tbody>' + html + '</tbody></table>';
			_fragment = _fragment.firstChild.firstChild;
		}
		else {
			_fragment.innerHTML = html;
		}

		if (_fragment.childNodes.length > 1) {
			var realFragment = document.createDocumentFragment();
			while (_fragment.firstChild) {
				realFragment.appendChild(_fragment.firstChild);
			}
			return realFragment;
		}

		return _fragment.firstChild;
	}

	function ModelView(ctx) {
		ctx.__proto__ = this;
		return ctx;
	}

	ModelView.prototype = {
		constructor: ModelView,

		$: function () {
			return window[this.$id];
		},

		$init: function (el) {
			var nodeValue;

			el = el || this.$().firstChild;

			if (el) {
				do {
					if (el.nodeType === 8) {
						nodeValue = el.nodeValue;

						if (nodeValue.charAt(0) === '/') {
							this.$binds[nodeValue.substr(1)|0]._el = el;
						} else {
							this.$binds[nodeValue|0].el = el;
						}
					}
					else if (el.nodeType === 1) {
						if (el.attributes.m) {
							this.$binds[el.attributes.m.value].el = el;
						}
						else if (el.attributes.e0) {
							setTimeout(function (el) {
								var i = 0, attr, desc, attrs = el.attributes;

								for (; attr = attrs['e' + i]; i++) {
									desc = this.$events[attr.value-1];
									desc.el = el;
									desc.unbind = function () {
										(this.outside ? document : el).removeEventListener(this.name, this.handle);
										this.handle =
										this.unbind =
										this.el = null;
									};

									(desc.outside ? document : el).addEventListener(desc.name, desc.handle = function (desc, evt) {
										if (desc.outside) {
											var check = evt.target;
											do {
												if (check === el) {
													return;
												}
											} while (check = check.parentNode);
										}

										desc.fn(evt, el);

										this.$apply();
									}.bind(this, desc));
								}

								attrs = attr = null;
							}.bind(this, el));
						}

						if (el.childNodes.length > 1) {
							this.$init(el.firstChild);
						}
					}
				} while (el = el.nextSibling);
			}
		},

		$mods: function (newValue, oldValue) {
			var el = this.$(),
				block = this.$name,
				className = ' ' + el.className + ' ';

			if (oldValue) {
				oldValue = block + '_' + (oldValue.join ? oldValue.join(' ' + block + '_') : oldValue);
				className = className.replace(' ' + oldValue + ' ', '')
			}

			if (newValue && newValue.length) {
				newValue = block + '_' + (newValue.join ? newValue.join(' ' + block + '_') : newValue);
				className += ' ' + newValue + ' ';
			}

			this._mods = className;
			el.className = className;

			this.$apply();
		},

		$set: function (key, value, silent) {
			if (this.$() === void 0) {
				return;
			}

			if (typeof key === 'object') {
				for (var i in key) {
					this.$set(i, key[i], true);
				}

				this.$apply();
			}
			else {
				var _value = this[key];

				if (_value !== value) {
					this[key] = value;

					if (this['$' + key] !== void 0) {
						this['$' + key](value, _value);
					}
					else if (silent !== true) {
						this.$apply();
					}
				}
			}

			return this;
		},

		$bind: function (id, name, tpl, binds, events) {
			this.$id = id;
			this.$name = name;
			this.$tpl = tpl;
			this.$binds = binds;
			this.$events = events;
			this.$inited = false;
			setTimeout(this.$apply.bind(this));
		},

		$replaceBetween: function (startEl, endEl, html) {
			var parentEl = startEl.parentNode;

			while (startEl.nextSibling !== endEl) {
				parentEl.removeChild(startEl.nextSibling);
			}

			if (html !== '') {
				parentEl.insertBefore(_createFragment(html), endEl);

				do{
					startEl = startEl.nextSibling;
					this.$init(startEl);
				}
				while (startEl.nextSibling !== endEl);

				return true;
			}

			return false;
		},

		$apply: function () {
			if (this.$inited !== true) {
				this.$inited = true;
				this.$init();
			}

			var i = 0,
				el,
				bind,
				type,
				binds = this.$binds,
				length = binds.length;

			for (; i < length; i++) {
				bind = binds[i];

				if (bind === void 0) {
					continue;
				}

				type = bind.type;

				if (type === 'B') {
					bind.$apply();
				}
				else if (type === 'M') {
					if (bind.el) {
						bind.el.className = bind.$apply(' ' + this.$().className + ' ');
					} else {
						bind.mods = this._mods || bind.mods;
						this.$().className = bind.$apply(this.$().className);
					}
				}
				else if (type === 'IF') {
					if (bind.test()) {
						this.$replaceBetween(bind.el, bind._el, bind());
						this.$events.forEach(function (evt) {
							evt.el && !evt.el.parentNode && evt.unbind();
						});
					}
				}
				else {
					el = bind.el.nextSibling;

					if (el === bind._el) {
						el.parentNode.insertBefore(document.createTextNode(bind()), bind._el);
					} else {
						el.nodeValue = bind();
					}
				}
			}
		}
	};

	// Export
	fest.withBindings = transformTemplate;
	window.ModelView = ModelView;
})();
