function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(altura, peso) {    //função recebendo 2 parametros
    return imc = peso / (altura * altura);
    mostra("O imc calculado é : " + imc)
}

var nome = prompt("Informe seu nome")
var alturaInformada = prompt("Informo sua altura");
var pesoInformado = prompt("Informe seu peso");

var imc = calculaImc(alturaInformada, pesoInformado);
mostra(nome + ", Seu IMC é: " + imc);

if (imc < 18.5) {
    mostra("Você está abaixo do recomendado");
}

if (imc >= 18.5 && imc <= 35) {
    mostra("Seu IMC está excelente")
}

if (imc > 35) {
    mostra("Você está acima do recomendado");
}

