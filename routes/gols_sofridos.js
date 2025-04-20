const express = require('express');
const router_GC = express.Router();

const {
    golsofridos
} = require('../service/services.js');

router_GC.get('/golsofridos', (req, res) => {
    const GC = golsofridos();
    res.json(GC);
});

module.exports = {router_GC};