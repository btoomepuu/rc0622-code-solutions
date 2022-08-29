const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = num => {
  return num * 2;
};
const doubleNum = numbers.map(doubled);
console.log('result doubled:', doubleNum);

const price = num => {
  return `$${num}.00`;
};
const prices = numbers.map(price);
console.log('result price:', prices);

const upperCased = string => {
  return string.toUpperCase();
};
const upperCase = languages.map(upperCased);
console.log('result upperCased:', upperCase);

const firstLetters = string => {
  return string[0];
};

const firstLetter = languages.map(firstLetters);
console.log('result firstLetters:', firstLetter);
