
var api = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/"
var ultimoApi = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/?"






function chamarInptValue(api) {
    let inputValue = document.querySelector("#pesquisar").value;
    //let spanConcuros =  document.querySelector("#spanConcurso").vlaue;
   let c =  document.querySelector(concurso).value;
    console.log(c)


function chamarInptValue(api) {
    let inputValue = document.querySelector("#pesquisar").value;
    let spanConcuros =  document.querySelector("#spanConcurso").vlaue;
    //console.log(inputValue)
    pegarApi(inputValue)
  


    async function pegarApi(inputValue) {
        let corpo = await fetch(`${api} + ${inputValue}`).then(Response => Response.json())
        popularTela(corpo)


        //console.log(corpo)
    }

}
// pegar dados do ultimo concurso
async function ultimoConcurso(ultimoApi) {
    let ultimo = await fetch(`${ultimoApi}`).then(Response => Response.json())
    telaUltimo(ultimo)
    //console.log(ultimo)
    
    
    // legar tela ultimo concurso
    
    function telaUltimo(ultimo) {
        let concurso = document.querySelector("#span").innerHTML = ultimo[0].concurso;
            //console.log([ultimo[0].concurso])
            //console.log(concurso)
        
    }
}

function popularTela(corpo) {

    //console.log(corpo)
    document.querySelector("#num0").innerHTML = corpo.dezenas[0];
    document.querySelector("#num1").innerHTML = corpo.dezenas[1];
    document.querySelector("#num2").innerHTML = corpo.dezenas[2];
    document.querySelector("#num3").innerHTML = corpo.dezenas[3];
    document.querySelector("#num4").innerHTML = corpo.dezenas[4];
    document.querySelector("#num5").innerHTML = corpo.dezenas[5];
    document.querySelector("#num6").innerHTML = corpo.dezenas[6];
    document.querySelector("#num7").innerHTML = corpo.dezenas[7];
    document.querySelector("#num8").innerHTML = corpo.dezenas[8];
    document.querySelector("#num9").innerHTML = corpo.dezenas[9];
    document.querySelector("#num10").innerHTML = corpo.dezenas[10];
    document.querySelector("#num11").innerHTML = corpo.dezenas[11];
    document.querySelector("#num12").innerHTML = corpo.dezenas[12];
    document.querySelector("#num13").innerHTML = corpo.dezenas[13];
    document.querySelector("#num14").innerHTML = corpo.dezenas[14];
    document.querySelector(".section #nome").innerHTML = corpo.estadosPremiados[0].nome;
    document.querySelector(".section #uf").innerHTML = corpo.estadosPremiados[0].uf;
    document.querySelector(".section footer").innerHTML = corpo.concurso;
}

    }
    /**premios */

function popularTela(corpo) {
    document.querySelector("#num0").innerHTML = corpo.dezenas[0];
    document.querySelector("#num1").innerHTML = corpo.dezenas[1];
    document.querySelector("#num2").innerHTML = corpo.dezenas[2];
    document.querySelector("#num3").innerHTML = corpo.dezenas[3];
    document.querySelector("#num4").innerHTML = corpo.dezenas[4];
    document.querySelector("#num5").innerHTML = corpo.dezenas[5];
    document.querySelector("#num6").innerHTML = corpo.dezenas[6];
    document.querySelector("#num7").innerHTML = corpo.dezenas[7];
    document.querySelector("#num8").innerHTML = corpo.dezenas[8];
    document.querySelector("#num9").innerHTML = corpo.dezenas[9];
    document.querySelector("#num10").innerHTML = corpo.dezenas[10];
    document.querySelector("#num11").innerHTML = corpo.dezenas[11];
    document.querySelector("#num12").innerHTML = corpo.dezenas[12];
    document.querySelector("#num13").innerHTML = corpo.dezenas[13];
    document.querySelector("#num14").innerHTML = corpo.dezenas[14];
    document.querySelector(".section #nomeId0").innerHTML = corpo.estadosPremiados[0].nome;
    document.querySelector(".section #ufId0").innerHTML = corpo.estadosPremiados[0].uf;

    document.querySelector(".section #nomeId1").innerHTML = corpo.estadosPremiados[1].nome;
    document.querySelector(".section #ufId1").innerHTML = corpo.estadosPremiados[1].uf;

    document.querySelector(".section #nomeId2").innerHTML = corpo.estadosPremiados[2].nome;
    document.querySelector(".section #ufId2").innerHTML = corpo.estadosPremiados[2].uf;

    document.querySelector(".section #nomeId3").innerHTML = corpo.estadosPremiados[3].nome;
    document.querySelector(".section #ufId3").innerHTML = corpo.estadosPremiados[3].uf;

    document.querySelector(".section #nomeId4").innerHTML = corpo.estadosPremiados[4].nome;
    document.querySelector(".section #ufId4").innerHTML = corpo.estadosPremiados[4].uf;

    document.querySelector(".section #nomeId5").innerHTML = corpo.estadosPremiados[5].nome;
    document.querySelector(".section #ufId5").innerHTML = corpo.estadosPremiados[5].uf;
}

