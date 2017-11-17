'use strict';

const messages = require('./api/messages');
const express = require('express');
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000

const app = express();

app.use(express.static('public'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

app.listen(port, () => console.log('App listening on port ${ port }!'));