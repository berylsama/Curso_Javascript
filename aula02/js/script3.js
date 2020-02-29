/*
Crie uma aplicação para receber o nome de um produto, 
o seu valor e um percentual de desconto.
Deve serapresentado em tela de console 
o nome do produto e preço já com desconto...
*/

var nomeproduto;
var valorinicial;
var percentual;

var nomeproduto = prompt(
  "Qual o nome do produto? ",
  "Digite o nome do produto aqui"
); //nome do texto + placeholder
var valorinicial = prompt(
  "Qual o valor do produto? ",
  "Digite o valor do produto aqui"
); //nome do texto + placeholder
var percentual = prompt(
  "Qual será o percentual de desconto? ",
  "Digite este percentual aqui"
); //nome do texto + placeholder

valorinicial = parseFloat(valorinicial);
percentual = parseFloat(percentual);

valorfinal = valorinicial * ((100 - percentual) / 100);

console.log(nomeproduto);
console.log(valorfinal);
