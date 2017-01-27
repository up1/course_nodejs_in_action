var fs = require('fs');
var stream = fs.createReadStream('data.txt', 'UTF-8');
var data = '';

stream.once('data', function(){
  console.log('Started Reading File');
});

stream.on('data', function(chunk){
  process.stdout.write(`chunk: ${chunk.length} \n`);
  data += chunk;
});

stream.on('end', function(){
  console.log(`Finished Reading File ${data.length}`);
});
