
var api = "https://loteriascaixa-api.herokuapp.com/api/lotofacil"


function chamarInptValue(api) {
    let inputValue = document.querySelector("#pesquisar").value;
    //console.log(inputValue)
    pegarApi(inputValue)

    async function pegarApi(inputValue) {
        let corpo = await fetch(`${api} + ${inputValue.corpo.lotofacil}`).then(Response => Response.json())
        popularTela(corpo)
    }
}

    // pegar dados do ultimo concurso
    async function ultimoConcurso(api) {
        let ultimo = await fetch(`${api}`).then(Response => Response.json())
        //console.log(ultimo)
        popularTela(ultimo)

    }


function popularTela(corpo) {
    // console.log(corpo)
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


