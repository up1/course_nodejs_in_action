var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
    hosts: [ 'http://localhost:9200/'] 
});

var readDataFromES = (callback) => {
  client.search(
    {
      index: 'todo',
      type: 'task',
      body: {
        "sort": [
          {
            "id": {
              "order": "asc"
            }
          }
        ]  
      }
    },function (error, response,status) {
        if (error){
          callback([])
        } else {
          var temp = []
          response.hits.hits.forEach(function(hit){
              temp.push(hit._source.name)
           })
          callback(temp)
        }
    })
}

var writeDataToES = (newTask) => {
  client.index({
    index: 'todo',
    type: 'task',
    body: {
      "id": "1",
      "name": newTask
    }
  },function(err,resp,status) {
      console.log(resp);
  });
}

var addTask = (newTask) => {
  writeDataToES(newTask)
}

var listTasks = (callback) => {
   readDataFromES((tasks) => {
     callback(tasks)
   })
}

var deleteTask = (position) => {
  readDataFromFile((tasks) => {
    tasks.splice(position-1, 1)
    writeDataToFile(tasks)
  })
}

module.exports.listTasks = listTasks
module.exports.addTask = addTask
module.exports.deleteTask = deleteTask





