const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!!!");
});

const itens = ["Homem de Ferro", "Mulher Maravilha", "Capitã Marvel"];

// Read All [GET] /itens
app.get("/itens", function (req, res) {
  res.send(itens);
});

app.listen(3000);
