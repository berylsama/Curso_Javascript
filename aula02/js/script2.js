//Criação de duas variáveis para a realização de cálculos matemáticos
var n1;
var n2;

/*
Interagir com o usuário e pedir os valores de "n1" e "n2"...
*/
n1 = prompt("Digite o primeiro valor", "");
n2 = prompt("Digite o segundo valor", "");

n1 = parseInt(n1);
n2 = parseInt(n2);

somar = n1 + n2;
subtrair = n1 - n2;
multiplicar = n1 * n2;
dividir = n1 / n2;
resto = n1 % n2;

/*
Para o javascript realizar uma soma, é necessário fazer uma conversão das variáveis "n1" e "n2" para número, pois o retorno do prompt é sempre como "texto/string".
Faremos a conversão usando parseInt()
 - parseInt() : passe pra inteiro!
*/

//Vamos apresentar os resultados em tela de console...

console.log(somar);
console.log(subtrair);
console.log(multiplicar);
console.log(dividir);
console.log(resto);
