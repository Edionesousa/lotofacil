

// Variavel que traz dados do jogo feito por nos, e que sera validado na logica no final do codigo//

const nossoJogo = {
    jogoUm:['1', '2' ,'6', '7', '8', '10', '13', '15', '17', '18', '19', '20', '21' ,'23', '25'],
    jogoDois:['2', '3', '4', '5', '9', '10', '11', '12', '14',  '16', '17', '18','22', '24', '25'],
    jogoTres:['1', '3', '4', '6', '7', '8', '10', '12', '13', '15', '17', '19', '20', '21', '23'],
}

   // link da variavel da API
   
   const BtnValue = document.querySelector("#ultimoConcurso").value;
    const api = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/";


// valida e tras dados do input para linkar com a API logo abaixo//
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
    let newCorpo = {...corpo, ...nossoJogo} /// usado para juntar os dados do (nosso jogo) em um unico (corpo) de response;
    corpo = newCorpo 
    //console.log(corpo)
    popularTela(corpo);
    telaNossoJogo(corpo)
    telaDezena(corpo)
    return corpo;
}

// recebe dados da API geral//
ultimoConcurso(api)
async function ultimoConcurso(api) {
    var corpo = await fetch(api).then(Response => Response.json());
    corpo = corpo[0]
    let newCorpo = {...corpo,...nossoJogo} // usado para juntar os dados do (nosso jogo) em um unico (corpo) de response;
    corpo = newCorpo   
     //console.log(corpo)
        popularTela(corpo);
        telaNossoJogo(corpo)
        telaDezena(corpo)
        return corpo;

}

// leva a tela os valores pagos e cada nivel de pontos//
 function popularTela(corpo) {
   //console.log(corpo)
   corpo = corpo;
    document.querySelector("#premio").innerHTML = `
    <section class="data">
    <span> <strong> Local </strong>${corpo.local}</span>
    <span> <strong> Acumulada </strong>${corpo.acumuladaProxConcurso} </span>
    <span> <strong> Data Proximo </strong> ${corpo.dataProxConcurso} </span>
    <span> <strong> Concurso Proximo </strong> ${corpo.proxConcurso} </span>
    <span> <strong> Concurso Atual </strong> ${corpo.concurso} </span>

    </section>

    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[0].acertos} </span>
    <span> ${corpo.premiacoes[0].vencedores} <strong> Vencedores </strong> 🙌 </span>
    <span> ${corpo.premiacoes[0].premio} <strong> Premio </strong> 🤑 </span>

    </p>
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[1].acertos} </span>
    <span> ${corpo.premiacoes[1].vencedores} <strong> Vencedores </strong> 🙌 </span>
    <span>${corpo.premiacoes[1].premio}  <strong> Premio </strong>🤑 </span>
     </p>
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[2].acertos} </span>
    <span>${corpo.premiacoes[2].vencedores} <strong> Vencedores </strong> 🙌 </span>
    <span>${corpo.premiacoes[2].premio} <strong> Premio </strong>🤑 </span>
     </p>
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[3].acertos} </span>
    <span>${corpo.premiacoes[3].vencedores} <strong> Vencedores </strong> 🙌</span>
    <span> ${corpo.premiacoes[3].premio} <strong> Premio </strong> 🤑 </span>
    </p>
    <p class="premio">
    <span> 🟢 ${corpo.premiacoes[4].acertos}</span>
    <span>${corpo.premiacoes[4].vencedores} <strong> Vencedores </strong> 🙌 </span>
    <span>${corpo.premiacoes[4].premio} <strong> Premio </strong> 🤑</span>
    </p>
    `
  
}
function  telaNossoJogo(corpo) {
    //console.log(corpo) 
    document.querySelector("#jogoUm").innerHTML = corpo.jogoUm
    document.querySelector("#jogoDois").innerHTML = corpo.jogoDois
    document.querySelector("#jogoTres").innerHTML = corpo.jogoTres
    return;
}



// leva a tela dezenas sorteadas a cada dia//
function telaDezena(corpo){
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

    telaEstadosPremiados(corpo)
}


// leva a tela os estados premiados a cada sorteio//

