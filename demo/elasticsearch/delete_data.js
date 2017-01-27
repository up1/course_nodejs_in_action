var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
  hosts: [
    'http://localhost:9200/'
  ]
});

client.delete({
  index: 'media',
  id: '1',
  type: 'photo'
},function(err,resp,status) {
    console.log(resp);
});
