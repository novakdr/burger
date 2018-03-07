// DEPENDENCIES
const mysql = require('mysql');
var connection;

if (process.env.y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com) {
    connection = mysql.createConnection(process.env.y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
    );
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '8889',
        database: 'burgers_db'
    });
}

connection.connect();

module.exports = connection;