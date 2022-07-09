/* exported isLowerCased */
/*
input: string
output: boolean
-loop through string
  -check if string at index i is uppercase
    if it is return false
*/
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) { return false; }
  }
  return true;
}

/*
input: string
output: boolean
-loop through string
  -check if string at index i is lowercase
    if not return false
*/
