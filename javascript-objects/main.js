var student = {
  firstName: 'Brennon',
  lasName: 'Toomepuu',
  age: 31
};

var fullName = `${student.firstName} ${student.lasName}`;
console.log('value fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('value of property liveInIrvine:', student.livesInIrvine);
console.log('value of property previousOccupation:', student.previousOccupation);

var vechicle = {
  make: 'toyota',
  model: 'corolla',
  year: 2016
};

vechicle.color = 'red';
vechicle['isConvertible'] = false;
console.log('the object vehicle:', vechicle);
console.log('value of property color:', vechicle['color']);
console.log('value of property isConvertible:', vechicle['isConvertible']);

var pet = {
  name: 'Thor',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet', pet);
