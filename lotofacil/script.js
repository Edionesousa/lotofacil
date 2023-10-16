

// Variavel que traz dados do jogo feito por nos, e que sera validado na logica no final do codigo//

const nossoJogo = {
    jogoUm: ['01', '02', '06', '07', '08', '10', '13', '15', '17', '18', '19', '20', '21', '23', '25'],
    jogoDois: ['02', '03', '04', '05', '09', '10', '11', '12', '14', '16', '17', '18', '22', '24', '25'],
    jogoTres: ['01', '03', '04', '06', '07', '08', '10', '12', '13', '15', '17', '19', '20', '21', '23'],
}

// link da variavel da API

const BtnValue = document.querySelector("#ultimoConcurso").value;
const api = ["https://loteriascaixa-api.herokuapp.com/api/lotofacil/"];
const apiUltimo = ["https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest"];


// valida e traz dados do input para linkar com a API logo abaixo//
function chamarInptValue(api) {
    let inputValue = document.querySelector("#pesquisar").value;
    if (let = pesquisar.value == []) {
        let = alert("Digite um concurso valido ⚠")
        inputUndefined(undefined)
        //console.log([ ])
    } else if (let = pesquisar.value != []) {
        pegarApi(inputValue)
        return;
    }


    // valida se o imput foi preenchido corretamen, nao permiti valor vazio, ou zerado//
    function inputUndefined(undefined) {
        let = document.querySelector("#span").innerHTML = let = `
        <p class="erroInputVazio">⚠</p>`
        pegarApi(inputValue)
        return;
    }
}
// recebe dados da API passando pelo valor do imput (Digitado pelo usuario)
async function pegarApi(inputValue) {
    var corpo = await fetch(`${api} + ${inputValue}`).then(Response => Response.json());
    let newCorpo = { ...corpo, ...nossoJogo } /// usado para juntar os dados do (nosso jogo) em um unico (corpo) de response;
    corpo = newCorpo
    //console.log(corpo)
    chamadaDeFunction(corpo)
    return corpo;
}

// recebe dados da API geral//
ultimoConcurso(api)
async function ultimoConcurso(apiUltimo) {
    var corpo = await fetch(apiUltimo).then(Response => Response.json());
    //console.log(corpo)
    corpo = corpo[0]
    let newCorpo = { ...corpo, ...nossoJogo } // usado para juntar os dados do (nosso jogo) em um unico (corpo) de response;
    corpo = newCorpo
    chamadaDeFunction(corpo)
    return corpo;

}

function chamadaDeFunction(corpo) {
    popularTela(corpo);
    telaDezena(corpo)
    telaNossoJogo(corpo)
    popularTela(corpo);
    telaNossoJogo(corpo)
    fazerDezenasUm(corpo)
    fazerDezenasDois(corpo)
    fazerDezenasTres(corpo)
    telaEstadosPremiados(corpo)
    dezenasJogoUm(corpo)

}

// leva a tela os valores pagos e cada nivel de pontos//
function popularTela(corpo) {
    //console.log(corpo)
    corpo = corpo;
    document.querySelector("#premio").innerHTML = `
    <section class="data">
    <span class="dadosPremio"> <strong> Local </strong>${corpo.local}</span>
    <span class="dadosPremio"> <strong> Data Proximo </strong> ${corpo.dataProximoConcurso} </span>
    <span class="dadosPremio"> <strong> Concurso Atual </strong> ${corpo.concurso} </span>
    <span class="dadosPremio"> <strong> Acumulado </strong> ${corpo.valorAcumuladoProximoConcurso}</span>
    <span class="dadosPremio"> <strong> Concurso Proximo </strong> ${corpo.proximoConcurso} </span>


    </section>
    
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[0].descricao} </span>
    <span> ${corpo.premiacoes[0].ganhadores} <strong> Ganhadores </strong> 🙌 </span>
    <span> ${corpo.premiacoes[0].valorPremio} <strong> Reais </strong> 🤑 </span>

    </p>
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[1].descricao} </span>
    <span> ${corpo.premiacoes[1].ganhadores} <strong> Ganhadores </strong> 🙌 </span>
    <span>${corpo.premiacoes[1].valorPremio}  <strong> Reais </strong>🤑 </span>
     </p>
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[2].descricao} </span>
    <span>${corpo.premiacoes[2].ganhadores} <strong> Ganhadores </strong> 🙌 </span>
    <span>${corpo.premiacoes[2].valorPremio} <strong> Reais </strong>🤑 </span>
     </p>
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[3].descricao} </span>
    <span>${corpo.premiacoes[3].ganhadores} <strong> Ganhadores </strong> 🙌</span>
    <span> ${corpo.premiacoes[3].valorPremio} <strong> Reais </strong> 🤑 </span>
    </p>
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[4].descricao}</span>
    <span>${corpo.premiacoes[4].ganhadores} <strong> Ganhadores </strong> 🙌 </span>
    <span>${corpo.premiacoes[4].valorPremio} <strong> Reais </strong> 🤑</span>
    </p>
    `

}
function telaNossoJogo(corpo) {
    //console.log(corpo) 
    document.querySelector("#jogoUm").innerHTML = corpo.jogoUm
    document.querySelector("#jogoDois").innerHTML = corpo.jogoDois
    document.querySelector("#jogoTres").innerHTML = corpo.jogoTres
    return;
}



