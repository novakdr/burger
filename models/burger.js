const orm = require('../config/orm.js');

const burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    insertOne: (table, burger_name, cb) => {
        orm.insertOne('burgers', burger_name, (res) => {
            cb(res);
        });
    },
    updateOne: (table, id, cb) => {
        orm.updateOne('burgers', id, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;