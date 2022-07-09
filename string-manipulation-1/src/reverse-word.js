/* exported reverseWord */
/*
input: single word string
output: the word reversed
-loop through string starting at index i = string.length - 1 and we will decrement i--
  concat letter to wordReversed
*/

function reverseWord(word) {
  let wordReversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    wordReversed += word[i];
  }
  return wordReversed;
}
