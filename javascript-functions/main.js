function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('result 5min to seconds:', convertMinutesToSeconds(5));

function greet(name) {
  return `Hey, ${name}!`;
}
console.log('result of greet:', greet('Bevis'));

function getArea(width, height) {
  return width * height;
}
console.log('result of getArea:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('result of getFirstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('last element:', getLastElement(['propane', 'and', 'propane', 'accessories']));
