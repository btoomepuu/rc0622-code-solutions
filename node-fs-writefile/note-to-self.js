const fs = require('fs');
const note = process.argv[3];

fs.writeFile('note.txt', `${note}\n`, err => {
  if (err) throw err;
});
