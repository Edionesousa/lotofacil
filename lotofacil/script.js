

   
   const Api =`https://loteriascaixa-api.herokuapp.com/api/lotofacil/2848/`
   let dados = "";
   
   fetch(Api)
    .then(response => {
        (response.json()).then(body => {
            const corpo = console.log(body)
            document.querySelector("#num0").innerHTML = body.dezenas[0];
            document.querySelector("#num1").innerHTML = body.dezenas[1];
            document.querySelector("#num2").innerHTML = body.dezenas[2];
            document.querySelector("#num3").innerHTML = body.dezenas[3];
            document.querySelector("#num4").innerHTML = body.dezenas[4];
            document.querySelector("#num5").innerHTML = body.dezenas[5];
            document.querySelector("#num6").innerHTML = body.dezenas[6];
            document.querySelector("#num7").innerHTML = body.dezenas[7];
            document.querySelector("#num8").innerHTML = body.dezenas[8];
            document.querySelector("#num9").innerHTML = body.dezenas[9];
            document.querySelector("#num10").innerHTML = body.dezenas[10];
            document.querySelector("#num11").innerHTML = body.dezenas[11];
            document.querySelector("#num12").innerHTML = body.dezenas[12];
            document.querySelector("#num13").innerHTML = body.dezenas[13];
            document.querySelector("#num14").innerHTML = body.dezenas[14];
            
            //Estado ganhador
            
                const estado =  document.querySelector(".section #nome").innerHTML = body.estadosPremiados[0].nome;
                const uf = document.querySelector(".section #uf" ).innerHTML = body.estadosPremiados[0].uf;
                
            // premiaçoes por ponto
            const pontos = 
                document.querySelector(".section #acertos").innerHTML = body.premiacoes[0].acertos;
                document.querySelector(".section #vencedores").innerHTML = body.premiacoes[0].vencedores + "  vencedor";
                document.querySelector(".section #premio").innerHTML = body.premiacoes[0].premio + "  premio";



            
                const pontos14 = document.querySelector(".section #Pts").innerHTML = body.premiacoes[0];
                const pontos13 = document.querySelector(".section #Pts").innerHTML = body.premiacoes[0];
                const pontos12 = document.querySelector(".section #Pts").innerHTML = body.premiacoes[0];
                const pontos11 = document.querySelector(".section #Pts").innerHTML = body.premiacoes[0];
            
        })
    })

    

        














