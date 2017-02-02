var ElasticsearchCSV = require('elasticsearch-csv');

var esCSV = new ElasticsearchCSV({
    es: { index: 'try02', type: 'log', host: 'localhost:9200' },
    csv: { filePath: './Alert_Details_NX74_20150316_140143794074064000.csv', headers: true }
});

esCSV.import()
    .then(function (response) {
        console.log(response);
    }, function (err) {
        throw err;
    });
