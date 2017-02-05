var os = require('os');
var express = require('express');
var app = express();
app.use(express.static(__dirname));

app.get('/api/memory/', function(request, response) {
    var timestamp = new Date();
    var free = os.freemem();
    var total = os.totalmem();
    var used = total - free;

    response.json([{
        'percent': parseFloat(((used * 100) / total).toFixed(1)),
        'usage': used,
        'total': total,
        'time': timestamp.getTime(),
        'id': 'RAM'
    }]);
});

app.listen(8080);
console.log('Listening on port 8080');
