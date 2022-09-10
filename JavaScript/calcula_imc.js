function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {    //função recebendo 2 parametros
    var imc = peso / (altura * altura);
    mostra("O imc calculado é : " + imc)
}

var pesoFlavio = 71;
var alturaFlavio = 1.71;
var imcFlavio = pesoFlavio / (alturaFlavio * alturaFlavio);

calculaImc(pesoFlavio, alturaFlavio);

var pesoAmigo = 68;
var alturaAmigo = 1.72;
var imcAmigo = pesoAmigo / (alturaAmigo * alturaAmigo);

mostra(" O imc do meu amigo é : " + imcAmigo);


function somaDoisNumeros(numero1, numero2) {
    var soma = numero1 + numero2;
    return soma;
    pulaLinha();
}

var somaDeDois = somaDoisNumeros(5, 2);
mostra(" A soma dos dois numeros é : " + somaDeDois);

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(altura, peso) {
    return imc = peso / (altura * altura); //return em vez de usar var, tambem atribui o valor a variavel externa.

}

mostra("O meu IMC é :" + calculaImc(1.63, 48)); //chamando a função calcula direto sem atribuir a variaveis.

