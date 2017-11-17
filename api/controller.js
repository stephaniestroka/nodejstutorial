var url = require('url');

function errorResponse(statusCode, msg) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write(msg);
  res.end();
}

// Supports the following two requests:
// GET /api/messages
// POST /api/messages
exports.handleCall = function (req, res) {
  var q = url.parse(req.url, true);
  var pathname = q.pathname;
  if (pathname == "/api/messages") {
    if (req.method == "GET") {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("Api method: " + req.method + " " + req.url + " is known");
      res.end();
    } else if (req.method == "POST") {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("Api method: " + req.method + " " + req.url + " is known");
      res.end();
    } else {
      errorResponse(404, "Method: " + req.method + " " + req.url + " is not supported");
    }
  } else {
    errorResponse(404, "Api method: " + req.method + " " + req.url + " is unknown");
  }
};
