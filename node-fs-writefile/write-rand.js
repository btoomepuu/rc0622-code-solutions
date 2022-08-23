const fs = require('fs');
const randNum = Math.random();

fs.writeFile('random.txt', `${randNum}\n`, err => {
  if (err) throw err;
});
