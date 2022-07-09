/* exported capitalize */
/*
/*
input: string
output: string
-loop through string
  -capitalize string at index 0
  -lowercase everthing after index 0
*/
function capitalize(word) {
  let firstLetter = word[0].toUpperCase();
  let followingLetter = '';
  for (let i = 1; i < word.length; i++) {
    followingLetter += word[i].toLowerCase();
  }
  word = firstLetter += followingLetter;
  return word;
}
/*
input: string
output: string
- capitalize first letter and save to a variable
-loop through word starting at index 1, until the end, making each letter lowercase and assigning it them to a seperate variable
-return the concatination of the capitalized first letter and the string of lower case letters
*/
