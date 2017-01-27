var express = require('express');
var app = express();

var photos = [];
photos.push({
  name: "First",
  path: "image01.jpg"
});

app.get('/photos', function(request, response){
  response.json(photos)
});


app.listen(3000);
console.log('Listening on port 3000');
