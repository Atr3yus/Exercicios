function desenhaRetangulo(x, y, largura, altura, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, largura, altura);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(x, y, largura, altura);
}

function desenhaTexto(x, y, texto) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.font = '15px Georgia';
    pincel.fillStyle = 'black';
    pincel.fillText(texto, x, y);
}

var serie2015 = [50, 25, 20, 5];
var serie2016 = [65, 20, 13, 2];
var cores = ['blue', 'green', 'yellow', 'red'];


function desenhaBarra(x, y, texto, serie, cores) {

    desenhaTexto(x + 10, y - 10, texto);

    var somaAltura = 0;

    for (i = 0; i < serie.length; i++) {
        var altura = serie[i];
        desenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
        somaAltura = somaAltura + altura;
    }

    /*
    desenhaRetangulo(x, y, 50, serie[0], cores[0]);  
    desenhaRetangulo(x, y + serie[0], 50, serie[1],  cores[1]);
    desenhaRetangulo(x, y + serie[0] + serie[1], 50, serie[2],  cores[2]);
    desenhaRetangulo(x, y + serie[0] + serie[1] + serie[2], 50, serie[3],  cores[3]); //minha resposta antes de ver o laço feito pelo instrutor
    desenhaTexto(x +10, y - 10, texto)  
    */
}

desenhaBarra(50, 50, "2015", serie2015, cores);
desenhaBarra(150, 50, "2016", serie2016, cores);

    //minha resposta acima, reposta do instrutor abaixo


/*function desenhaRetangulo(x, y, largura, altura, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x,y, largura, altura);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(x,y, largura, altura);
}

function desenhaTexto(x , y, texto) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.font = '15px Georgia';
    pincel.fillStyle = 'black';
    pincel.fillText(texto, x, y);    
}

function desenhaBarra(x, y, serie, cores, texto) {

    desenhaTexto(x, y - 10, texto);

    var somaAltura = 0;
    for (var i = 0; i < serie.length; i++) {
        var altura = serie[i];
        desenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
        somaAltura = somaAltura + altura;
    }
}

var cores = ['blue','green','yellow', 'red'];
var serie2015 = [50,25,20,5];
var serie2016 = [65,20,13,2];

desenhaBarra(50, 50, serie2015, cores, '2015');
desenhaBarra(150, 50, serie2016, cores, '2016');*/

