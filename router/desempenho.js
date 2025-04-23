const express = require('express')
const router_desempenho = express.Router()

const {desempenho} = require('../service/services.js')

router_desempenho.get('/desempenho', (req, res) => {
    const maiorDesempenho = desempenho()
    res.json(maiorDesempenho)
})

module.exports = {
    router_desempenho
}