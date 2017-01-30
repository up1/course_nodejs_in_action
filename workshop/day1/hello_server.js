var http = require('http')

var user = { "id": 1, "name": "somkiat" }

var handleRequest = (request, response) => {
    console.log('Request with url ' + request.url)
    response.writeHead(200, 
        {'Content-Type': 'application/json'}); 

    if(request.url == "/user/1" && request.method == 'POST') {
        response.write( '{ "id": 1, "name": "somkiat" }' )
    } else {
        response.write( "Not found" )
    }
    response.end()
}

var server =  http.createServer(handleRequest)
server.listen(8080)

console.log('Start server ....')