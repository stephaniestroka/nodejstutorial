const fs = require('fs');
const path = require('path');

const messagesFile = path.resolve(__dirname, 'messages.txt');

function createMessagesFile() {
    fs.openSync(messagesFile, 'w');
}

exports.addMessage = function(message) {
    console.log("Message: " + message);
    if (!fs.existsSync(messagesFile)) {
        createMessagesFile();
    } else {
        fs.appendFileSync(messagesFile, ',\n');
    }
    fs.appendFile(messagesFile, JSON.stringify(message), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

exports.getMessages = function() {
    if (!fs.existsSync(messagesFile)) {
        console.log("Could not find " + messagesFile);
        return "";
    } else {
        return fs.readFileSync(messagesFile);
    }
};