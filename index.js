const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!!!");
});

const itens = ["Homem de Ferro", "Mulher Maravilha", "Capitã Marvel"];
//              0                 1                   2

// Read All [GET] /itens
app.get("/itens", function (req, res) {
  res.send(itens);
});

// Read Single [GET] /itens/:id
app.get("/itens/:id", function (req, res) {
  // Obtemos o ID que foi enviado pelo parâmetro
  //  de rota
  const id = req.params.id;

  // Como o índice da lista começa em 0 e
  //  queremos que o ID comece em 1,
  //  precisamos subtrair 1 do ID, para
  //  garantir que ele vai acessar o item
  //  correto da lista
  // A partir do ID, acessamos ele na lista
  const item = itens[id - 1];

  // Enviamos a resposta com o item obtido
  res.send(item);
});

app.listen(3000);
