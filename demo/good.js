const fs = require('fs');
fs.readFile('data.json', (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.unlink('data.json', (err) => {
    if (err) throw err;
  });
});
