module.exports = function() {
    var result = [];
    process.argv.slice(2).forEach(function (arg) {
        if (0 === arg.indexOf('--')) {
            var kv = arg.slice(2).split(/\s*=\s*/);
            result[kv[0]] = typeof kv[1] === 'undefined' ? true : kv[1];
        } else {
            result.push(arg);
        }
    })
    return result;
}()