// leva a tela dezenas sorteadas a cada dia//
function telaDezena(corpo) {
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
}
// leva a tela os estados premiados a cada sorteio//

const telaEstadosPremiados = (corpo) => {
    const local = corpo.localGanhadores
    for (let i = 0; i <local.length; i++) {
        console.log(i)
    document.querySelector("#estadoPrimeiro").innerHTML= `
        <span> ${local[i].ganhadores }</span>
        <span> ${local[i].municipio}</span>
        <span> ${local[i].uf }</span>

        <span> ${local[i*2].ganhadores }</span>
        <span> ${local[i*2].municipio}</span>
        <span> ${local[i*2].uf }</span>

        <span> ${local[i*3].ganhadores }</span>
        <span> ${local[i*3].municipio}</span>
        <span> ${local[i*3].uf }</span>

        <span> ${local[i*4].ganhadores }</span>
        <span> ${local[i*4].municipio}</span>
        <span> ${local[i*4].uf }</span>



        `
}}

// validaçao do nosso premio (logica propria) //

// valida premio no primeiro jogo / chamei de jogoUm

function fazerDezenasUm(corpo) {
    const arrayUm = corpo.dezenas.concat(...corpo.jogoUm)
    pegarValoresIguaisUm(arrayUm)
    //console.log(arrayUm)
    return arrayUm;
}
function pegarValoresIguaisUm(arrayUm) {
    var valoresIguaisUm = arrayUm.filter(function (valor, indice, arr) {
        return arr.indexOf(valor) !== indice;

    });
    document.querySelector("#res1").innerHTML = valoresIguaisUm;
    document.querySelector("#pontosUm").innerHTML = valoresIguaisUm.length
    //console.log( valoresIguaisUm)
    if (valoresIguaisUm.length < 11) {
        document.querySelector("#NossoPremioUm").innerHTML =
            `<p>  <strong> Nao deu! 🤷‍♀️</strong></p>`
    } else if (valoresIguaisUm.length >= 11) {
        document.querySelector("#NossoPremioUm").innerHTML =
            `<p><strong>✔ PREMIADO 🍻</strong></p>`
    }
    return;
}
// valida segundo no segundo jogo/ chamei de jogoDois//

function fazerDezenasDois(corpo) {
    //console.log(corpo)
    const arrayDois = corpo.dezenas.concat(...corpo.jogoDois)
    pegarValoresIguaisDois(arrayDois)
    return arrayDois;
}
function pegarValoresIguaisDois(arrayDois) {
    //console.log(arrayDois)
    var valoresIguaisDois = arrayDois.filter(function (valor, indice, arrDois) {
        return arrDois.indexOf(valor) !== indice;
    });
    document.querySelector("#res2").innerHTML = valoresIguaisDois;
    document.querySelector("#pontosDois").innerHTML = valoresIguaisDois.length
    //console.log(valoresIguaisDois)
    if (valoresIguaisDois.length < 11) {
        document.querySelector("#NossoPremioDois").innerHTML =
            `<p>  <strong> Nao deu! 🤷‍♀️</strong></p>`
    } else if (valoresIguaisDois.length >= 11) {
        document.querySelector("#NossoPremioDois").innerHTML =
            `<p><strong>✔ PREMIADO 🍻</strong></p>`
    }
    return;
}

// valida terceiro  jogo/ chamei de jogoTres//

function fazerDezenasTres(corpo) {
    const arrayTres = corpo.dezenas.concat(...corpo.jogoTres)
    pegarValoresIguaisTres(arrayTres)
    return arrayTres;
}
//console.log(arrayTres)
function pegarValoresIguaisTres(arrayTres) {
    //console.log( arrayTres)
    var valoresIguaisTres = arrayTres.filter(function (valor, indice, arrTres) {
        return arrTres.indexOf(valor) !== indice;
    });
    document.querySelector("#res3").innerHTML = valoresIguaisTres;
    document.querySelector("#pontosTres").innerHTML = valoresIguaisTres.length
    //console.log(valoresIguaisTres)
    if (valoresIguaisTres.length < 11) {
        document.querySelector("#NossoPremioTres").innerHTML =
            `<p>  <strong> Nao deu! 🤷‍♀️</strong></p>`
    } else if (valoresIguaisTres.length >= 11) {
        document.querySelector("#NossoPremioTres").innerHTML =
            `<p><strong>✔ PREMIADO 🍻</strong></p>`
    }
    return arrayTres;
}
//// POR HORA FINAL DO CODIGO ///













