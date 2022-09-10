function pulaLinha() {
    document.write("<br>");
}

function mostra(mensagem) {
    document.write(mensagem);
    pulaLinha();
}

var anoDescobrimento = 1500;
var idadeCasal = 28;
var anoAtual = 2022;
var anosPassados = anoAtual - anoDescobrimento;
var quantidadeDeGeracoes = anosPassados / idadeCasal;

mostra("Ja se passaram " + Math.round(quantidadeDeGeracoes) + " gerações")
mostra("^^") //linha apenas para testar a função pulaLinha

