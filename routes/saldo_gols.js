const express = require('express');
const router_SG = express.Router();

const {
    maisgols
} = require('../service/services.js');

router_SG.get('/melhores_SG', (req, res) => {
    const SG = maisgols();
    res.json(SG);
});

module.exports = {router_SG};