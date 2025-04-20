const express = require('express')
const app = express();

const { router_times } = require('./routes/times.js');
const { router_SG } = require('./routes/saldo_gols.js');
const { router_grupos } = require('./routes/grupos.js');
const { router_rendimento } = require('./routes/rendimento.js');
const { router_GC } = require('./routes/gols_sofridos.js');
const { router_next } = require('./routes/proximafase.js');

app.use('/', 
    router_times, // Apresenta tudo
    router_SG,  // Apresenta os 5 com mais saldo de Gols
    router_grupos, // Apresenta os grupos dos times
    router_rendimento, // apresemta os 5 maiores rendimentos
    router_GC, // apresenta os 5 times com mais gols vazados
    router_next // apresenta os times da próxima fase
);

app.get('/', (req, res)=>{
    res.send("Hello Word!");
});

const porta = 3000;
app.listen(porta, ()=>{
    console.log("Operando na porta " + 3000);
});