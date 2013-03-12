exports.validate = function (xml) {
    'use strict';

    var sax = require('./sax'),
        parser = sax.parser(true, {xmlns: true}),
        errors = [];
    parser.onerror = function (err) {
        errors.push(err);
        this.error = null;
    };
    parser.write(xml);
    parser.close();

    return errors.length ? errors : true;
};
