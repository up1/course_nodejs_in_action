const fs = require('fs');
console.log('Start read file ...');
const data = fs.readFileSync('./data.json');
console.log(data.toString());
console.log('Finish read file');
