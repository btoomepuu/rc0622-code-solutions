const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((total, nextNum) => {
  return total + nextNum;
}, 0);
console.log('result sum:', sum);

const product = numbers.reduce((total, nextNum) => {
  return total * nextNum;
}, 1);
console.log('result product:', product);

const balance = account.reduce((total, item) => {
  if (item.type === 'deposit') {
    return total + item.amount;
  } else {
    return total - item.amount;
  }

}, 0);
console.log('result balance:', balance);

const composite = traits.reduce((obj, item) => {
  const trait = Object.keys(item);
  obj[trait] = item[trait];
  return obj;
}, {});

console.log('result composite:', composite);
