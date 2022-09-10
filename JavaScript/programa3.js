var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d")

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var cores = ["blue", "red", "green", "pink"];
var i = 0;

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = cores[i];
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();

    //alert("x = " + x + ", " + "y = " + y);
    console.log("x =" + x);
    console.log("y =" + y);
}

tela.onclick = desenhaCirculo;

function mudacor() {

    cores[i++];

    if (i >= cores.length) {
        i = 0;
    }

    alert("funcionou");
    return false;
}

tela.oncontextmenu = mudacor;





