

function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

/*for (var multiplicador = 1; multiplicador <= 10; multiplicador ++){ //laço de repetição for as variaveis, a condição e o incremento são colocados dentro do parenteses
    mostra(7 * multiplicador); 
    
}*/

var i = 0;

while (i < 10) {
    alert("O resultado é " + (2 * i));
    i++;
}

mostra("Fim");

