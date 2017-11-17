'use strict';

const messages = require('./api/messages');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('public'))

app.get('/api/messages', function (req, res) {
    messages.getMessages(function (rows) {
        res.send(rows);
    })
})

app.use(bodyParser.json());
app.post("/api/messages", function (req, res) {
    messages.addMessage(req.body);
    res.sendStatus(200);
});

app.listen(8080, () => console.log('App listening on port 8080!'))