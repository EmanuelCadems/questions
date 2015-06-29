var express = require('express');
var app     = express();

app.get('/preguntas', function(req, res){
  res.send('<html><body><h1>Página principal</h1><form method="get" action="/respuesta"><input type="hidden" name="id" value="1"> ¿Quién descubrió América? <br /><input type="text" name="respuesta"><input type="submit" value="Responder"></form><form method="get" action="/respuesta"><input type="hidden" name="id" value="2">¿Capital de Portugal? <br /><input type="text" name="respuesta"><input type="submit" value="Responder"></form></body></html>');
});

app.get('/respuesta', function(req, res){
  var respuesta = '';
  if (req.query.respuesta == 'Cristóbal Colón' && req.query.id == 1) {
    respuesta = 'Respuesta correcta';
  }
  else if (req.query.id == 1){
    respuesta = 'Respuesta incorrecta. La solución es: Cristóbal Colón';
  }
  else if (req.query.respuesta == 'Lisboa' && req.query.id == 2) {
    respuesta = 'Respuesta correcta';
  }
  else if (req.query.id == 2) {
    respuesta = 'Respuesta incorrecta la solución es Lisboa';
  }
  res.send('<html><body>' + respuesta + '<a href="/preguntas">Volver</a> </body></html>');
})

app.listen(8000);
