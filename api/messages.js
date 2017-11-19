// Includes the sqlite3 module, which allows access to an SQLite database.
const sqlite3 = require('sqlite3').verbose();

// Creates a new database connection to the database that is stored in tutorial.db. Stores the database connection in the 'db' variable.
const db = new sqlite3.Database('./tutorial.db');

/* We want to only create a table, if the table with the name 'messages' does not exist yet.
 * Therefore, we need to execute an SQL select statement counts how many tables with the name 'messages' exist.
 * We do so by using the get() method, because we only expect a single result from the select statement.
 * The third argument defines what should happen once the row is returned:
 * The err object must be undefined (otherwise the call will abort).
 * The row object must have a property tableCount (because of the 'AS tableCount' expression in the select statement). 
 * If it returns 1, the table already exists. If it returns 0, it does not exist, and we need to create it with the CREATE TABLE statement.
 */
db.get('SELECT COUNT(*) AS tableCount FROM sqlite_master WHERE type="table" AND name="messages";', [], function(err, row) {
    if (err) throw err;
    if (row.tableCount == 0) {
        // We are creating a new table with the columns id, name, message, and timestamp. 
        // The id is a column that automatically increments when we insert a new row into the table.
        db.run('CREATE TABLE messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, message TEXT, timestamp INT)');
    }
});

/*
 * The addMessage() function adds another message to the database.
 * To make it available in other modules, we need to prefix it with 'exports.'.
 * We add it to the database using the INSERT INTO statement. We need to define which columns of the table we are adding (hint: compare with CREATE TABLE statement).
 * We also need to define the values. The question marks mean, that the values are added as parameters. CURRENT_TIMESTAMP is an SQL expression that gives the 
 * milliseconds since 01.01.1970.
 */
exports.addMessage = function(message) {
    var sql = 'INSERT INTO messages (name, message, timestamp) VALUES (?, ?, CURRENT_TIMESTAMP)';
    // We want to execute the INSERT STATEMENT defined in variable 'sql'. The parameters 'name' and 'message' are passed in the second argument of the function.
    db.run(sql, [message.name, message.message], function(err) {
        if (err) throw err;
    });
}

/*
 * The getMessage() function returns all messages in our table, ordered by the timestamp and limited to 20 messages.
 */
exports.getMessages = function(onresult) {
    db.all('SELECT name, message FROM messages ORDER BY datetime("timestamp") DESC LIMIT 20', [], function(err, rows) {
        if (err) throw err;
        onresult(rows);
    });
};