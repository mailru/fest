var compile = (function(){
	"use strict";

	/*
		TODO
			deprecate fest:attributes?
			shortcuts for fest:attribute
			less strict sax parser
	 */

	var fs = null, dirname, isAbsolutePath;
	var __log_error = (typeof __fest_error !== 'undefined' ? __fest_error : console.error);

	if (typeof require === 'function'){
		fs = require('fs');
	}

	var readFileSync = function(file, encoding){
		var result = '',
			read_file = (typeof __read_file === 'function' ? __read_file : fs.readFileSync);
		try {
			result = read_file(file, encoding);
		}catch (e){
			__log_error('error open file "' + file + '", ' + e.message);
			return '';
		}
		if (typeof result === 'undefined'){
			__log_error('error check file "' + file + '"');
			return '';
		}
		return result;
	};

	dirname = function(path){
		var idx = path.lastIndexOf('/'),
			root = (idx === 0) ? 1 : 0;
		if (idx === -1) {
			// Primitive support for Windows platform
			idx = path.lastIndexOf('\\');
			root = (idx > 1 && (path[idx - 1] === ':')) ? 1 : 0;
		}
		return idx != -1 ? path.substring(0, idx + root) : '.';
	};

	isAbsolutePath = function(path){
		if (path.length) {
			if (path[0] === '/') {
				return true;
			} else if (path.length > 3) {
				return (path[1] === ':' && path[2] === '\\');
			}
		}
		return false;
	};

	var sax = (new Function(readFileSync(__dirname + '/sax.js').toString() + ' return sax;'))();
	var js_beautify = (new Function(readFileSync(__dirname + '/beautify.js').toString() + ' return js_beautify;'))();
	var translate = (new Function('return ' + readFileSync(__dirname + '/translate.js').toString()))();

	var fest_ns = 'http://fest.mail.ru';
	var fest_i18n_ns = 'http://i18n.fest.mail.ru';

	var short_tags = {area: true, base: true, br: true, col: true, command: true,
					  embed: true, hr: true, img: true, input: true, keygen: true,
					  link: true, meta: true, param: true, source: true, wbr: true };

	var jschars=/[\\'"\/\n\r\t\b\f<>]/g;
	var htmlchars=/[&<>"]/g;

	var jshash = {
		"\"":"\\\"",
		"\\":"\\\\",
		"/" :"\\/",
		"\n":"\\n",
		"\r":"\\r",
		"\t":"\\t",
		"\b":"\\b",
		"\f":"\\f",
		"'" :"\\'",
		"<" :"\\u003C",
		">" :"\\u003E"
	};

	var htmlhash = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;"
	};

	var reName = /^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[$A-Z\_a-z][$A-Z\_a-z0-9]*$/;

	function escapeJS(s){
		return s.replace(jschars, function (chr){
			return jshash[chr];
		});
	}

	function escapeHTML(s){
		return s.replace(htmlchars,function(chr){
			return htmlhash[chr];
		});
	}

	function getName(name){
		if (/^[a-zA-Z_]+$/.test(name)){
			return '.' + name;
		} else {
			return '["' + escapeJS(name) + '"]';
		}
	}

	function compileAttributes(attrs){
		var i, result = { 'text': '', 'expr': [], 'name': [] }, n = 0, attrValue = '';

		result.attrs = {};

		for (i in attrs){
			attrValue = attrs[i].value.replace(/{{/g, "__DOUBLE_LEFT_CURLY_BRACES__").replace(/}}/g, "__DOUBLE_RIGHT_CURLY_BRACES__");

			result.text += ' ' + i + '=\\"';
			result.attrs[i] = '';

			attrValue.match(/{[^}]*}|[^{}]*/g).forEach(function (str) {
				var val;

				if (str !== '') {
					if (str[0] === '{') {
						result.name[n] = i;
						result.expr[n] = str.slice(1, -1).replace(/__DOUBLE_LEFT_CURLY_BRACES__/g, "{").replace(/__DOUBLE_RIGHT_CURLY_BRACES__/g, "}");
						val = '" + __fest_attrs[' + n++ + '] + "';
					} else {
						val = escapeJS(escapeHTML(str)).replace(/__DOUBLE_LEFT_CURLY_BRACES__/g, "{").replace(/__DOUBLE_RIGHT_CURLY_BRACES__/g, "}");
					}

					result.text += val;
					result.attrs[i] += val;
				}
			});
			result.text += '\\"';
		}
		return result;
	}

	function compileExpr(attr, _getExpr){
		var i = 0, attrValue = '', result = {containsExpr: false, text: []} ;
		attrValue = attr.value.replace(/{{/g, "__DOUBLE_LEFT_CURLY_BRACES__").replace(/}}/g, "__DOUBLE_RIGHT_CURLY_BRACES__");
		attrValue.match(/{[^}]*}|[^{}]*/g).forEach(function (str) {
			if (str !== '') {
				if (str[0] === '{') {
					i++;
					result.text.push('(' + str.slice(1, -1).replace(/__DOUBLE_LEFT_CURLY_BRACES__/g, "{").replace(/__DOUBLE_RIGHT_CURLY_BRACES__/g, "}") + ')');
					_getExpr(result.text[result.text.length-1], 'expression #' + (i) + ' in attribute "' + attr.name + '"');
					result.containsExpr = true;
				} else{
					result.text.push('"' + escapeJS(escapeHTML(str)).replace(/__DOUBLE_LEFT_CURLY_BRACES__/g, "{").replace(/__DOUBLE_RIGHT_CURLY_BRACES__/g, "}") + '"');
				}
			}
		});
		result.text = result.text.join('+');
		return result;
	}

	function errorMessage(msg, badLine, file) {
		function zeroPadding(s, len) {
			if (s.toString().length >= len){
				return s + "";
			}
			return String(new Array(len + 1).join('0') + s).slice(-len);
		}

		function numSort(a, b) {
			return a - b;
		}

		function leftWhitespace(s) {
			return s.length - s.trimLeft().length;
		}

		var before = 1, after = 1,
			lines = file.split('\n'),
			badPlace = [],
			num = [];

		for (var i = badLine - before; i <= badLine + after; i++) {
			if (lines[i] !== undefined){
				num.push(i);
			}
		}

		var longest = num.sort(numSort)[num.length - 1].toString().length,
			minWhitespace = num.slice(0)
				.map(function(n) { return leftWhitespace(lines[n]); })
				.sort(numSort)[0];

		num.forEach(function(n) {
			badPlace.push(
				('%n%: ' + lines[n].slice(minWhitespace)).replace('%n%', zeroPadding(n + 1, longest))
			);
		});

		return [badPlace.join('\n'), 'At line ' + zeroPadding(badLine + 1, longest) + ': ' + msg].join('\n');
	}

	function getExpr(compile_file, parser) {
		return function(value, where) {
			try {
				value = value.replace(/;+\s*$/,'');
				(new Function('(' + value + ')'));
			} catch (e) {
				throw new Error(errorMessage((where || 'node') + ' has ' + e, parser.line, compile_file));
			}
			return value;
		};
	}

	function getEval(compile_file, parser) {
		return function(value) {
			try {
				(new Function(value));
			} catch (e) {
				throw new Error(errorMessage('node has ' + e, parser.line, compile_file));
			}
			return value;
		};
	}

	function getAttr(compile_file, parser) {
		return function(node, attr, type) {
			var value;
			try {
				value = node.attributes[attr].value;
			} catch (e) {
				throw new Error(errorMessage('attribute "' + attr + '" is missing', parser.line, compile_file));
			}
			if (type === 'expr') {
				try {
					(new Function('(' + value + ')'));
				} catch (e) {
					throw new Error(errorMessage('attribute "' + attr + '" has ' + e, parser.line, compile_file));
				}
			} else if (type === 'var') {
				if (!reName.test(value)) {
					throw new Error(errorMessage('attribute "' + attr + '" has an invalid identifier', parser.line, compile_file));
				}
			}
			return value;
		};
	}

	function push_debug_info(section, parser, compile_file, block, debug){
		if (!debug){
			return;
		}
		var debug_info = {
			file: compile_file,
			line: parser.line,
			block: block
		};
		if (typeof debug === 'function') {
			debug_info = debug(debug_info);
		}
		section.source += '__fest_debug_file="' + escapeJS(debug_info.file) + '";';
		section.source += '__fest_debug_line="' + debug_info.line + '";';
		section.source += '__fest_debug_block="' + debug_info.block + '";';
	}

	function _compile (data){
		var file = data.file,
			context_name = data.context_name,
			options = data.options,
			output = data.output,
			inline_get_blocks = data.inline_get_blocks;

		output = output || {sections: [], uses: {}};

		function resolveFilename(filename) {
			if (isAbsolutePath(filename)) {
				return filename;
			} else {
				return dirname(file) + '/' + filename;
			}
		}

		var counters = {counter: 0, promises: 1},
			choose = [],
			stack = [],
			fstack = [],
			section = flush(),
			opentag = false,
			templateClosed = false,
			parser = sax.parser(options.sax.strict, options.sax),
			// compile_file = readFileSync(file, 'utf-8'),
			compile_file = translate({
				file: file,
				template: readFileSync(file, 'utf-8'),
				sax: sax,
				fest_ns: fest_ns,
				fest_i18n_ns: fest_i18n_ns,
				errorMessage: errorMessage,
				escapeHTML: escapeHTML,
				options: options
			}),
			_getAttr = getAttr(compile_file, parser),
			_getExpr = getExpr(compile_file, parser),
			_getEval = getEval(compile_file, parser),
			attrs;

		var vdom = options.mode === 'vdom';
		var isComment = false;
		var isAttributes = false;
		var attributeName = false;
		var vdomVar = 0;
		var vdomVarMax = vdomVar;
		var vdomScopes = [];
		var vdomChildrenExists = {0: true};

		function addVTag(name, parsedAttrs) {
			checkVChildren();

			vdomVar++;

			if (vdomVar > vdomVarMax) {
				vdomVarMax = vdomVar;
				section.source += 'var ';
			}

			section.source += `__v${vdomVar} = {tag: ${name}`;

			if (parsedAttrs && Object.keys(parsedAttrs.attrs).length) {
				section.source += `, attrs: {` + Object.keys(parsedAttrs.attrs).map(key => {
					return `"${key}": "${parsedAttrs.attrs[key]}"`;
				}).join(', ') + '}';
			}

			section.source += '};';
			section.source += `__v${vdomVar - 1}.children.push(__v${vdomVar});`;
		}

		function checkVChildren() {
			if (!vdomChildrenExists[vdomVar]) {
				vdomChildrenExists[vdomVar] = true;
				section.source += `__v${vdomVar}.children = __v${vdomVar}.children || [];`;
			}
		}

		function newVScope(local) {
			vdomScopes.push([vdomVar, vdomVarMax, vdomChildrenExists]);

			if (local) {
				vdomChildrenExists = Object.assign({}, vdomChildrenExists);
			} else {
				vdomVar = 0;
				vdomVarMax = vdomVar;
				vdomChildrenExists = {0: true};
			}

			return 'var __v0 = {children: []};';
		}

		function popVScope(local) {
			const scope = vdomScopes.pop();
			vdomVar = scope[0];
			vdomVarMax = scope[1];
			vdomChildrenExists = scope[2];
			return 'return __v0;'
		}

		function should_inline_get_blocks() {
			return inline_get_blocks || stack.indexOf('set') !== -1 || stack.indexOf('param') !== -1;
		}

		function closetag(name, opentag){
			if (!opentag){
				return false;
			}
			if (stack.indexOf('attributes') >= 0 || name === 'attributes'){
				return opentag;
			}

			if (vdom) {
				if (stack[stack.length - 1] === 'shorttag') {
					vdomChildrenExists[vdomVar] = false;
					vdomVar--;
				}
			} else if (stack[stack.length - 1] === 'shorttag'){
				section.source += '__fest_pushstr(__fest_context,"/>");';
			} else if (stack[stack.length - 1] === 'element') {
				section.source += '__fest_element=__fest_element_stack[__fest_element_stack.length-1];';
				section.source += '__fest_pushstr(__fest_context,__fest_element in __fest_short_tags?"/>":">");';
			} else {
				section.source += '__fest_pushstr(__fest_context,">");';
			}
			return false;
		}

		function flush(name) {
			var section = {
				source: '',
				name: name
			};
			output.sections.push(section);
			return section;
		}

		parser.onopentag = function (node) {
			push_debug_info(section, parser, file, node.name, options.debug);

			opentag = closetag(node.local, opentag);

			if (node.local === 'var') {
				vdom = false;
			}

			if (node.local === 'attributes') {
				isAttributes = true;

				if (vdom) {
					section.source += `(__v${vdomVar}.attrs === void 0) && (__v${vdomVar}.attrs = {});`;
				}
			}

			if (!opentag && node.local == 'attributes') {
				throw new Error(file + "\n" + errorMessage('fest:attributes must be the first child', parser.line, compile_file));
			}

			if (node.local == 'attributes' && stack[stack.length - 1] == 'attributes') {
				throw new Error(file + "\n" + errorMessage('fest:attributes cannot be nested', parser.line, compile_file));
			}

			if (node.local == 'param' && stack[stack.length - 1] != 'get') {
				throw new Error(file + "\n" + errorMessage('fest:param must be inside fest:get', parser.line, compile_file));
			}
			if (node.local == 'set' && should_inline_get_blocks()) {
				throw new Error(file + "\n" + errorMessage('fest:set cannot be defined in another fest:set or fest:param', parser.line, compile_file));
			}
			if (['include', 'set', 'get'].indexOf(node.local) !== -1 && stack.indexOf('var') !== -1) {
				throw new Error(file + "\n" + errorMessage('fest:' + node.local +' is not allowed inside fest:var', parser.line, compile_file));
			}

			if (node.ns[node.prefix] != fest_ns){
				attrs = compileAttributes(node.attributes);

				for (var i = 0; i < attrs.expr.length; i++) {
					section.source += 'try{__fest_attrs[' + i + ']=__fest_escapeHTML(' + _getExpr(attrs.expr[i], 'expression #' + (i + 1) + ' in attribute "' + attrs.name[i] + '"') + ')}catch(e){__fest_attrs[' + i + ']=""; __fest_log_error(e.message);}';
				}

				stack.push('html:' + node.name);
				stack.push(node.name in short_tags ? 'shorttag' : 'tag');
				opentag = true;

				if (vdom) {
					addVTag(`"${node.name}"`, attrs);
				} else {
					section.source += '__fest_pushstr(__fest_context,"<' + node.name + attrs.text + '");';
				}
				return;
			} else {
				fstack.push(node);
			}
			stack.push(node.local);

			switch (node.local){
				case 'element':
					opentag = true;
					if (node.attributes.select) {
						section.source += 'try{__fest_element=' + _getAttr(node, 'select', 'expr') + ';';
					} else{
						section.source += 'try{__fest_element=' + compileExpr(node.attributes.name, _getExpr).text + ';';
					}
					section.source += 'if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}';
					section.source += '}catch(e){__fest_element="div";__fest_log_error(e.message);}';

					if (vdom) {
						addVTag('__fest_element');
					} else {
						section.source += '__fest_element_stack.push(__fest_element);';
						section.source += '__fest_pushstr(__fest_context,"<" + __fest_element);';
					}
					return;

				case 'template':
					var context_name = (node.attributes.context_name ? _getAttr(node, 'context_name', 'var') : '__fest_context');
					if (context_name !== '__fest_context'){
						section.source += 'var ' + context_name + '=__fest_context;';
					}
					return;

				case 'doctype':
					if (vdom) {
						section.source += `__v${vdomVar}.children.push("<!DOCTYPE ");`;
					} else {
						section.source += '__fest_pushstr(__fest_context,"<!DOCTYPE ");';
					}
					return;

				case 'attribute':
					let attrExpr = compileExpr(node.attributes.name, _getExpr);
					let valExpr = node.attributes.value ? compileExpr(node.attributes.value, _getExpr) : null;

					if (vdom) {
						let name = '__fest_select';
						let value = '__fest_select';

						if (attrExpr.containsExpr) {
							name = '__vattrName';
							section.source += '__vattrName = null;' +
								'try{__fest_select=' + attrExpr.text + ';__vattrName = __fest_select;}catch(e){__fest_select="";__fest_log_error(e.message)}';
						} else {
							name = JSON.stringify(_getAttr(node, 'name'));
						}

						attributeName = name;

						if (attrExpr.containsExpr) {
							node.exprAttrName = true;
							section.source += `if (${name}) {`;
						}

						if (valExpr) {
							if (valExpr.containsExpr) {
								section.source += 'try{__fest_select=' + valExpr.text + '}catch(e){__fest_select="";__fest_log_error(e.message)}';
								section.source += '__fest_pushstr(__fest_context,__fest_select);';
							} else {
								value = JSON.stringify(escapeJS(_getAttr(node, 'value')));
							}
							section.source += `__v${vdomVar}.attrs[${name}] = ${value};`;
						} else {
							section.source += `__v${vdomVar}.attrs[${name}] = "";`;
						}

						return;
					}


					if (attrExpr.containsExpr) {
						section.source += 'try{__fest_select=' + attrExpr.text + '}catch(e){__fest_select="";__fest_log_error(e.message)}';
						section.source += 'if(__fest_select!==""){';
						node.conditional = true;
						section.source += '__fest_pushstr(__fest_context," " + __fest_select + "=\\"");' ;
					} else {
						section.source += '__fest_pushstr(__fest_context," ' + escapeJS(_getAttr(node, 'name')) + '=\\"");';
					}

					if (valExpr) {
						if (valExpr.containsExpr){
							section.source += 'try{__fest_select=' + valExpr.text + '}catch(e){__fest_select="";__fest_log_error(e.message)}';
							section.source += '__fest_pushstr(__fest_context,__fest_select);';
						} else{
							section.source += '__fest_pushstr(__fest_context,"' + escapeJS(_getAttr(node, 'value')) + '");';
						}
					}
					return;

				case 'comment':
					isComment = true;
					if (vdom) {
						addVTag('"!"');
					} else {
						section.source += '__fest_pushstr(__fest_context,"<!--");';
					}
					return;

				case 'cdata':
					if (vdom) {
						checkVChildren();
						section.source += `__v${vdomVar}.children.push("<![CDATA[");`;
					} else {
						section.source += '__fest_pushstr(__fest_context,"<![CDATA[");';
					}
					return;

				case 'text':
					if (node.attributes.value) {
						if (vdom) {
							if (isAttributes) {
								section.source += `__v${vdomVar}.attrs[${attributeName}] += "${escapeJS(_getAttr(node, 'value'))}";`;
							} else {
								section.source += `__v${vdomVar}.children.push("${escapeJS(_getAttr(node, 'value'))}");`;
							}
						} else {
							section.source += '__fest_pushstr(__fest_context,"' + escapeJS(_getAttr(node, 'value')) + '");';
						}
					}
					return;

				case 'lf':
				case 'space':
					let chr = (node.local == 'lf' ? '\\n' : ' ');

					if (vdom) {
						if (isAttributes) {
							section.source += `__v${vdomVar}.attrs[${attributeName}] += "${chr}";`;
						} else {
							section.source += `__v${vdomVar}.children.push("${chr}");`;
						}
					} else {
						section.source += '__fest_pushstr(__fest_context,"'+chr+'");';
					}
					return;

				case 'if':
					newVScope(true);
					section.source += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false;__fest_log_error(e.message);}';
					section.source += 'if(__fest_if){';
					return;

				case 'choose':
					choose[choose.length] = 0;
					return;

				case 'when':
					newVScope(true);
					choose[choose.length - 1]++;
					section.source += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false;__fest_log_error(e.message);}';
					section.source += 'if(__fest_if){';
					return;

				case 'otherwise':
					newVScope(true);
					return;

				case 'value':
					node.__fest_output = node.attributes.output ? node.attributes.output.value : 'html';

					if (!node.attributes.safe){
						section.source += 'try{';
					}

					if (vdom) {
						checkVChildren();

						if (isAttributes) {
							section.source += `__v${vdomVar}.attrs[${attributeName}] += (`;
						} else {
							section.source += `__v${vdomVar}.children.push(`;
						}

						if (node.__fest_output === 'js') {
							section.source += '__fest_escapeJS('
						} else if(node.__fest_output === 'html' && stack.indexOf('html:script') != -1) {
							section.source += '__fest_escapeJS(';
						} else if(node.__fest_output === 'js') {
							section.source += '__fest_escapeJS(';
						} else if(node.__fest_output === 'json') {
							output.json = true;
							section.source += '__fest_escapeJSON(';
						} else if (node.__fest_output !== 'text') {
							section.source += '__fest_escapeHTML('
						}

					} else if (node.__fest_output === 'text'){
						section.source += '__fest_pushstr(__fest_context,';
					} else if(node.__fest_output === 'html' && stack.indexOf('html:script') != -1) {
						section.source += '__fest_pushstr(__fest_context,__fest_escapeJS(';
					} else if(node.__fest_output === 'js') {
						section.source += '__fest_pushstr(__fest_context,__fest_escapeJS(';
					} else if(node.__fest_output === 'json') {
						output.json = true;
						section.source += '__fest_pushstr(__fest_context,__fest_escapeJSON(';
					} else{
						section.source += '__fest_pushstr(__fest_context,__fest_escapeHTML(';
					}
					return;
				case 'script':
					if (!node.attributes.safe){
						section.source += 'try{';
					}
					if (node.attributes.src){
						var src =
						section.source += _getEval(readFileSync(resolveFilename(node.attributes.src.value), 'utf-8'));
					}
					return;

				case 'call':
					const expr = _getAttr(node, 'name', 'expr') + '(' + _getAttr(node, 'data', 'expr') + ')';

					if (vdom) {
						section.source += `try{__v${vdomVar}.children.push({tag: '<', children: ${expr}}); }catch(e){__fest_log_error(e.message)}`;
					} else {
						section.source += 'try{' + '__fest_pushstr(__fest_context,' + expr + ')}catch(e){__fest_log_error(e.message)}';
					}
					return;

				case 'insert':
					if (vdom) {
						checkVChildren();
						section.source += `__v${vdomVar}.children.push("${escapeJS(readFileSync(resolveFilename(_getAttr(node, 'src')), 'utf-8'))}");`;
					} else {
						section.source += '__fest_pushstr(__fest_context,"' + escapeJS(readFileSync(resolveFilename(_getAttr(node, 'src')), 'utf-8')) + '");';
					}
					return;

				case 'each':
					section.source += 'var ' + _getAttr(node, 'index', 'var') + (node.attributes.value ? ',' + _getAttr(node, 'value', 'var')  : '') + ',__fest_iterator' + counters.counter + ';';
					section.source += 'try{__fest_iterator' + counters.counter + '=' + _getAttr(node, 'iterate', 'expr') + ' || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}';
					section.source += 'for(' + _getAttr(node, 'index') + ' in __fest_iterator' + counters.counter + '){';
					if (node.attributes.value) {
						section.source += _getAttr(node, 'value') + '=__fest_iterator' + counters.counter + '[' + _getAttr(node, 'index') + '];';
					}
					counters.counter++;
					return;
				case 'for':
					section.source += 'var ' + _getAttr(node, 'index', 'var') + (node.attributes.value ? ',' + _getAttr(node, 'value', 'var')  : '') + ',__fest_to' + counters.counter + (node.attributes.iterate ? '' : ',__fest_from' + counters.counter) + ',__fest_iterator' + counters.counter + ';';
					if (node.attributes.iterate){
						section.source += 'try{__fest_iterator' + counters.counter + '=' + _getAttr(node, 'iterate', 'expr') + ' || [];';
						section.source += '__fest_to' + counters.counter + '=__fest_iterator' + counters.counter + '.length;';
						section.source += '}catch(e){__fest_iterator' + counters.counter + '=[];__fest_to' + counters.counter + '=0;__fest_log_error(e.message);}';
						section.source += 'for(' + _getAttr(node, 'index') + '=0;' + _getAttr(node, 'index') + '<__fest_to' + counters.counter + ';' + node.attributes.index.value + '++){';
						if (node.attributes.value) {
							section.source += _getAttr(node, 'value') + '=__fest_iterator' + counters.counter + '[' + _getAttr(node, 'index') + '];';
						}
					} else {
						section.source += 'try{__fest_from' + counters.counter + '=' + _getAttr(node, 'from', 'expr') + ';';
						section.source += '__fest_to' + counters.counter + '=' + _getAttr(node, 'to', 'expr') + ';}catch(e){__fest_from' + counters.counter + '=0;__fest_to' + counters.counter + '=0;__fest_log_error(e.message);}';
						section.source += 'for(' + _getAttr(node, 'index') + ' = __fest_from' + counters.counter + ';' + _getAttr(node, 'index') + '<=__fest_to' + counters.counter + ';' + _getAttr(node, 'index') + '++){';
					}
					counters.counter++;
					return;
				case 'set':
					// if (options.mode === 'function') throw new Error(file + "\n" + errorMessage('fest:set is not allowed in async mode', parser.line, compile_file)); // TODO warning
					section = flush(_getAttr(node, 'name'));

					if (node.attributes.test){
						section.source += 'try{__fest_if=' + _getAttr(node, 'test', 'expr') + '}catch(e){__fest_if=false;__fest_log_error(e.message)}';
						section.source += 'if(__fest_if){';
					}

					section.source += '__fest_blocks' + getName(_getAttr(node, 'name')) + '=function(params){';

					if (vdom) {
						section.source += newVScope();
					} else {
						section.source += 'var __fest_buf=""' + (options.mode === 'function' ? ',__fest_pushstr=function(_,s){__fest_buf+=s}' : '') + ';';
					}
					return;

				case 'param':
					fstack[fstack.length - 2].__params = true;
					section.source += '__fest_params' + getName(_getAttr(node, 'name')) + '=__fest_param(function(){';

					if (vdom) {
						section.source += newVScope();
					} else {
						section.source += 'var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params' + (options.mode === 'function' ? ',__fest_pushstr=function(_,s){__fest_buf+=s}' : '') + ';';
					}
					return;

				case 'get':
					// if (options.mode === 'function') throw new Error(file + "\n" + errorMessage('fest:set is not allowed in async mode', parser.line, compile_file)); // TODO warning
					if (node.attributes.select){
						section.source += 'try{__fest_select=' + _getAttr(node, 'select', 'expr') + '}catch(e){__fest_select="";__fest_log_error(e.message)}';
						output.disable_sgo = true;
					} else{
						var expression = compileExpr(node.attributes.name, _getExpr);
						if (expression.containsExpr){
							section.source += 'try{__fest_select=' + expression.text + '}catch(e){__fest_select="";__fest_log_error(e.message)}';
							output.disable_sgo = true;
						} else{
							section.source += '__fest_select="' + escapeJS(_getAttr(node, 'name')) + '";';
							output.uses[_getAttr(node, 'name')] = true;
						}
					}
					section.source += '__fest_params={};';
					if (node.attributes.params){
						section.source += 'try{__fest_extend(__fest_params,' + _getExpr(_getAttr(node, 'params')) + ')}catch(e){__fest_log_error(e.message)}';
					}
					return;
				case 'include':
					// TODO subtemplates is named functions
					var inner_context_name = '__fest_context';
					if (node.attributes.context){
						inner_context_name = '__fest_context' + counters.counter;
						section.source += 'var ' + inner_context_name + ';try{' + inner_context_name + '=' + _getAttr(node, 'context', 'expr') + '}catch(e){' + inner_context_name + '={};__fest_log_error(e.message)};';
						counters.counter++;
					}
					section.source += '(function(__fest_context){';
					//_compile(dirname(file) + '/' + _getAttr(node, 'src'), options, output);
					_compile({
						file: resolveFilename(_getAttr(node, 'src')),
						context_name: context_name,
						options: options,
						output: output,
						inline_get_blocks: should_inline_get_blocks()
					});
					section = flush();
					section.source += '})(' + inner_context_name +');';
					return;
				case 'plural':
					// if (!options.plural) {
					// throw new Error(file + "\n" + errorMessage('plural function is not defined', parser.line, compile_file));
					// }
					output.plural = true;
					section.source += 'try{__fest_select=' + _getAttr(node, 'select', 'expr') + '}catch(e){__fest_select=0;__fest_log_error(e.message)}';
					section.source += '__fest_params=[];';
					return;
				case 'var':
					section.source += 'var ' + _getAttr(node, 'name', 'var') + '=' +
						(
							node.attributes.select ? escapeJS(_getAttr(node, 'select', 'expr')) : '(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params' + (options.mode === 'function' ? ',__fest_pushstr=function(_,s){__fest_buf+=s}' : '') + ';'
						);
					return;
			}
		};

		parser.onclosetag = function () {
			var node = this.tag;

			opentag = closetag(node.local, opentag);

			if (node.local === 'attributes') {
				isAttributes = false;
			}

			if (node.local === 'var') {
				vdom = options.mode === 'vdom';
			}

			stack.pop();

			if (node.ns[node.prefix] != fest_ns){
				stack.pop();

				if (!(node.name in short_tags)){
					if (vdom) {
						vdomChildrenExists[vdomVar] = false;
						vdomVar--;
					} else {
						section.source += '__fest_pushstr(__fest_context,"</' + node.name + '>");';
					}
				}

				return;
			} else {
				fstack.pop();
			}
			switch (node.local){
				case 'element':
					if (vdom) {
						vdomChildrenExists[vdomVar] = false;
						vdomVar--;
					} else {
						section.source += '__fest_element = __fest_element_stack[__fest_element_stack.length - 1];';
						section.source += 'if(!(__fest_element in __fest_short_tags)){__fest_pushstr(__fest_context,"</" + __fest_element + ">")}';
						section.source += '__fest_element_stack.pop();';
					}
					return;

				case 'doctype':
					if (vdom) {
						section.source += `__v${vdomVar}.children.push(">");`;
					} else {
						section.source += '__fest_pushstr(__fest_context,">");';
					}
					return;

				case 'comment':
					isComment = false;
					section.source += vdom ? '' : '__fest_pushstr(__fest_context,"-->");';
					return;

				case 'attribute':
					section.source += vdom ? '' : '__fest_pushstr(__fest_context,"\\"");';

					node.conditional && (section.source += '}');
					node.exprAttrName && (section.source += '}');
					return;

				case 'cdata':
					if (vdom) {
						section.source += `__v${vdomVar}.children.push("]]>");`;
					} else {
						section.source += '__fest_pushstr(__fest_context,"]]>");';
					}
					return;

				case 'if':
					popVScope(true);
					section.source += '}';
					return;

				case 'otherwise':
					popVScope(true);
					return;

				// case 'foreach':
				case 'each':
				case 'for':
					section.source += '}';
					return;

				case 'choose':
					(function(length){
						for (var i = 0; i < length; i++){
							section.source += '}';
						}
					})(choose.pop());
					return;

				case 'when':
					popVScope(true);
					section.source += '}else{';
					return;

				case 'value':
					if (node.__fest_output !== 'text'){
						section.source += ')';
					}
					if (!node.attributes.safe){
						section.source += ')}catch(e){__fest_log_error(e.message + "' + this.line + '");}';
					} else {
						section.source += ');';
					}
					return;
				case 'set':
					section.source += vdom ? popVScope() : 'return __fest_buf;';
					section.source += '};';

					if (node.attributes.test){
						section.source += '}';
					}
					section = flush();
					return;
				case 'param':
					section.source += vdom ? popVScope() : 'return __fest_buf;';
					section.source += '});';
					return;
				case 'get':
					if (vdom) {
						checkVChildren();

						if (should_inline_get_blocks()) {
							section.source += '__fest_fn = __fest_blocks[__fest_select];';
							section.source += `__fest_fn && __v${vdomVar}.children.push(__fest_call(__fest_fn,__fest_params,${(node.__params ? 'true' : 'false')}));`;
						} else if (isAttributes) {
							section.source += `__fest_chunks.push({node: __v${vdomVar}, attr: ${attributeName},name:__fest_select,params:__fest_params,cp:${node.__params ? 'true' : 'false'}});`;
						} else {
							section.source += `__v${vdomVar}.children.push(__vnode = {});`;
							section.source += '__fest_chunks.push({node: __vnode, name:__fest_select,params:__fest_params,cp:' + (node.__params ? 'true' : 'false') + '});';
						}
					} else if (should_inline_get_blocks()) {
						section.source += '__fest_fn=__fest_blocks[__fest_select];';
						section.source += 'if (__fest_fn)' + (
							options.mode === 'array' ? '__fest_buf.push(__fest_call(__fest_fn,__fest_params,' + (node.__params ? 'true' : 'false') + '));' : '__fest_buf+=__fest_call(__fest_fn,__fest_params,' + (node.__params ? 'true' : 'false') + ');' );
					} else {
						section.source += '__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:' + (node.__params ? 'true' : 'false') + '});';
						section.source += '__fest_buf="";';
					}
					return;
				case 'script':
					if (!node.attributes.safe){
						section.source += '}catch(e){__fest_log_error(e.message);}';
					}
					return;
				case 'template':
					templateClosed = true;
					return;
				case 'plural':
					const expr = '__fest_format(__fest_params[__fest_plural(__fest_select)], __fest_select)';

					if (vdom) {
						section.source += `__v${vdomVar}.children.push(${expr});`;
					} else {
						section.source += `__fest_pushstr(__fest_context,${expr});`;
					}
					return;
				case 'var':
					if (!node.attributes.select) {
						section.source += 'return __fest_buf;';
						section.source += '})()';
					}
					section.source += ';';
					return;
			}
		};


		parser.ontext = parser.oncdata = function (text) {
			opentag = closetag('text', opentag);
			if (stack[stack.length - 1] === 'script') {
				section.source += _getEval(text);
			} else if (stack[stack.length - 1] === 'get') {
				section.source += 'try{__fest_params=' + _getExpr(text) + '}catch(e){__fest_log_error(e.message)}';
			} else if (stack[stack.length - 1] === 'params') {
				section.source += 'try{__fest_extend(__fest_params,' + _getExpr(text) + ')}catch(e){__fest_log_error(e.message)}';
			} else if (stack[stack.length - 1] === 'value') {
				section.source += _getExpr(text);
			} else if (stack[stack.length - 1] === 'plural') {
				var plurals = text.match(/(\\.|[^|])+/g).map(function (chunk) {
					return chunk.replace(/\\\|/g, '|');
				});
				if ('nplurals' in output) {
					if (output.nplurals != plurals.length) throw new Error(errorMessage('inconsistent number of plural forms in "' + text + '" (expected ' + output.nplurals + ' but got ' + plurals.length + ')', parser.line, compile_file));
				} else {
					output.nplurals = plurals.length;
				}
				section.source += '__fest_params = ["' + plurals.map(escapeJS).join('","') + '"];';
			} else {
				if (vdom) {
					if (isAttributes) {
						section.source += `__v${vdomVar}.attrs[${attributeName}] += "${escapeJS(text)}";`;
					} else if (isComment) {
						section.source += `__v${vdomVar}.children = "${escapeJS(text)}";`;
					} else {
						checkVChildren();
						section.source += `__v${vdomVar}.children.push("${escapeJS(text)}");`;
					}
				} else {
					section.source += '__fest_pushstr(__fest_context,"' + escapeJS(text) + '");';
				}
			}
		};
		parser.onend = function () {
			if (compile_file && !templateClosed) {
				throw new Error(file + "\n" + errorMessage('fest:template is not closed', parser.line, compile_file));
			}
		};

		if (compile_file){
			parser.write(compile_file);
		}
		parser.close();

		return output;
	}

	function finish_compile(file, options, name){
		var template;
		name = name || '';

		options = options || {beautify: true, nothrow: false};
		options.sax = options.sax || {trim:true, xmlns:true};
		options.sax.strict = options.sax.strict || true;
		options.mode = options.mode || 'string'; // `function` for __fest_pushstr with +=, `array` for push() and join(), `string` for +=
		options.events = options.events || {};
		// options.messages // messages dictionary
		// options.plural   // plural function

		function build_template(output) {

			var source = '';

			output.sections.forEach(function (section) {
				if (output.disable_sgo || section.name === undefined || output.uses[section.name]) {
					source += section.source;
				}
			});

			if (options.mode === 'array') {
				source = source
					.replace(/__fest_pushstr\(__fest_context,/g, '__fest_buf.push(')
					.replace(/"\);__fest_buf\.push\("/g, '')
					.replace(/__fest_buf=""/g, '__fest_buf=[]')
					.replace(/return __fest_buf/g, 'return __fest_buf.join("")') // set-blocks and template must return joined buffer
					.replace(/__fest_chunks.push\(__fest_buf/g, '__fest_chunks.push(__fest_buf.join("")'); // join buffer before pushing chunk
			} else if (options.mode === 'string') {
				source = source
					.replace(/__fest_pushstr\(__fest_context,/g, '__fest_buf+=(')
					.replace(/"\);__fest_buf\+=\("/g, '');
			} else if (options.mode === 'vdom') {
				source = source
					.replace(/(__v\d+.attrs\[".*?"\]) = "";\1 \+= /g, '$1 = ')
					.replace(/__fest_pushstr\(__fest_context,/g, '__fest_buf+=(')
					.replace(/"\);__fest_buf\+=\("/g, '')
				;

				let prevSource;
				do {
					prevSource = source;
					//source = source.replace(/(__v\d+.children.push\()(.*?)\);\1/g, "$1$2,");
				} while (source !== prevSource);
			} else {
				source = source.replace(/"\)\;__fest_pushstr\(__fest_context,"/g, '');
			}

			if (!options.plural && output.nplurals) {
				options.plural = output.nplurals === 3 ? function (n) {
					return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
				} : function (n) {
					return n === 1 ? 0 : 1;
				};
			}

			template =
				'function ' + name + '(__fest_context){' +
					'"use strict";' +
					'var __fest_self=this,' +
						'__fest_buf=' + (options.mode === 'array' ? '[]' : '""')  + ',' +
						'__fest_chunks=[],' +
						'__fest_chunk,' +
						'__fest_attrs=[],' +
						'__fest_select,' +
						'__fest_if,' +
						'__fest_iterator,' +
						'__fest_to,' +
						'__fest_fn,' +
						'__fest_html=' + (options.mode === 'array' ? '[]' : '""')  + ',' +
						'__fest_blocks={},' +
						'__fest_params,' +
						'__fest_element,' +
						'__fest_debug_file="",' +
						'__fest_debug_line="",' +
						'__fest_debug_block="",' +
						'__fest_htmlchars=/' + htmlchars.source + '/g,' +
						'__fest_htmlchars_test=/' + htmlchars.source + '/,' + // We need another regex because String.replace() won't change lastIndex to 0
						'__fest_short_tags = ' + JSON.stringify(short_tags) + ',' +
						'__fest_element_stack = [],' +
						'__fest_htmlhash=' + JSON.stringify(htmlhash) + ',' +
						'__fest_jschars=/' + jschars.source + '/g,' +
						'__fest_jschars_test=/' + jschars.source + '/,' +
						'__fest_jshash=' + JSON.stringify(jshash) + ',' +
						(options.mode === 'vdom' ? '__v0 = {children: []},__vnode,__vattrName,' : '') +
						'i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},' +
						'___fest_log_error;' +
					(options.mode === 'function' ? 'function __fest_pushstr(_,s){__fest_buf+=s}' : '') +
					'if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};' +
					'function __fest_log_error(msg){___fest_log_error(msg+"\\nin block \\""+__fest_debug_block+"\\" at line: "+__fest_debug_line+"\\nfile: "+__fest_debug_file)}' + // TODO remove debug info for production code
					'function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}' +
					'function __fest_replaceJS(chr){return __fest_jshash[chr]}' +
					'function __fest_extend(dest, src){' +
						'for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];' +
					'}' +
					'function __fest_param(fn){fn.param=true;return fn}' +
					'function __fest_call(fn, params,cp){' +
						'if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();' +
						'return fn.call(__fest_self,params)' +
					'}' +
					'function __fest_escapeJS(s){' +
						'if (typeof s==="string") {' +
							'if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);' +
						'} else if (typeof s==="undefined")return "";' +
						'return s;}' +
					'function __fest_escapeHTML(s){' +
						'if (typeof s==="string") {' +
							'if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);' +
						'} else if (typeof s==="undefined")return "";' +
						'return s;}' +
					(output.json ? (
						'var __fest_jsonchars=/[<>]/g,' +
						'__fest_jsonchars_test=/[<>]/,' +
						'__fest_jsonhash={' +
							'"<" : "\\\\u003C",'  +
							' ">" : "\\\\u003E"'  +
						'};' +
						'function __fest_replaceJSON(chr) {return __fest_jsonhash[chr];}' +
						'function __fest_escapeJSON(s){' +
							's = JSON.stringify(s);' +
							'if(__fest_jsonchars_test.test(s))' +
								'return s.replace(__fest_jsonchars, __fest_replaceJSON);' +
							'return s; ' +
						'}') : '') +
					(output.plural && options.plural
						? (
							'var __fest_plural=' + options.plural.toString() + ';' +
							'var __fest_format=function(s,v){' +
								'return s.replace(/%./g,function(g){' +
									'return ("%s"===g)?v:"%";' +
								'});' +
							'};'
						) : '') +
					source + (options.mode === 'vdom' ?
					'__fest_iterator=__fest_chunks.length;' +
					'while (__fest_iterator--) {' +
					'  __fest_chunk = __fest_chunks[__fest_iterator];' +
					'  if (__fest_chunk) {' +
					'    __fest_fn = __fest_blocks[__fest_chunk.name];' +
					'    if (__fest_fn) {' +
					'       __fest_select = __fest_call(__fest_fn,__fest_chunk.params, __fest_chunk.cp).children;' +
					'       if (__fest_chunk.attr) {' +
					'          __fest_chunk.node.attrs[__fest_chunk.attr] += __fest_select.join("");' +
					'       } else {' +
					'          __fest_chunk.node.children = __fest_select;' +
					'       }' +
					'    }' +
					'  }' +
					'}' +
					'return __v0;'
					:
					'__fest_to=__fest_chunks.length;' +
					'if (__fest_to) {' +
						'__fest_iterator = 0;' +
						'for (;__fest_iterator<__fest_to;__fest_iterator++) {' +
							'__fest_chunk=__fest_chunks[__fest_iterator];'+
							'if (typeof __fest_chunk==="string") {' +
								(options.mode === 'array' ? '__fest_html.push(__fest_chunk);' : '__fest_html+=__fest_chunk;') +
							'} else {' +
								'__fest_fn=__fest_blocks[__fest_chunk.name];' +
								'if (__fest_fn) ' +
									(options.mode === 'array' ? '__fest_html.push(__fest_call(__fest_fn,__fest_chunk.params, __fest_chunk.cp));' : '__fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);') +
							'}' +
						'}' +
						(options.mode === 'array' ? '__fest_html.push(__fest_buf.join(""));return __fest_html.join("")' : 'return __fest_html+__fest_buf;') +
					'} else {' +
						'return __fest_buf' + (options.mode === 'array' ? '.join("")' : '') + ';' +
					'}') +
				'}';
		}

		try {
			build_template(_compile({file:file, context_name:'__fest_context', options:options}));
			if (options.beautify) template = js_beautify(template);
		} catch (e) {
			if (options && !options.nothrow) {
				throw e;
			}
			__log_error(e.message);
			template = 'function() { return "' + escapeJS(e.message) + '"; }';
		}

		return template;
	}
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = finish_compile;
		module.exports.short_tags = short_tags;
	} else {
		return finish_compile;
	}
})();
