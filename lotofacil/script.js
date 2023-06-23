let url = `https://loteriascaixa-api.herokuapp.com/api/lotofacil/2027`
function pesquisar(){
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
        })
    });
}
