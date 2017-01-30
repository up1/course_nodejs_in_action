var fs = require('fs')
console.log('Start')

var onFinished = (error, data) => {
        if(error) {
            console.log('Error')
            return error
        }
        console.log(data.toString())
}

fs.readFile('data.json', onFinished)
console.log('==== 1 ====')
fs.readFile('data.json', onFinished)
console.log('==== 2 ====')
fs.readFile('data2.json', onFinished)
console.log('==== 3 ====')
console.log('Finish')