var fs = require('fs'),
    fest = require('../lib/fest.js'),
    json;

var http = require('http');

fest.compile(__dirname + '/messagelist.xml', 'utf-8')
    .then(function(template){
        http.createServer(function (req, res) {
            if (req.url == '/favicon.ico') return;
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            var html = '';
            var start, total = 0;
            template = (new Function('return ' + template))();
            for (var i = 0; i < 1000; i++){
                json = fs.readFileSync(__dirname + '/json.txt', 'utf-8');
                start = new Date().getTime();
                json = json_parse(json);
                html = template(json.data);
                total += (new Date().getTime()) - start;
            }
            console.log(total);
            res.write(html);
            res.end('<h1>' + total + 'ms, 1000 iterations</h1>');
        }).listen(8081, "127.0.0.1");
    });

function json_parse(json){
    'use strict';
    var i, l, j, k, line, name, subname, item, value, index, result = {};
    //console.time('convert');
    json = json.split('\n');
    for (i = 0, l = json.length; i < l; i++){
        line = json[i];
        name = line.substr(0, line.indexOf(' ') ).split('/');
        value = line.substr(line.indexOf(' ') + 1);
        item = result;
        for (j = 1, k = name.length; j < k; j++){
            subname = name[j];
            if (subname[subname.length - 1] === ']'){
                index = parseInt(subname.substring(subname.indexOf('[') + 1, subname.indexOf(']')), 10);
                subname = subname.substring(0, subname.indexOf('['));
                if (typeof item[subname] === 'undefined'){
                    item[subname] = [];
                }
                if (typeof item[subname][index] === 'undefined'){
                    item[subname][index] = ( k - j === 1 ? value: {});
                }
                item = item[subname][index];
            } else {
                if (typeof item[subname] === 'undefined'){
                    item[subname] = ( k - j === 1 ? value: {});
                }
                item = item[subname];
            }
        }
    }
    //console.timeEnd('convert');
    //console.log(JSON.stringify(result));
    return result;
}