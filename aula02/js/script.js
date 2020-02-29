//Vamos criar uma janela de alerta para saudar os usuários!
alert("Olá, seja bem vindo!");
//alert - tem um cubo. Cubo = função, tem que ser colocado um parenteses
//Dentro do alerta, tem uma mensagem que é feita a partir de uma String - coloque aspas para valer a pena!

/*
Vamos pedir ao usuario que digite o seu nome e depois mostraremos em uma página de alerta...
Para executar a operação, iremos guardar o nome do usuário numa variável.
A variável terá o nome de 'nome'
*/

var nome = prompt("Digite o seu nome: ", "Escreva o seu nome aqui"); //nome do texto + placeholder
alert(nome);
/*
Para apresentar o nome do usuário na página HTML, foi necessário criar algum elemento de "link" (relação da página HTML com o Javascript).
Para o vínculo, usamos o comando "document.getElementById("titulo").innerHTML"
  - document : refere-se ao "body" da página HTML
  - get : obter "Element"(Elemento)By(por)Id(identificação)
  - inner: interno (dentro do...) HTML
  Pegamos um elemento que está dentro do body via ID e inserimos um conteúdo em HTML, que nesse caso, é o "nome do usuário".
*/
document.getElementById("titulo").innerHTML = nome;

/*versionar:
git init (inicia o processo)
git add . (coloca os arquivos)
git commit -m "Situação" (indica um passo do processo feito)
Versionado.
*/
