var http = require('http');
var task = require('./task02.js')
const PORT=8080;

function handleRequest(request, response){
    response.setHeader('Content-Type', 'text/html');
    var taskListHtml = ''
    task.listTasks((tasks) => {
        taskListHtml = '<table>'
        for(var task of tasks) {
             taskListHtml += '<tr><td>'+ task +'</td></tr>'
        }
        taskListHtml += '</table>'

        var formHtml = 
              '<form method="POST">'
            +'Task name : <input type="text" name="task"><br/><br/>'
            +'<input type="submit" value="Add new task"><br/>' 
            +'</form>';
            
        response.end(taskListHtml + formHtml);
    });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});