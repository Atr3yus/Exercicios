var ingredientes = [];

var quantidade = parseInt(prompt("Quantos ingredientes você vai adicionar?"));
console.log("Quantidades = " + quantidade);
document.write("Quantidades de ingredientes = " + quantidade);
var contador = 1;


while (contador <= quantidade) {

    var ingrediente = prompt("Infome o ingrediente " + contador);

    if (ingrediente !== ingredientes) {
        var repetido = false;

        for (var posicao = 0; posicao < ingredientes.length; posicao++) {

            if (ingredientes[posicao] == ingrediente) {
                repetido = true;
                alert("Item repetido, digite outro!!");
                break;
            }
        }

    }

    if (repetido == false) {
        ingredientes.push(ingrediente);
        contador++;
    }
}

console.log(ingredientes);
document.write("<br><hr>Os ingredientes escolhidos são = " + ingredientes);


