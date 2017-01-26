const fs = require('fs');
console.log('Start read file ...');
fs.readFile('./data.json', function(error, data){
  if(error) throw error
  console.log(data.toString());
});
console.log('Finish read file');
