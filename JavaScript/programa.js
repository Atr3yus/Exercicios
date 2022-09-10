function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {    //estabelecendo parametros recebidos pela função
    document.write(frase);  //"frase" se torna uma variavel que ira receber todo o texto
    pulaLinha();    //uma função pode chamar outra função
}

var ano = 2016;

mostra("Flávio tem " + (ano - 1977) + " anos");
mostra("Joaquim tem " + (ano - 1996) + " anos");
mostra("Barney tem" + (ano - 1976) + " anos");

var idadeFlavio = 39;
var idadeJoaquim = 20;
var idadeBarney = 40;

var media = (idadeFlavio + idadeJoaquim + idadeBarney) / 3;
mostra("A média das idades é: " + Math.round(media));

var nome = "Flavio";

mostra("<br>A idade de" + nome + "é " + idadeFlavio);

