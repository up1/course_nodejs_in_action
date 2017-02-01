var fs = require('fs')
const DB_FILE_LOCATION = 'data.json'

var readDataFromFile = (callback) => {
  fs.exists(DB_FILE_LOCATION, (exists) => {
    var tasks = []
    if(exists) {
      fs.readFile(DB_FILE_LOCATION, 'utf8', (error, data) => {
        if(error) throw error
        var task = data.toString()
        var tasks = JSON.parse(task || '[]')
        callback(tasks)
      })
    } else {
      callback([])
} })
}

var writeDataToFile = (tasks) => {
  fs.writeFile(DB_FILE_LOCATION, JSON.stringify(tasks), 'utf8', (error) => {
    if(error) throw error
    console.log('New task is saved.')
}) }

var deleteTask = (position) => {
  readDataFromFile((tasks) => {
    // var remainTasks = []
    // for(var index = 0; index < tasks.length; index++) {
    //   if( index != position - 1 ) {
    //     remainTasks.push(tasks[index])
    //   }
    // }
    tasks.splice(position-1, 1)
    writeDataToFile(tasks)
  })
}

var addTask = (newTask) => {
  readDataFromFile((tasks) => {
    tasks.push(newTask)
    writeDataToFile(tasks)
  })
}

var listTasks = (callback) => {
   readDataFromFile((tasks) => {
     callback(tasks)
   })
}

module.exports.listTasks = listTasks
module.exports.addTask = addTask
module.exports.deleteTask = deleteTask





