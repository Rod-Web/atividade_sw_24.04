const express = require('express');
const router_grupos = express.Router();

const {
    grupos
} = require('../service/services.js');

router_grupos.get('/grupos/:grupo', (req, res) => {
    let ChosenGroup = req.params.grupo.toUpperCase() // para ter certeza que a resposta é em Maiuscula
    const grupo = grupos(ChosenGroup);
    res.json(grupo);
});

module.exports = { router_grupos };