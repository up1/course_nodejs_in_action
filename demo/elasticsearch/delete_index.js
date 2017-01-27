var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
  hosts: [
    'http://localhost:9200/'
  ]
});

client.indices.delete({
  index: 'gov'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});
