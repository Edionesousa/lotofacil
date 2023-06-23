
//let pesquisar = document.querySelector("#pesquisar");


let token = "ZSRljdVcBnn1Meq"

let url = `https://loteriascaixa-api.herokuapp.com/api/lotofacil/${token
}${pesquisar}`
    function pesquisar(url){
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
        })
    });
}
