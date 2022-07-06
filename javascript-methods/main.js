var a = 1;
var b = 12;
var c = 22;

var maximumValue = Math.max(a, b, c);
console.log('max value:', maximumValue);

var heroes = ['Spider-Man', 'Deadpool', 'Wolverine', 'Spider-Gwen'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);
var randomHero = heroes[randomIndex];
console.log(randomHero);

var library = [{ title: 'Mistborn', author: 'Brandon Sanderson' }, { title: 'The Dresefen Files', author: 'Jim Butcher' }, { title: 'The Wandering Inn', author: 'Rebecca Brewer' }];

var lastBook = library.pop();
console.log('last book:', lastBook);

var firstBook = library.shift();
console.log('first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(2, 1);

console.log('library array:', library);

var fullName = 'brennon toomepuu';
var firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toLocaleUpperCase();
console.log(sayMyName);
