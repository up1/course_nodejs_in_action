var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
  hosts: [
    'http://localhost:9200/'
  ]
});

client.cluster.health({},function(err,resp,status) {
  console.log("-- Client Health --",resp);
});
