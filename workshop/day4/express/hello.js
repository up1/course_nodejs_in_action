var express = require('express')
var app = express()

app.use(express.static(__dirname + '/web'));

var tasks = [
  { id: 1, name: "task 01" },
  { id: 2, name: "task 02" },
]

app.get('/api/task', function(request, response){
    response.json(tasks)
})

app.get('/api/task/:id', function(request, response){
    var id = request.params.id
    response.json(tasks[id-1])
})

app.listen(8080, function() {
    console.log("Server started ... ")
})