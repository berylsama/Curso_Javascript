function corFundo() {
  var cor = prompt("Digite a cor preta para aplicar ao fundo.");
  //transformar os caracteres em maiuscula usamos o comando "toUpperCase", e para minuscula, usamos "toLowerCase"
  cor = cor.toLowerCase();

  if (cor == "preto") {
    document.bgColor = "#000000";
  }
}

function corFundo2() {
  var cor = prompt("Digite a cor preta ou azul");
  cor = cor.toLowerCase();
  if (cor == "preto") {
    document.bgColor = "black";
  } else if (cor == "azul") {
    document.bgColor = "#6299F5";
  } else {
    document.bgColor = "#FFD93F";
  }
}

function mudaCor() {
  if (document.forms[0].cor[0].checked) {
    //elementos de coleção + Roxo
    document.bgColor = "#623070";
  } else if (document.forms[0].cor[1].checked) {
    //elementos de coleção + Verde
    document.bgColor = "#498D5A";
  } else if (document.forms[0].cor[2].checked) {
    //elementos de coleção + Cinza
    document.bgColor = "#C4C4C4";
  } else if (document.forms[0].cor[3].checked) {
    //elementos de coleção + Azul
    document.bgColor = "#6299F5";
  } else if (document.forms[0].cor[4].checked) {
    //elementos de coleção + Chumbo
    document.bgColor = "#4A4A63";
  } else {
    alert("Escolha uma cor da lista abaixo, chapa! ☺");
  }
}
