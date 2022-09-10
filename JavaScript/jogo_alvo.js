var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d")
var raio = 10;

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y) {

    desenhaCirculo(x, y, raio + 20, 'red');
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red');
}

function sorteiaPosicao(maximo) {

    return Math.floor(Math.random() * maximo)

}

var xAleatorio;
var yAleatorio;

function atualizaTela() {

    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    limpaTela();
    desenhaAlvo(xAleatorio, yAleatorio);

}

function acerta(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if ((x > xAleatorio - raio) && (x < xAleatorio + raio) && (y > yAleatorio - raio) && (y < yAleatorio + raio)) {   //comparação entre os valores

        alert("Voce acertou ");

    }

}

setInterval(atualizaTela, 1000);
tela.onclick = acerta;


