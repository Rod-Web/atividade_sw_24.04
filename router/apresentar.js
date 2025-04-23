const express = require('express');
const router_apresentar = express.Router()

const {apresentar} = require('../service/services.js');

router_apresentar.use

router_apresentar.get('/dados_times',(req, res) => {
    const apresentacao = apresentar()
    res.json(apresentacao)
})

module.exports = {
    router_apresentar
}