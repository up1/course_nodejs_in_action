var express = require('express')
var app = express()

var tasks = [
  {id: 1, name: "Task 01"},
  {id: 2, name: "Task 02"},
  {id: 3, name: "Task 03"},
]

app.use(express.static(__dirname + '/web'));

app.get('/api/task', function(request, response){
  response.json(tasks)
})

app.get('/api/task/:id', function(request, response){
  var id = request.params.id
  var task = tasks[id-1]
  if(task) {
      response.json(task)
  } else {
    response.status(404).send('Task not found with id=' + id)
    response.status(404).end()
  }
})

app.listen(8080, function(){
  console.log('Tasks API started on http://localhost:8080')
})
