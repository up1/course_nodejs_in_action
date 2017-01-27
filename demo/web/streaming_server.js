var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'application/pdf'});
  var stream = fs.createReadStream('data.txt', 'UTF-8');
  stream.pipe(response);
}).listen(3000);

console.log('Server running at http://localhost:3000/');
