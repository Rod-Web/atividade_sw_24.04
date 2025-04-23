const {bd_jogos_paulistao} = require('./database/bd_times.js')
const database = bd_jogos_paulistao

function adicoes() {
    database.forEach(time => {

        time.jogos = time.vitorias + time.empates + time.derrotas
        time.pontos = time.vitorias * 3 + time.empates * 1 + time.derrotas * 0 // Calcular os pontos
        time.SG = time.GP - time.GC
        time.rendimentos = (time.pontos / (time.jogos * 3) * 100).toFixed(0) + "%"
        

    })
    return database;

}
adicoes()


function apresentar() {
    return adicoes()
}

function grupos (ChosenGroup){
    // olha cada time e analisa se o grupo pedido e o do time é identico
    return bd_jogos_paulistao.filter(time => time.grupo === ChosenGroup);
    /* Modo com Switch
    switch(ChosenGroup){
        case "A":
            let grupoA = bd_jogos_paulistao.filter(time => time.grupo === "A" );
            return grupoA;
        break;
        case "B":
            let grupoB = bd_jogos_paulistao.filter(time => time.grupo === "B" );
            return grupoB;
        break;        
        case "C":
            let grupoC = bd_jogos_paulistao.filter(time => time.grupo === "C" );
            return grupoC;
        break;
        case "D":    
            let grupoD = bd_jogos_paulistao.filter(time => time.grupo === "D" );
            return grupoD;
        break;
    }
    */
}

function saldo_gols() {
    // '.sort' = ordena vetor, existe diversas maneiras de utiliza=lo
    database.sort((a,b)=> b.SG - a.SG );
    // '.slice' = pega uma parte do vetor, nesse caso pega do indice 0-4 [o último indice especificado não é incluido]
    return database.slice(0,5)
}

function desempenho() {
    database.sort((a,b) => parseInt(b.rendimentos) - parseInt(a.rendimentos))
    return database.slice(0,4)
}

function golsofridos(){

    bd_jogos_paulistao.sort((a,b) => b.GC - a.GC );
    return bd_jogos_paulistao.slice(0,5);
};

function next(){    
    // dentro de cada grupo pegar os dois que tem a maior a pontuação
    let classificados = [];
    ["A", "B", "C", "D"].forEach(grupo => {
      let timesGrupo = bd_jogos_paulistao.filter(time => time.grupo === grupo);
      timesGrupo.sort((a, b) => b.pontos - a.pontos);
      let doisMelhores = timesGrupo.slice(0, 2);
      classificados.push(...doisMelhores);
    });
    
    return classificados;
}

module.exports = {
    apresentar,
    grupos,
    saldo_gols,
    desempenho,
    golsofridos,
    next
}