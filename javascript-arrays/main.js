var colors = ['red', 'white', 'blue'];
console.log('value at color array index 0', colors[0]);
console.log('value at color array index 1', colors[1]);
console.log('value at color array index 2', colors[2]);
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
console.log('value of colors', colors);

var students = ['bob', 'mike', 'charolette', 'becca'];
var numberOfStudents = students.length;
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log(`the last student in the arrat is ${lastStudent}`);
console.log('value of students', students);
