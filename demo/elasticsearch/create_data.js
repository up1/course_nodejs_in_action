var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
  hosts: [
    'http://localhost:9200/'
  ]
});

client.index({
  index: 'media',
  id: '1',
  type: 'photo',
  body: {
    "name": "image 01",
    "path": "image_01.jpg"
  }
},function(err,resp,status) {
    console.log(resp);
});
