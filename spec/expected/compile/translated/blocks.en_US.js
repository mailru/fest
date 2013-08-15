;(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['spec/templates/blocks.en_US']=function(__fest_context) {
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
    var foreach = __fest_context;
    __fest_buf += ("start");
    __fest_select = "one-one";
    __fest_params = {};
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    __fest_blocks["one-one"] = function(params) {
        var __fest_buf = "";
        __fest_buf += ("|one|");
        return __fest_buf;
    };
    __fest_select = "two";
    __fest_params = {};
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    __fest_blocks.two = function(params) {
        var __fest_buf = "";
        __fest_buf += ("two1|");
        return __fest_buf;
    };
    __fest_blocks.two = function(params) {
        var __fest_buf = "";
        __fest_buf += ("two2|");
        return __fest_buf;
    };
    __fest_select = "three";
    __fest_params = {};
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    __fest_blocks.three = function(params) {
        var __fest_buf = "";
        __fest_buf += ("three1|");
        return __fest_buf;
    };
    try {
        __fest_if = false
    } catch (e) {
        __fest_if = false;
        __fest_log_error(e.message)
    }
    if (__fest_if) {
        __fest_blocks.three = function(params) {
            var __fest_buf = "";
            __fest_buf += ("three2|");
            return __fest_buf;
        };
    }
    __fest_select = "four";
    __fest_params = {};
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    __fest_blocks.four = function(params) {
        var __fest_buf = "";
        __fest_select = "five";
        __fest_params = {};
        __fest_fn = __fest_blocks[__fest_select];
        if (__fest_fn) __fest_buf += __fest_call(__fest_fn, __fest_params, false);
        return __fest_buf;
    };
    __fest_blocks.five = function(params) {
        var __fest_buf = "";
        __fest_buf += ("five|");
        return __fest_buf;
    };
    __fest_blocks.six = function(params) {
        var __fest_buf = "";
        __fest_buf += ("six|");
        return __fest_buf;
    };
    __fest_select = "six";
    __fest_params = {};
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    __fest_blocks.seven = function(params) {
        var __fest_buf = "";
        __fest_buf += ("seven|");
        return __fest_buf;
    };
    __fest_blocks.eight = function(params) {
        var __fest_buf = "";
        __fest_buf += ("eight|");
        return __fest_buf;
    };
    var i, __fest_to0, __fest_iterator0;
    try {
        __fest_iterator0 = [7, 8] || [];
        __fest_to0 = __fest_iterator0.length;
    } catch (e) {
        __fest_iterator0 = [];
        __fest_to0 = 0;
        __fest_log_error(e.message);
    }
    for (i = 0; i < __fest_to0; i++) {
        try {
            __fest_if = i == 0
        } catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            __fest_select = "seven";
            __fest_params = {};
            __fest_chunks.push(__fest_buf, {
                name: __fest_select,
                params: __fest_params,
                cp: false
            });
            __fest_buf = "";
        } else {
            try {
                __fest_if = i == 1
            } catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                __fest_select = "eight";
                __fest_params = {};
                __fest_chunks.push(__fest_buf, {
                    name: __fest_select,
                    params: __fest_params,
                    cp: false
                });
                __fest_buf = "";
            } else {}
        }
    }
    __fest_blocks["\""] = function(params) {
        var __fest_buf = "";
        try {
            __fest_buf += (__fest_escapeHTML(this.nine))
        } catch (e) {
            __fest_log_error(e.message + "41");
        }
        __fest_buf += ("|");
        return __fest_buf;
    };
    __fest_select = "\"";
    __fest_params = {};
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    try {
        var name = "ten";
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_select = name
    } catch (e) {
        __fest_select = "";
        __fest_log_error(e.message)
    }
    __fest_params = {};
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    __fest_blocks.ten = function(params) {
        var __fest_buf = "";
        __fest_buf += ("ten|");
        return __fest_buf;
    };
    __fest_blocks.block = function(params) {
        var __fest_buf = "";
        try {
            __fest_select = params.callback
        } catch (e) {
            __fest_select = "";
            __fest_log_error(e.message)
        }
        __fest_params = {};
        try {
            __fest_params = params.data
        } catch (e) {
            __fest_log_error(e.message)
        }
        __fest_fn = __fest_blocks[__fest_select];
        if (__fest_fn) __fest_buf += __fest_call(__fest_fn, __fest_params, false);
        return __fest_buf;
    };
    __fest_blocks["block2"] = function(params) {
        var __fest_buf = "";
        try {
            __fest_buf += (__fest_escapeHTML(params.text))
        } catch (e) {
            __fest_log_error(e.message + "55");
        }
        __fest_buf += ("|");
        return __fest_buf;
    };
    __fest_select = "block";
    __fest_params = {};
    try {
        __fest_params = {
            callback: "block2",
            data: {
                text: "eleven"
            }
        }
    } catch (e) {
        __fest_log_error(e.message)
    }
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    try {
        var foo = 'bar';
    } catch (e) {
        __fest_log_error(e.message);
    }
    __fest_blocks.bar = function(params) {
        var __fest_buf = "";
        __fest_buf += ("foobar");
        return __fest_buf;
    };
    try {
        __fest_select = (foo)
    } catch (e) {
        __fest_select = "";
        __fest_log_error(e.message)
    }
    __fest_params = {};
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    __fest_buf += ("|finish");
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