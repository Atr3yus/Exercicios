function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function sorteia() {    //função deve ser declarada vazia para receber parametros do prompt.
    numero = Math.round(Math.random() * numeroMaximo);
    return numero;
}


var tentativas = 1;
var numeroMaximo = parseInt(prompt("Digite o numero da dificuldade de 0 e 100"));
var numeroPensado = sorteia(numeroMaximo);  //estava ocorrendo falhar por não passar o parametro para a função

var numeroMaximo = parseInt(prompt("Digite o numero maximo"));  //recebe parametor e passa para a função sorteia

var numeroPensado = sorteia();  //estava ocorrendo falhar por não passar o parametro para a função

console.log(numero); //imprimir no console o numero gerado, para teste da condição if você acertou.

while (tentativas <= 3) {

    var chute = parseInt(prompt("Digite seu chute"));

    if (chute == numeroPensado) {
        mostra("Você acertou !");
        break;  //comando para quebrar o laço de repetição

    } else {
        alert("Você errou, tente outra vez");
        tentativas++;
    }
    if (tentativas == 4) {
        mostra("Fim de jogo, o numero pensado foi " + numeroPensado);
    }
}

mostra("Fim");

