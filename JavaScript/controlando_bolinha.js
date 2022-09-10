var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d")

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);


function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {

    limpaTela();
    desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

var x = 20;
var y = 20;

//codigo do teclado

var esquerda = 37;
var cima = 38;
var direita = 39;
var baixo = 40;

//taxa de incremento
var taxa = 10;

function leDoteclado(evento) {

    if (evento.keyCode == esquerda) {
        x = x - taxa;
    } else if (evento.keyCode == direita) {
        x = x + taxa;
    } else if (evento.keyCode == cima) {
        y = y - taxa;
    } else if (evento.keyCode == baixo) {
        y = y + taxa;
    }

    //impede a bolinha de sair da area visivel
    if (x <= 10) {
        x = taxa + 10;
    } else if (x >= 600) {
        x = x - 10;
    } else if (y < 10) {
        y = taxa - 10;
    } else if (y >= 400) {
        y = y - 10;
    }

    console.log("posição de x é");
    console.log(x + taxa);
    console.log("posição de y é");
    console.log(y + taxa);

}


document.onkeydown = leDoteclado;








