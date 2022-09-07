const express = require('express');
var app = express();
const path = require('path');
var join = path.join(__dirname, 'public');
console.log(join);

app.use(express.static(join));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
