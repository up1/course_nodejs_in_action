var fs = require('fs')
var path = require('path')
var args = process.argv.splice(2)
var action = args.shift()
var newTask = args.join(' ')

const DB_FILE_LOCATION = 'demo.txt'

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
    }
  })
}

var listTasks = () => {
  readDataFromFile((tasks) => {
    for (var index in tasks) {
      console.log(tasks[index])
    }
  })
}

var writeDataToFile = (tasks) => {
  fs.writeFile(DB_FILE_LOCATION, JSON.stringify(tasks), 'utf8', (error) => {
    if(error) throw error
    console.log('New task is saved.')
  })
}

var addTask = (newTask) => {
  readDataFromFile((tasks) => {
    tasks.push(newTask)
    writeDataToFile(tasks)
  })
}

switch (action) {
  case 'list':
    listTasks()
    break;
  case 'add':
    addTask(newTask)
    break;
  default:
    console.log('please use add|list')
}
