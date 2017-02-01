var http = require('http');
var qs = require('querystring');
var task = require('./task02.js')
const PORT=8080;

function handleRequest(request, response){
    response.setHeader('Content-Type', 'text/html');

    if( request.method === 'POST' ) {
        parseReceivedData(request, (data) => {
            task.addTask(data.task)
            response.end('Task : ' + data.task)
        })
    } else if( request.method === 'GET' ) {
        task.listTasks((tasks) => {
            showHtml(response, tasks)
        });
    } else {
        response.end('Not support')
    }
}

var parseReceivedData = (request, callback) => {
    var body = '';
    request.setEncoding('utf8');
    request.on('data', function(chunk){ body += chunk });
    request.on('end', function() {
        var data = qs.parse(body);
        callback(data);
    });
};

function showHtml(response, tasks) {
    var taskListHtml = '<table>'
    for(var task of tasks) {
         taskListHtml += '<tr><td>'+ task +'</td></tr>'
    }
    taskListHtml += '</table>'

    var formHtml = 
          '<form method="POST">'
        +'Task name : <input type="text" name="task"><br/><br/>'
        +'<input type="submit" value="Add new task"><br/>' 
        +'</form>';
    response.end(taskListHtml + formHtml)
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});