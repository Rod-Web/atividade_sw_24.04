const {bd_jogos_paulistao} = require('./bd_times.js')

function Calculos(){
    bd_jogos_paulistao.forEach(time => {
        // Calculo da pontuação
        time.pontos = time.vitorias * 3 + time.empates;      
        // Calculo do Saldos de gols
        time.SG = time.GP - time.GC;
        // Total de jogos
        const totalJogos = time.vitorias + time.empates + time.derrotas;
        // Calculo do rendimento (em %)
        time.rendimento = ((time.pontos / (totalJogos * 3)) * 100).toFixed(0) + "%";
    });
};
// Executa a função que calcula os dados do json antes de exportar o json, fazendo com que o json seja exportado com os dados editados
Calculos();

function apresentar(){
    return bd_jogos_paulistao;
};

// Grupos A,B,C e D
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

// Cinco SG
function maisgols(){

    // '.sort' = ordena vetor, existe diversas maneiras de utiliza=lo
    // para *textos* só colocar .sort(), que vai em ordem alfabetica;
    // para *números* defina parametros, e defina uma lógica ex: a-b;
    // para *atributos* defina parametros, e uma lógica ex b.SG - a.SG
    // essa situação coloquei b.SG - a.SG para gerar uma lista em ordem decrescente (do maior para menor)
    bd_jogos_paulistao.sort((a,b) => b.SG - a.SG ); // 'a,b' são parametros da função .sort, que referem se ao primeiro e segundo valor do vetor, e depois segundo e terceiro e assim por diante
    // '.slice' = pega uma parte do vetor, nesse caso pega do indice 0-4 [o último indice especificado não é incluido]
    return bd_jogos_paulistao.slice(0,5);
};

// Cinco rendimento
function maisdesempenho(){
    bd_jogos_paulistao.sort((a,b) => parseInt(b.rendimento) - parseInt(a.rendimento));
    return bd_jogos_paulistao.slice(0,5);
};

// Cinco GC
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


module.exports = 
{
    apresentar,
    maisgols,
    grupos,
    maisdesempenho,
    golsofridos,
    next
};
