var fs = require('fs');

var json = JSON.parse(fs.readFileSync(__dirname + '/checknew.json', 'utf-8'));


/*
/p1/count 5
/p1/p2/p3 rock-n-roll
/p1/p2_2[0]/subject 0 - test-string 125
/p1/p2_2[1]/subject 1 - rock-n-roll
/p1/p2_2[3]/subject 3 - rock-n-roll
*/


function convert(obj, path){
    var i, buffer = '';
    if (Array.isArray(obj)){
        for (i = 0; i < obj.length; i++){
            buffer += convert(obj[i], path + '[' + i + ']');
        }
        return buffer;
    }else if (typeof obj === 'object'){
        for (i in obj){
            buffer += convert(obj[i], path + '/' + i);
        }
        return buffer;
    }else{
        return path + ' ' + obj + '\n';
    }
}

var result = convert(json, '');

console.log(result);