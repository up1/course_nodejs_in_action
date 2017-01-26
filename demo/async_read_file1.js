const fs = require('fs');
console.log('Start read file ...');
var callback = function(error, data) {
  if(error) throw error
  console.log(data.toString());
};

fs.readFile('./data.json', callback);
fs.readFile('./data2.json', callback);

console.log('Finish read file');
