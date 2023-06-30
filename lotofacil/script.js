


const Api = `https://loteriascaixa-api.herokuapp.com/api/lotofacil/${pesquisar}/`

const pesquisar = " ";

async function pegarApivalue() {
    const dados = await fetch(Api).then(response => {
        (response.json()).then(body => {
            console.log(valor)
            popularTela(valor)

        })
        function popularTela(valor) {
            function pesquisar(pesquisar) {
                const valor = document.querySelector("#pesquisar").value;
                console.log(valor)
                pegarApivalue(valor)


            }
            let = document.querySelector("#num0").innerHTML = body.dezenas[0];
            let = document.querySelector("#num1").innerHTML = body.dezenas[1];
            let = document.querySelector("#num2").innerHTML = body.dezenas[2];
            let = document.querySelector("#num3").innerHTML = body.dezenas[3];
            let = document.querySelector("#num4").innerHTML = body.dezenas[4];
            let = document.querySelector("#num5").innerHTML = body.dezenas[5];
            let = document.querySelector("#num6").innerHTML = body.dezenas[6];
            let = document.querySelector("#num7").innerHTML = body.dezenas[7];
            let = document.querySelector("#num8").innerHTML = body.dezenas[8];
            let = document.querySelector("#num9").innerHTML = body.dezenas[9];
            let = document.querySelector("#num10").innerHTML = body.dezenas[10];
            let = document.querySelector("#num11").innerHTML = body.dezenas[11];
            let = document.querySelector("#num12").innerHTML = body.dezenas[12];
            let = document.querySelector("#num13").innerHTML = body.dezenas[13];
            let = document.querySelector("#num14").innerHTML = body.dezenas[14];
            let = document.querySelector(".section #nome").innerHTML = body.estadosPremiados[0].nome;
            let = document.querySelector(".section #uf").innerHTML = body.estadosPremiados[0].uf;
            let = document.querySelector(".section footer").innerHTML = body.concurso;
            body = console.log(body)
        }


    })
}