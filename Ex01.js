var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});

function processaPesos(texto) {
    let valores = texto.split(/[\s\r]+/);
    let soma = 0;
    for (var i = 0; i < valores.length; i++) {
        soma += Number.parseFloat(valores[i]);
    //Do something
    }	
    return soma;           
}
 
 
app.get('/form', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/result'  method='post' name='form1'>";
  html += "Informe os pesos das caixas separados por espaço ou quebra de linha:</p></br><textarea name='input1' cols='40' rows='5'></textarea>>";
  html += "<input type='submit' value='submit'>";
  html += "<INPUT type='reset'  value='reset'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});
 
app.post('/result', urlencodedParser, function (req, res){
  var reply='';
  reply += 'Entrada(s):</br>' + req.body.input1 + '</br></br>Saida(s):</br>';
  reply += processaPesos(req.body.input1).toString();
  res.send(reply);
 });
