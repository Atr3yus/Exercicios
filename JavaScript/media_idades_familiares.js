function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Quantidade de familiares ?"));
var totalIdades = 0;
var numero = 1;

while (numero <= totalFamiliares) {

    var idade = parseInt(prompt("Informe a idade do familiar"));
    totalIdades = totalIdades + idade;
    numero++;

}

var mediaIdades = totalIdades / totalFamiliares;
mostra("A média das idades dos familiares é " + mediaIdades);

mostra("Fim");
