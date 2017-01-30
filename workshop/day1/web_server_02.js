var http = require('http');
const PORT=8080;

function requestHandler(request, response) {
  if ( request.method == "POST" ) {
    request.setEncoding('utf8');
    
    var data = "";
    
    request.on("data", function(chunk) {
      data += chunk;
    });

    request.on("end", function() {
      console.log("DATA: " + data);
    });
  }
  response.end("Request for " + request.method + " with uri '" + request.url);
}

var server = http.createServer(requestHandler);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});