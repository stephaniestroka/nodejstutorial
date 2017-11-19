'use strict';

// Includes the express module, which is used to create a new webservice and define APIs.
const express = require('express');
// Includes the body parser module, which can parse the HTTP request body, e.g. if it URL encoded.
const bodyParser = require('body-parser');
// Includes our own 'messages' module, which you can find in in the base directory under 'api/messages.js'.
const messages = require('./api/messages');

// The port is either set to the environment variable PORT or, if it is not set, to 8080.
const port = process.env.PORT || 8080;

// A new express object is created and assigned to the variable app.
const app = express();

// Defines the 'public' directory as the directory that serves all static content (html, css and js).
app.use(express.static('public'));

// Defines a new API at the URL path /api/messages with method GET.
// If called, all messages are returned to the client.
app.get('/api/messages', function (req, res) {
    messages.getMessages(function (rows) {
        res.send(rows);
    });
});

// Instructs the app to parse a URL-encoded POST request body.
app.use(bodyParser.urlencoded());

// Defines a new API at the URL path /api/messages with method POST.
// If called, a name-message object is read from the request body and passed to the addMessage() function.
app.post("/api/messages", function (req, res) {
    messages.addMessage(req.body);
    res.sendStatus(200);
});

// Accepts HTTP requests on the previously defined port.
app.listen(port, () => console.log('App listening on port ' + port + '!'));