function telaEstadosPremiados(corpo){
    corpo = corpo;
    document.querySelector("#nome0").innerHTML = corpo.estadosPremiados[0].nome;
    document.querySelector("#uf0").innerHTML = corpo.estadosPremiados[0].uf;
    document.querySelector("#nome1").innerHTML = corpo.estadosPremiados[1].nome;
    document.querySelector("#uf1").innerHTML = corpo.estadosPremiados[1].uf;
    document.querySelector("#nome2").innerHTML = corpo.estadosPremiados[2].nome;
    document.querySelector("#uf2").innerHTML = corpo.estadosPremiados[2].uf;
    document.querySelector("#nome3").innerHTML = corpo.estadosPremiados[3].nome;
    document.querySelector("#uf3").innerHTML = corpo.estadosPremiados[3].uf;
    document.querySelector("#nome4").innerHTML = corpo.estadosPremiados[4].nome;
    document.querySelector("#uf4").innerHTML = corpo.estadosPremiados[4].uf;
    telaConcurNum(corpo)
    dezenasJogoUm(corpo)

}

    
    // validaçao do nosso premio (logica propria) //

    // valida premio no primeiro jogo / chamei de jogoUm
    
    function dezenasJogoUm(corpo){
    const res1 = corpo.dezenas;
    let juntUm = {...nossoJogo[1], ...res1}
    //console.log(juntUm)
   // let juntUm = res1.concat(nossoJogo[1])
    let juntUmFilter = juntUm.filter((elemento, index , juntUm) =>juntUm.indexOf(elemento) !== index)
    document.querySelector("#res1").innerHTML = juntUmFilter;
    document.querySelector("#pontosUm").innerHTML = juntUmFilter.length;
    if(juntUmFilter.length < 11){
        document.querySelector("#NossoPremioUm").innerHTML =
        `<p>  <strong> Nao deu! 🤷‍♀️</strong></p>`
    } else if(juntUmFilter.length >= 11){
        document.querySelector("#NossoPremioUm").innerHTML =
       `<p><strong>✔ PREMIADO 🍻</strong></p>`
}
    console.log(juntUm)
    console.log(juntUmFilter)
    dezenasJogoDois(corpo)
        return;

        // valida segundo no segundo jogo/ chamei de jogoDois//
}
function dezenasJogoDois(corpo){
    const res2 = corpo.dezenas;
    let juntDois = res2.concat(nossoJogo[2])
    let juntDoisFilter = juntDois.filter((elemento, index, juntDois) => juntDois.indexOf(elemento) !== index )
    document.querySelector("#res2").innerHTML = juntDoisFilter;
    document.querySelector("#pontosDois").innerHTML = juntDoisFilter.length
    if(juntDoisFilter.length < 11){
        document.querySelector("#NossoPremioDois").innerHTML =
        `<p>  <strong>Nao deu! 🤷‍♀️</strong></p>`
    }else if(juntDoisFilter.length >= 11){
        document.querySelector("#NossoPremioDois").innerHTML =
        `<p><strong> ✔ PREMIADO 🍻</strong></p>`
    }
    console.log(juntDois)
    console.log(juntDoisFilter)
    dezenasJogoTres(corpo)
    return ;
}

 // valida terceiro no segundo jogo/ chamei de jogoTres//
function dezenasJogoTres(corpo){
    const res3 = corpo.dezenas;
    let juntTres = res3.concat(nossoJogo[3])
    let  juntTresFilter = juntTres.filter((elemento, index, juntTres) => juntTres.indexOf(elemento) !== index)
     document.querySelector("#res3").innerHTML = juntTresFilter;
     document.querySelector("#pontosTres").innerHTML = juntTresFilter.length
    if(juntTresFilter.length < 11){
        document.querySelector("#NossoPremioTres").innerHTML =
        `<p>  <strong>Nao deu! 🤷‍♀️</strong></p>`
    }else if(juntTresFilter.length >= 11){
         document.querySelector("#NossoPremioTres").innerHTML =
        `<p><strong> ✔ PREMIADO 🍻</strong></p>`
    }
    consolel.log(juntTres)
    console.log(juntTresFilter)
    return;
}


//// POR HORA FINAL DO CODIGO ///













