


let dados = document.querySelector("#pesquisar");

    async function  pesquisarConc(){
        const dados = await fetch(`https://loteriascaixa-api.herokuapp.com/api/lotofacil/${pesquisar.value}`).then(function (response) {
        response.json().then(function (data) {
            //console.log(data);
            monstrarDados()
        })
    });
}
    
    async function pesquisarUltimo(){
        const dados = await fetch("https://loteriascaixa-api.herokuapp.com/api/lotofacil/2844").then(function (response) {
            response.json().then(function (data) {
               //console.log(data)
                monstrarDados()
            })
        });
    }


function monstrarDados(data){
    document.querySelector("data").innerHTML = resultado;
    
    console.log(dados)

}