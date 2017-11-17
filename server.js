'use strict';

var http = require('http');
var fs = require('fs');
var url = require('url');
var myApi = require('./api/controller');

function returnFile(res, filename) {
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var pathname = q.pathname;
    console.log("Looking for " + pathname);

    if (pathname.startsWith("/api")) {
        myApi.handleCall(req, res);
    } else {
        var filename = "." + pathname;
        if (!fs.existsSync(filename) || !fs.lstatSync(filename).isFile()) {
            returnFile(res, 'index.html');
        } else {
            returnFile(res, filename);
        }
    }
}).listen(8080);
