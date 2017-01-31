var fs = require('fs')
var path = require('path')
var args = process.argv.splice(2)
var action = args.shift()
var newTask = args.join(' ')

const DB_FILE_LOCATION = 'demo.txt'

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
