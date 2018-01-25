const burger = require('../models/burger.js');
const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burger/new', (req, res) => {
    burger.insertOne(['burger_name'], [req.body.burger_name], (result) => {
            res.redirect('/')
    });
});

router.put('/burger/:id', (req, res) => {
    burger.updateOne(req.params.devoured, req.params.id, (data) => {
        res.redirect('/');
    });
});

module.exports = router;

