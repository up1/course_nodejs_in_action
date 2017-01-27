var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'application/pdf'});
  var stream = fs.createWriteStream('data2.txt', 'UTF-8');
  request.pipe(stream);

  request.on('end', function() {
     response.end('uploaded!');
  });

}).listen(3000);

console.log('Server running at http://localhost:3000/');
