exports.validate = function (xml) {
    'use strict';

    var parser = sax.parser(true), // Stict parser
        errors = [];
    parser.onerror = function (err) {
        errors.push(err);
    };
    parser.write(xml);
    parser.close();
    return errors.length ? errors : true;
};
