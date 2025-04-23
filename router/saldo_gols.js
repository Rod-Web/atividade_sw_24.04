const express = require('express')
const router_saldo_gols = express.Router()

const {saldo_gols} = require('../service/services.js')

router_saldo_gols.get('/saldo_gols', (req,res) => {
    const saldo = saldo_gols()
    res.json(saldo)
})

module.exports = {
    router_saldo_gols
}