module.exports = function(){
    var args = process.argv.slice(2)
                           .map(function(arg){return arg.split('=')});

    var result = {};
    args.forEach(function(arg){
        result[arg[0].trim()] = arg[1].trim();
    })
    return result;
}()
