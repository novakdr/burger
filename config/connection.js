// DEPENDENCIES
const mysql = require('mysql');
    
const connection = mysql.createConnection({
        host: 'y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'bmkcmlmmo6ke3pvo',
        password: 'hdwzcx83mv3lbnko',
        database: 'iy3ar6sjyfw2iphb',
        port: '3306'
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;