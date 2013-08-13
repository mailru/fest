;(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['block_with_params.en_US']=function(__fest_context) {
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
    __fest_blocks.status = function(params) {
        var __fest_buf = "";
        __fest_buf += ("500");
        return __fest_buf;
    };
    __fest_select = "page";
    __fest_params = {};
    __fest_params.doctype = __fest_param(function() {
        var __fest_buf = "",
            __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
        __fest_buf += ("html");
        return __fest_buf;
    });
    try {
        __fest_extend(__fest_params, {
            title: json.title
        })
    } catch (e) {
        __fest_log_error(e.message)
    }
    __fest_params.content = __fest_param(function() {
        var __fest_buf = "",
            __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
        __fest_buf += ("<article>");
        try {
            __fest_if = json.title
        } catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            __fest_buf += ("<h1>");
            try {
                __fest_buf += (__fest_escapeHTML(json.title))
            } catch (e) {
                __fest_log_error(e.message + "13");
            }
            __fest_buf += ("</h1>");
        }
        __fest_buf += ("<p>");
        __fest_select = "status";
        __fest_params = {};
        __fest_fn = __fest_blocks[__fest_select];
        if (__fest_fn) __fest_buf += __fest_call(__fest_fn, __fest_params, false);
        __fest_buf += ("</p></article>");
        return __fest_buf;
    });
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: true
    });
    __fest_buf = "";
    __fest_blocks.page = function(params) {
        var __fest_buf = "";
        __fest_buf += ("<!DOCTYPE ");
        try {
            __fest_buf += (__fest_escapeHTML(params.doctype))
        } catch (e) {
            __fest_log_error(e.message + "20");
        }
        __fest_buf += ("><title>");
        try {
            __fest_buf += (__fest_escapeHTML(params.title))
        } catch (e) {
            __fest_log_error(e.message + "21");
        }
        __fest_buf += ("</title><body>");
        try {
            __fest_buf += (params.content)
        } catch (e) {
            __fest_log_error(e.message + "23");
        }
        __fest_buf += ("</body>");
        return __fest_buf;
    };
    __fest_blocks.status = function(params) {
        var __fest_buf = "";
        __fest_buf += ("200");
        return __fest_buf;
    };
    __fest_blocks.index = function(params) {
        var __fest_buf = "";
        __fest_buf += ("<title>");
        try {
            __fest_buf += (params.name)
        } catch (e) {
            __fest_log_error(e.message + "29");
        }
        __fest_buf += ("</title><h1>");
        try {
            __fest_buf += (params.title)
        } catch (e) {
            __fest_log_error(e.message + "30");
        }
        __fest_buf += (" </h1><big>");
        try {
            __fest_buf += (params.greet)
        } catch (e) {
            __fest_log_error(e.message + "31");
        }
        __fest_buf += ("</big><p>");
        try {
            __fest_buf += (params.topic)
        } catch (e) {
            __fest_log_error(e.message + "32");
        }
        __fest_buf += ("</p>");
        try {
            __fest_buf += (params.footer)
        } catch (e) {
            __fest_log_error(e.message + "33");
        }
        return __fest_buf;
    };
    __fest_blocks.greeting = function(params) {
        var __fest_buf = "";
        __fest_buf += ("Hi, ");
        try {
            __fest_buf += (__fest_escapeHTML(params.username))
        } catch (e) {
            __fest_log_error(e.message + "36");
        }
        return __fest_buf;
    };
    __fest_select = "index";
    __fest_params = {};
    try {
        __fest_extend(__fest_params, {
            title: 'Fest start page',
            name: json.title
        })
    } catch (e) {
        __fest_log_error(e.message)
    }
    try {
        __fest_extend(__fest_params, {
            name: "other name",
            topic: "lorem ipsum"
        })
    } catch (e) {
        __fest_log_error(e.message)
    }
    __fest_params.footer = __fest_param(function() {
        var __fest_buf = "",
            __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
        __fest_buf += ("about");
        return __fest_buf;
    });
    __fest_params.greet = __fest_param(function() {
        var __fest_buf = "",
            __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_params;
        __fest_buf += ("<h1>");
        __fest_select = "greeting";
        __fest_params = {};
        try {
            __fest_params = {
                username: "David"
            }
        } catch (e) {
            __fest_log_error(e.message)
        }
        __fest_fn = __fest_blocks[__fest_select];
        if (__fest_fn) __fest_buf += __fest_call(__fest_fn, __fest_params, false);
        __fest_buf += ("</h1>");
        return __fest_buf;
    });
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: true
    });
    __fest_buf = "";
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