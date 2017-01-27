var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.end('Hello world with GET');
});

app.post('/', function(request, response){
  response.end('Hello world with POST');
});


app.listen(3000);
console.log('Listening on port 3000');
