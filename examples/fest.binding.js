(function () {
	'use strict';

	/**
	 * Пустышка для помощи в создании произвольного куска html
	 * @type HTMLDivElement
	 * @private
	 */
	var _fragment = document.createElement('div');


	/**
	 * Создание DOM-куска на основе произвольной html-строки
	 * @param  {string}  html
	 * @return {DocumentFragment}
	 */
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


	/**
	 * Список препроцессоров
	 * @type {Array}
	 * @private
	 */
	var _preprocessors = [];


	function templatePreprocessing(name) {
		var bindIdx = 0,
			template = this[name].toString(), // Получаем ссылку на скомпилированную-шаблон
			r_expr,
			r_expr_g;

		r_expr = _preprocessors.map(function (desc) {
			return desc.id;
		});

		r_expr = new RegExp('\\/\\*\\$(' + r_expr.join('|') + ')\\*\\/([\\\s\\S]*?)\\/\\*(\\1)\\$\\*\\/');
		r_expr_g = new RegExp(r_expr.source, 'g');

		template = template
			.replace(/(var __xid)/g, 'var __xb = [], __bid, __xid')
			.replace(/\/\*M\$\*\/([^<]*?)\/\*\$M\*\//g, '$1') // сливам все модификаторы в один
		;



		// Биндим события
		template = template.replace(/<[a-z][^>]+>/g, function (entry) {
			var events = [],
				__xb = '__xb[__bid]';

			entry = entry.replace(/\son-([a-z]+)(-outside)?=\\"(.*?)\\"/g, function (_, event, outside, expr) {
				events.push(
					'{name:"' + event + '",' +
					'outside:' + !!outside + ',' +
					'fn:function (evt, el) {return (' + expr.trim().replace(/;+$/, '') + ');}}'
				);

				return '';
			});

			if (events.length) {
				entry += '<!--e" + (__xb.push([' + events.join(',') + ']) - 1) + "-->';
			}

			return entry;
		});


		do {
			template = template.replace(r_expr_g, function (_, name, expr) {
				var __xb = '__xb[__bid]',
					code = [],
					pre = _preprocessors[name];

				if (pre) {
					code.push(
						'__bid = __xb.push({ parent: __bid }) - 1;',
						//__xb + ' = {};',
						__xb + '.id = __bid;',
						__xb + '.name = "' + name + '";'
					);

					// Экспортируем свойства
					pre.props && Object.keys(pre.props).forEach(function (key) {
						var idx = expr.indexOf('/*$*/'),
							incut = __xb + '.' + key + '=' + pre.props[key] + ';';

						if (idx > -1) {
							idx += 5;
							expr = expr.substr(0, idx) + incut + expr.substr(idx);
						}
						else {
							code.push(incut);
						}
					});

					// Рендер функция
					if (pre.render) {
						code.push(
							__xb + '.$render = function () { var __fest_buf = "";',
							(pre.expr ? pre.expr(expr) : expr),
							'return __fest_buf;};'
						);
					}

					// Функция тест
					if (pre.$test) {
						code.push(__xb + '.$test = ' + pre.$test.toString().replace('this.getter();', expr.split('/*$*/')[0]) + ';');
					}

					// Применение изменений
					if (pre.$apply) {
						code.push(__xb + '.$apply = ' + pre.$apply.toString().replace('this.getter();', expr.split('/*$*/')[0]) + ';');
					}

					// Биндинг через коментарий
					if (pre.attr) {
						code.push('__fest_buf +=  " ' + pre.attr + '=" + __bid;');
					}

					// Обертка коментариями
					if (pre.dom === 'wrap') {
						code.push(
							'__fest_buf += "<!--"+__bid+"-->";',
							expr,
							'__fest_buf += "<!--/"+__bid+"-->";'
						);
					}
					else if (pre.dom === 'link') {
						code.push('__fest_buf += "<!--l"+__bid+"-->";', expr);
					}
					else {
						code.push(expr);
					}

					// Экспортируем свойства
					pre.afterProps && Object.keys(pre.afterProps).forEach(function (key) {
						code.push(__xb + '.' + key + '=' + pre.afterProps[key] + ';');
					});

					code.push('if (' + __xb + '.parent !== void 0) __bid = ' + __xb + '.parent;');
				}
				else {
					code.push(expr);
				}

				bindIdx++;

				return code.join('\n');
			});
		} while (r_expr.test(template));


		template = new Function('return ' + template)();

		// Инициализируем шиблон и экспортируем блоки
		template({});

		return template;
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

		$init: function (el, endEl) {
			var $inited,
				chr,
				idx,
				nodeValue;

			if (el === true) {
				el = this.$();
				this.$inited = $inited = true;
			}

			if (el) {
				do {
					if (el.nodeType === 8) {
						nodeValue = el.nodeValue;
						idx = nodeValue|0;
						chr = nodeValue.charAt(0);

						if (!(chr > 0)) {
							idx = nodeValue.substr(1) | 0;
						}

						if (chr === 'l') { // простая связка
							this.$binds[idx].el = el;
						}
						else if (chr === 'e') { // события
							setTimeout(function (el, events) {
								events.el = el;
								this.$events.push(events);

								events.unbind = function () {
									events.forEach(function (desc) {
										(desc.outside ? document : el).removeEventListener(desc.name, desc.handle);
										desc.handle = null;
									});

									el = null;
									events.el = null;
									events.unbind = null;
								};

								events.forEach(function (desc) {
									(desc.outside ? document : el).addEventListener(desc.name, desc.handle = function (desc, evt) {
										if (desc.outside) {
											var check = evt.target;

											do {
												if (check === el) {
													return;
												}
											} while (check = check.parentNode);
										}

										desc.fn.call(el, evt, el);

										this.$apply();
									}.bind(this, desc));
								}, this);
							}.bind(this, el.previousSibling || el.parentNode, this.$binds[idx]));

							this.$binds[idx] = void 0;
						}
						else if (chr === '/') {
							this.$binds[idx]._el = el;
						}
						else {
							this.$binds[idx].el = el;
						}
					}
					else if (el.nodeType === 1 && ($inited || !el.attributes.scope)) {
						if (el.attributes.m) {
							this.$binds[el.attributes.m.value].el = el;
						}

						if (el.childNodes.length > 0) {
							this.$init(el.firstChild);
						}
					}

					if ($inited === true) {
						break;
					}
				} while ((el = el.nextSibling) && (el !== endEl));
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
				this.$init(startEl, endEl);

				return true;
			}

			return false;
		},

		$apply: function () {
			if (this.$inited !== true) {
				this.$init(true);
			}

			var i = 0,
				el = this.$(),
				bind,
				bindEl,
				html,
				binds = this.$binds,
				length = binds.length,
				$events = this.$events;

			for (; i < length; i++) {
				bind = binds[i];

				if (bind === void 0 || isDetached(el, bind.el)) {
					if (bind !== void 0) {
						binds.unbind && binds.unbind();
						bind.el = bind._el = null;
					}

					binds.splice(i, 1);
					i--;
					length--;
					continue;
				}
				else if ((bind.$test !== void 0) && !bind.$test()) {
					continue;
				}

				bindEl = bind.el;

				if (bind.$apply !== void 0) {
					bind.$apply(el, bindEl);
				}

				if (bind.$render !== void 0) {
					html = bind.$render();

					if (bind.name === 'IF') {
						this.$replaceBetween(bind.el, bind._el, html);
						$events.forEach(function (evt, i) {
							evt.el && !evt.el.parentNode && evt.unbind();
							$events.splice(i, 1);
						});
					}
					else {
						bindEl = bindEl.nextSibling;

						if (bindEl === bind._el) {
							bindEl.parentNode.insertBefore(document.createTextNode(html), bind._el);
						} else {
							bindEl.nodeValue = html;
						}
					}
				}
			}
		}
	};


	function isDetached(rootEl, el) {
		while (rootEl !== el) {
			el = el.parentNode;

			if (el === null) {
				return true;
			}
		}

		return false;
	}


	/**
	 * Добавить препроцессор
	 * @param  {Object} desc описание препроцессора
	 * @return {templatePreprocessing}
	 */
	templatePreprocessing.add = function (desc) {
		_preprocessors.push(desc);
		_preprocessors[desc.id] = desc;

		return this;
	};


	// Добавляем препроцессоры
	templatePreprocessing
		.add({
			id: 'V', // fest:value
			dom: 'wrap', // связь с DOM (добавить html-комментарии)
			render: true, // можно рендерить
			expr: function (value) { return value.replace(/\b__fest_escape[^(]+/g, ''); }
		})
		.add({
			id: 'IF', // fest:if
			dom: 'wrap',
			render: true,
			props: {
				last: '!!__fest_if' // запомнить последнее значение биндинга
			},
			$test: function () { // функция проверки изменений
				var __fest_if;

				this.getter();

				if (this.last !== !!__fest_if) {
					this.last = !!__fest_if;
					return true;
				}
			}
		})
		.add({
			id: 'B', // <bem:___/>
			dom: 'link',
			afterProps: {
				model: '__fest_params'
			},
			$apply: function () {
				var __fest_params;
				this.getter();
				this.model.$set(__fest_params);
			}
		})
		.add({
			id: 'M',
			attr: 'm', // биндинг через аттрибут
			props: {
				name: '__bem_x',
				mods: '__bem_mods'
			},
			$apply: function (el, bindEl) {
				var __bem_mods =  this.mods,
					__bem_x = this.name,
					__bem_block_mods = el.className;

				this.getter();

				(bindEl || el).className = __bem_mods;
			}
		})
	;


	// Export
	fest.withBindings = templatePreprocessing;
	fest.ModelView = ModelView;
})();
