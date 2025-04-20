const express = require('express');
const router_rendimento = express.Router();

const {
    maisdesempenho
} = require('../service/services.js');

router_rendimento.get('/rendimento', (req, res) => {
    const desempenho = maisdesempenho();
    res.json(desempenho);
});

module.exports = {
    router_rendimento
};