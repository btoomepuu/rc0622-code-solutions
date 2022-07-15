const books = [
  {
    isbn: '12398439',
    title: 'Mistborne',
    author: 'Brandon Sanderson'
  },
  {
    isbn: '12399374',
    title: 'The Dresden Files',
    author: 'Jim Butcher'
  },
  {
    isbn: '12638439',
    title: 'Interview With the Vampire',
    author: 'Anne Rice'
  }
];

console.log('books array:', books);
console.log('typeof books:', typeof books);

JSON.stringify(books);
console.log('JSON string books', JSON.stringify(books));
console.log('JSON typeof books:', typeof JSON.stringify(books));

const student = '[{ "id": 12345, "name": "Taylor" }]';

console.log('type of student:', typeof student);
const studentJsonParse = JSON.parse(student);
console.log('student parsed JSON type of:', typeof studentJsonParse);
