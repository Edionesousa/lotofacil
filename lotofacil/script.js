












//function dadosTela(){
    
   fetch(`https://loteriascaixa-api.herokuapp.com/api/lotofacil/2848`)
        .then(response => {
            (response.json()).then(body => {
                var corpo = console.log(body)

                const nun = ['#num0','#num1','#num2','#num3','#num4','#num5','#num6','#num7','#num8','#num9','#num10','#num11','#num12','#num13','#num14','#num15']
                document.querySelector("#num0").innerHTML = body.dezenas[0];
                document.querySelector("#num1").innerHTML = body.dezenas[1];
                document.querySelector("#num2").innerHTML = body.dezenas[2];
                document.querySelector("#num3").innerHTML = body.dezenas[3];
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
                
                return;
            })
        })
        
        function premiados(){
            let premiados = document.querySelector("#premiados div").innerHTML = body.estadosPremiados[0];
            console.log(premiados)

        }




//














