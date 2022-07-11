/* exported isVowel */
/*
input: char
output: boolean
-check if char is a vowel (a,e,i,o,u lower or upper)
*/

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}

/*
input: char
output: boolean
-create an array of uppercase and lowercase vowels
-loop through vowels array and compare char
  if true returns true; if none true loop is exited and false is returned

*/
