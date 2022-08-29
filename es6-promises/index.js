const takeAChance = require('./take-a-chance');
const chance = takeAChance('Brennon');

chance.then(value => {
  console.log(value);
}).catch(err => {
  console.log(err);
});
