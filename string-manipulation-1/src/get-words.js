/* exported getWords */
/*
input: string containing zero or more words, separated by spaces
output: array with each word from the parmeter is an element
-assign '' to variable word, and [] to wordArray variable
-loop through string
  if string[i] !== ' ' push to word
  else push word to array and reassign '' to word
-
*/
// function getWords(string){
//   let word = '';
//   let wordArray = [];
//   for (let i = 0; i < string.length; i++){
//    if (string[i] !== ' '){
//      word += string[i]
//    }  else if (string[i] === ' ' || i < string.length){
//      wordArray.push(word);
//      word = '';
//    }
//     console.log(word);
//   }

//   return wordArray;
// }

function getWords(string) {
  let word = '';
  const wordArray = [];
  if (string === '') {
    return wordArray;
  }
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case ' ':
        wordArray.push(word);
        word = '';
        break;
      default:
        word += string[i];
    }
  }
  wordArray.push(word);
  return wordArray;
}

/*
input: string containing zero or more words, separated by spaces
output: array with each word from the parmeter is an element
-assign '' to variable word, and [] to wordArray variable
if the string === ''
  return wordArray; ([])
-loop through string
  switch statement that pushes word to wordArray   if it encounters a space defaults to concat      word
-when for loop completes push word to wordArray
return wordArray
*/
