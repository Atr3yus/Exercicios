function sorteia() {

    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {

    var segredos = []; // essa variavel segredos, não tem relação com a variavel original, a mesma existe somente dentro da função
    var numero = 1;

    while (numero <= quantidade) {

        var numeroAleatorio = sorteia();

        if (numeroAleatorio !== 0) {

            var achou = false;

            for (var posicao = 0; posicao < segredos.length; posicao++) { // codigo para percorrer a lista

                if (segredos[posicao] == numeroAleatorio) { // verifica se contem elemento dentro da lista
                    achou = true;
                    break;
                }
            }
        }

        if (achou == false) {
            segredos.push(numeroAleatorio);   //"segredos.push" = empurre dentro de segredos, oque receber de da variavel numerosAleatorios, que recebe da função sorteia
            numero++;
        }

    }

    return segredos;
}

var segredos = sorteiaNumeros(9);

var campo1 = document.querySelector(".campo1"); //chmando input pela classe 
campo1.focus();

console.log(segredos);

function verifica() {

    var achou = false;  //variavel para executar o alerta de "errou" caso o usuario erre

    for (var posicao = 0; posicao < segredos.length; posicao++) { //comando .length, lê o tamanho da array(lista)

        if (campo1.value == segredos[posicao]) {

            alert("Você acertou");
            achou = true;   // condição para não exibir a msensagem de errou
            break;

        }

    }

    if (achou == false) {

        alert("Você errou!!");

    }

    campo1.value = "";   //comando para limpar a caixa de input
    campo1.focus();  //comando para maner o focu na caixa de input

}
var button = document.querySelector("button");
button.onclick = verifica;  //função sem o parenteses (), para ativar apenas apos o clik no botão


/*function exibeTexto() {  //exercicio para exibir o texto digitado na caixa de input(sempre colocar ".value")

    alert(input.value);
}

var button = document.querySelector("button");
button.onclick = exibeTexto;*/
