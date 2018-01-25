// DEPENDENCIES
const connection = require('./connection.js');

// CREATES AND PUSHES ? INTO ARRAY FOR MYSQL VALUE QUERIES
printQuestionMarks = (num) => {
    let questionMarks = [];

    for (let i = 0; i < num.lengths; i++) {
        questionMarks.push('?');
    }

    return questionMarks.toString();
}

// CONVERTS VALUE/KEYS TO SQL SYNTAX
objToSql = (obj) => {
    let array = [];

    for (let key in obj) {
        let value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + '=' + value);
        }
    }
    return array.toString();
}

// OBJECTS FOR SQL STATEMENT FUNCTIONS
const orm = {

    // SELECTS ALL FROM BURGER DATABASE
    selectAll: (tableInput, cb) => {
        let queryString = 'SELECT * FROM ' + tableInput;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },
    // INSERTS A SINGLE NEW BURGER INTO DATABASE
    insertOne: (table, burger_name, cb) => {
        let queryString = 'INSERT INTO ' + table + " (burger_name, devoured) VALUES ('" + burger_name + "', false)";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // UPDATES SINGLE BURGER
    updateOne: (table, id, cb) => {
        let queryString = 'UPDATE ' + table + ' SET ? WHERE ?';

        connection.query(queryString, [{devoured: true}, {id: id}], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
} 

module.exports = orm;