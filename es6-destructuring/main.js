const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

const {
  title,
  author,
  libraryID
} = book1;

console.log(`The title of the book is ${title}, the author of the book is ${author}, and the library id is ${libraryID}.`);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const {
  title: title2,
  author: author2,
  libraryID: libraryID2
} = book2;

console.log(`The title of the book is ${title2}, the author of the book is ${author2}, and the library id is ${libraryID2}.`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

function getBook(index) {
  return library[index];
}

const book3 = getBook(0);
const book4 = getBook(1);
const book5 = getBook(2);

console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

const [,,, book6 = {}] = library;
console.log('book6:', book6);
