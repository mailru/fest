module.exports = function(){
    var args = process.argv.slice(2)
                           .map(function(arg){return arg.split('=')});

    var result = {};
    args.forEach(function(arg){
        result[arg[0].trim().replace(/^--/, '')] = typeof arg[1] === 'undefined' ? true : arg[1].trim();
    })
    return result;
}()
