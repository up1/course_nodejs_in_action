var fs = require('fs')
var path = require('path')
var args = process.argv.splice(2)
var action = args.shift()
var newTask = args.join(' ')

console.log(action)
console.log(newTask)
