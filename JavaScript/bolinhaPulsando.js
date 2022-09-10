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

var raio = 19;
var pulso = 1;

function pulsa() {

    limpaTela();
    desenhaCirculo(300, 200, raio);
    raio = raio + pulso;

    if (raio < 20) {
        pulso++;
    } else if (raio > 29) {
        pulso--;
    }
    console.log(raio);
}

setInterval(pulsa, 100);
