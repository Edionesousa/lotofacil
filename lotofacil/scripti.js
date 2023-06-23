let url = "https://apiloterias.mksoft.com.br/v1?sorteio=lotomania&key=fkb07f6a16e5df143dfbd5687590061680"

fetch(url).then(function (response) {
    response.json().then(function (data) {
        console.log(data)
    })

});