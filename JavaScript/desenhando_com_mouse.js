tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var desenhar = false;

tela.onmousemove = function (evento) {  //tirado nome da função e deixada como "função anonima"
    if (desenha) {    // if quando () sem = condição, significa que a condição é igual a true, EX: if(desenha) = if(desenha == true).
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = "red";
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();

    }
    console.log(x + ',' + y);
}

tela.onmousedown = function () { //tirado nome da função e deixada como "função anonima"
    desenha = true;
}
/*
function habilitaDesenhar = (){
    desenha = true;
}
*/

tela.onmouseup = function () {   //tirado nome da função e deixada como "função anonima"
    desenha = false;
}

/*
function desabilitaDesenhar = (){
    desenha = false;
}
*/

