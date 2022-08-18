const fs = require('fs');
// const fileToRead = process.argv[1];

fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log(process.argv);
