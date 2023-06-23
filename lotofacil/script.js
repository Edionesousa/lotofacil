
//let pesquisar = document.querySelector("#pesquisar");


    function pesquisar(concurso){
    fetch(`https://loteriascaixa-api.herokuapp.com/api/lotofacil/${pesquisar}`).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
        })
    });
}
function pesquisarUltimo(){
    fetch("https://loteriascaixa-api.herokuapp.com/api/lotofacil/2844").then(function (response) {
        response.json().then(function (data) {
            console.log(data)
        })
    });
}