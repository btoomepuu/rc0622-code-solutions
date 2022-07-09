/* exported isUpperCased */
/*
input: string
output: boolean
-loop through string
  -check if string at index i is lowercase
    if it is return false
*/
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) { return false; }
  }
  return true;
}
