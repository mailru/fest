;(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['element']=function(__fest_context) {
    "use strict";
    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk, __fest_attrs = [],
        __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_html = "",
        __fest_blocks = {},
        __fest_params, __fest_element, __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_short_tags = {
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
        },
        __fest_element_stack = [],
        __fest_htmlhash = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;"
        },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_jshash = {
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
        },
        ___fest_log_error;
    if (typeof __fest_error === "undefined") {
        ___fest_log_error = (typeof console !== "undefined" && console.error) ?
        function() {
            return Function.prototype.apply.call(console.error, console, arguments)
        } : function() {};
    } else {
        ___fest_log_error = __fest_error
    };

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
        for (var i in src) if (src.hasOwnProperty(i)) dest[i] = src[i];
    }
    function __fest_param(fn) {
        fn.param = true;
        return fn
    }
    function __fest_call(fn, params, cp) {
        if (cp) for (var i in params) if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
        return fn.call(__fest_self, params)
    }
    function __fest_escapeJS(s) {
        if (typeof s === "string") {
            if (__fest_jschars_test.test(s)) return s.replace(__fest_jschars, __fest_replaceJS);
        } else if (typeof s === "undefined") return "";
        return s;
    }
    function __fest_escapeHTML(s) {
        if (typeof s === "string") {
            if (__fest_htmlchars_test.test(s)) return s.replace(__fest_htmlchars, __fest_replaceHTML);
        } else if (typeof s === "undefined") return "";
        return s;
    }
    var json = __fest_context;
    try {
        var name = 'div';
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_element = name;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_buf += (" class=\"foo");
    try {
        __fest_if = true
    } catch (e) {
        __fest_if = false;
        __fest_log_error(e.message);
    }
    if (__fest_if) {
        __fest_buf += (" bar");
    }
    __fest_buf += ("\"");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = name;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : "><i></i>");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = name;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">foo");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        var name = 'hr';
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_element = name;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        var name = 'img';
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_element = name;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_buf += (" src=\"foo\"");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        var name1 = 'div';
        var name2 = 'span';
        var name3 = 'br';
        var nameX2 = function() {};
        var name5 = 'span';
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_element = name1;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    try {
        __fest_element = name2;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">foo");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    __fest_buf += ("bar");
    try {
        __fest_element = name3;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = name4;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_buf += (" class=\"foo\"");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = nameX;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = nameX2;
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = (name5);
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = "d" + ((true) ? 'i' : '') + "v";
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = "span";
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">login");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        var variable = 'table';
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_element = (variable);
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">table code");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = "d" + ((true) ? 'i' : 'a') + "v";
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">expr code");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    try {
        __fest_element = (variable2);
        if (typeof __fest_element !== "string") {
            __fest_log_error("Element name must be a string");
            __fest_element = "div"
        }
    } catch (e) {
        __fest_element = "div";
        __fest_log_error(e.message);
    }
    __fest_element_stack.push(__fest_element);
    __fest_buf += ("<" + __fest_element);
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    __fest_buf += (__fest_element in __fest_short_tags ? "/>" : ">div code");
    __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
    if (!(__fest_element in __fest_short_tags)) {
        __fest_buf += ("</" + __fest_element + ">")
    }
    __fest_element_stack.pop();
    __fest_to = __fest_chunks.length;
    if (__fest_to) {
        __fest_iterator = 0;
        for (; __fest_iterator < __fest_to; __fest_iterator++) {
            __fest_chunk = __fest_chunks[__fest_iterator];
            if (typeof __fest_chunk === "string") {
                __fest_html += __fest_chunk;
            } else {
                __fest_fn = __fest_blocks[__fest_chunk.name];
                if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
            }
        }
        return __fest_html + __fest_buf;
    } else {
        return __fest_buf;
    }
}})();