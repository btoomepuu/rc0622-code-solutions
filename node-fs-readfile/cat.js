const fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
  const fileToRead = process.argv[i];
  fs.readFile(`${fileToRead}`, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
