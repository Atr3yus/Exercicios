function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var vitorias = parseInt(prompt("Entre com o numero de vitorias")); //utilizar parseInt para converter string em numero, pois o prompr sempre sempre string
var empates = parseInt(prompt("Entre com o numero de empates"));

var pontos = vitorias * 3 + empates;

mostra("Os pontos do seu time é: " + pontos);

if (pontos > 28) {
    mostra("Seu time esta melhor que o ano passado.");
}

if (pontos < 28) {
    mostra("seu time esta pior que o ano passado.");
}

if (pontos == 28) {
    mostra("Seu time esta igual ano passado.");
}

mostra("Fim");


