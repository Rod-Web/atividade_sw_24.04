const express = require('express')
const app = express()

const {router_apresentar} = require('./router/apresentar.js')
const {router_grupos} = require('./router/grupos.js')
const { router_saldo_gols } = require('./router/saldo_gols.js')
const { router_desempenho } = require('./router/desempenho.js')
const { router_GC } = require('./router/gol_vazado.js')
const { router_next } = require('./router/proximafase.js')

app.use('/',
    router_apresentar,
    router_grupos,
    router_saldo_gols,
    router_desempenho,
    router_GC,
    router_next
)

app.get('/', (req, res) => {
    res.send("Hello Word!")
})


const porta = 3000
app.listen( porta, ()=> {
    console.log("Rodando na porta " + porta)
});