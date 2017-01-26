const fs = require('fs');
fs.readFile('data.json', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync('data.json');
