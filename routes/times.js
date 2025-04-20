const express = require('express');
const router_times = express.Router();

const {
    apresentar
} = require('../service/services.js');

router_times.get('/dados_time', (req, res)=>{
    const apresentacao = apresentar();
    res.json(apresentacao);
});

module.exports = {router_times};
