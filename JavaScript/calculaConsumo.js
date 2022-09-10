var tanque = 40;
var caminhoComGasolina = 480;
var caminhoComEtanool = 300;
var consumoDeGasolina = (caminhoComGasolina / tanque);
var comsumoDeEtanool = (caminhoComEtanool / tanque);

document.write ("O consumo com gasolina é : " + consumoDeGasolina + " km/l " + "<br>");
document.write ("O consumo com etanool é : "+ comsumoDeEtanool + " km/l " );

document.write("<hr>");

var precoGasolina = 5.90;
var precoEtanool = 3.40;

document.write("Preço da Gasolina " + precoGasolina + " R$" + "<br>");
document.write("Preço do Etanool " +precoEtanool + " R$" + "<br><br>");

if (precoEtanool / precoGasolina <= 0.7){
    document.write ("Abasteça com Etanool");
    } else {
        document.write("Abasteça com Gasolia");
      }