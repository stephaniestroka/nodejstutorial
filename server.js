'use strict';

var http = require('http');
var fs = require('fs');
var url = require('url');

function returnFile(res, filename) {
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log("Looking for " + filename);
    
    if (!fs.existsSync(filename) || !fs.lstatSync(filename).isFile()) {
        returnFile(res, 'index.html');
    } else {
        returnFile(res, filename);
    }
}).listen(8080);
