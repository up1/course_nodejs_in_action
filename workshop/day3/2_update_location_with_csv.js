var elasticsearch = require('elasticsearch');
var fs = require('fs');
var parse = require('csv-parse');

var client = new elasticsearch.Client( {
  hosts: [
    'http://localhost:9200/'
  ]
});

var inputFile='Callback_Server_Report_NX74_20150316_140134421966776000.csv'

function update(cnchost, location) {
  client.updateByQuery({
         index: 'try02',
         type: 'log',
         conflicts: 'proceed',
         body: {
            "query": { "match": { "cnchost": cnchost } },
            "script": { "inline": "ctx._source.locations = '"+location.replace(/[^a-zA-Z0-9]/g,'\/')+"'", "lang": "painless"}
         }
      }, function(err, res) {
          if (err) {
             console.log(err + ":" + res);
             throw err
          } else {
          console.log(res);
          }
      }
    )
}

var csvData=[];
fs.createReadStream(inputFile)
  .pipe(parse({delimiter: ','}))
  .on('data', function(csvrow) {
      if( csvrow[1] != '' ) {
        update(csvrow[0], csvrow[1])
      }
  })
  .on('end',function() {
    // console.log(csvData);
  });
