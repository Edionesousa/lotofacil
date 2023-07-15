

var BtnValue = document.querySelector("#ultimoConcurso").value;
var api = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/";

function chamarInptValue(api) {
    let inputValue = document.querySelector("#pesquisar").value;

    if (let = pesquisar = " " || inputValue.value == undefined) {
       let = ( alert("Digite um concurso valido!"))
       ipnutUndefined(undefined)

    }
    function ipnutUndefined(undefined){
        document.querySelector("#span").innerHTML = let = `<p class="section">Concurso invalido!</p>`
        return;
    }
    function inputValido(){
        pegarApi(inputValue)
    }
}


async function pegarApi(inputValue) {
    const corpo = await fetch(`${api} + ${inputValue}`).then(Response => Response.json());
    //let = console.log(corpo)
    popularTela(corpo);
    return;
}

async function ultimoConcurso(api) {
    let corpo = await fetch(api).then(Response => Response.json());
    corpo = corpo[0]
    popularTela(corpo)
}
console.log(corpo);


function popularTela(corpo) {
    //console.log(corpo)
    document.querySelector("#span").innerHTML = corpo.concurso;
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
    document.querySelector(".section #nome0").innerHTML = corpo.estadosPremiados[0].nome;
    document.querySelector(".section #uf0").innerHTML = corpo.estadosPremiados[0].uf;
    document.querySelector(".section #nome1").innerHTML = corpo.estadosPremiados[1].nome;
    document.querySelector(".section #uf1").innerHTML = corpo.estadosPremiados[1].uf;
    document.querySelector(".section #nome2").innerHTML = corpo.estadosPremiados[2].nome;
    document.querySelector(".section #uf2").innerHTML = corpo.estadosPremiados[2].uf;
    document.querySelector(".section #nome3").innerHTML = corpo.estadosPremiados[3].nome;
    document.querySelector(".section #uf3").innerHTML = corpo.estadosPremiados[3].uf;
    document.querySelector(".section #nome4").innerHTML = corpo.estadosPremiados[4].nome;
    document.querySelector(".section #uf4").innerHTML = corpo.estadosPremiados[4].uf;
}


