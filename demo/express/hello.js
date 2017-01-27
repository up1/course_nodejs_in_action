var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, world!');
});

app.listen(3000);
console.log('Listening on port 3000');
