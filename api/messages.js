const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tutorial.db');

db.get("SELECT COUNT(*) AS tableCount FROM sqlite_master WHERE type='table' AND name='messages';", [], (err, row) => {
    if (err) throw err;
    if (row.tableCount == 0) {
        db.run('CREATE TABLE messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, message TEXT)');
    }
});

exports.addMessage = function(message) {
    var sql = "INSERT INTO messages (name, message) VALUES (?, ?)";
    db.run(sql, [message.name, message.message], function(err){
        if (err) throw err;
    });
}

exports.getMessages = function(onresult) {
    db.all("SELECT * FROM messages", [], (err, rows) => {
        if (err) throw err;
        rows.forEach((row) => {
            console.log(row.name);
        });
        onresult(rows);
    });
};