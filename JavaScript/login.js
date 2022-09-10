function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var loginCadastrado = "alura";
var senhaCadastrada = "alura123";
var tentativas = 3;

while (tentativas >= 1) {

    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");

    if (loginInformado != loginCadastrado && senhaInformada != senhaCadastrada) {

        alert("Login inválido. Tente novamente");
        tentativas = tentativas - 1;

    } else {

        alert("Bem-vindo ao sistema " + loginInformado);
        tentativas = tentativas - 4;
        mostra("Login efetuado com sucesso!! ^^")
    }

    if (tentativas == 0) {

        alert("Limite maximo de tentativas atingido !!!");
        mostra("Não foi possivel efetuar login !!!");
    }
}

