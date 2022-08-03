

let imagens = ['allianz-arena.jpg', 'arena-baixada.jpg', 'arena-gremio.jpg', 'estadio-da-luz.jpg',
'monumental-nunez.jpg', 'neo-quimica-arena.jpg', 'signal.jpg'];
var cont = 0;

var imagem = document.getElementById('estadio');

/* var x = document.getElementById('b'); */

setInterval(function() {
    console.log(cont);
    document.body.style.backgroundImage = `url(../img/${imagens[cont]})`;
    cont++;


    if(cont === imagens.length){
        cont = 0;
    }
}, 7000);