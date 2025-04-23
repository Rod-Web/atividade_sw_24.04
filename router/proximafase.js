const express = require('express');
const router_next = express.Router();

const {next} = require('../service/services.js');

router_next.get('/proximafase', (req, res) => {
    const nextfase = next();
    res.json(nextfase);
});

module.exports = {router_next};