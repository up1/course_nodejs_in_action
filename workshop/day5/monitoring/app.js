var os = require('os');
var underscore = require('underscore');
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

var sum = function(p, n) {
    return p + n;
}

var get_cpu_percentages = function(time) {
    var cpus = os.cpus();
    var timestamp = time || new Date();

    // Just get idle vs non-idle
    var cpu_percentages = underscore.map(cpus, function(cpu, key) {
        var values = underscore.values(cpu.times);
        var total = underscore.reduce(values, sum, 0);
        var idle = cpu.times.idle;

        return {
            'percent': parseFloat((((total - idle) * 100) / total).toFixed(1)),
            'usage': (total - idle),
            'total': total,
            'time': timestamp.getTime(),
            'id': key
        }
    });

    return cpu_percentages;
};

app.get('/api/cpu/', function(request, response) {
    response.json(get_cpu_percentages());
});

app.listen(8080);
console.log('Listening on port 8080');
