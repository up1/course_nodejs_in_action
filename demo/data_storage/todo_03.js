var path = require('path')
var args = process.argv.splice(2)
var action = args.shift()
var newTask = args.join(' ')

var task = require('./task.js')



switch (action) {
  case 'list':
    task.listTasks()
    break;
  case 'add':
    task.addTask(newTask)
    break;
  default:
    console.log('please use add|list')
}
