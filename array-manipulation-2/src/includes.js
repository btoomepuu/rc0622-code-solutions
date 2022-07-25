/* exported includes */
/*
input: an array and a positive integer
output: boolean
-check loop empty
-use a for loop to iterate through the given array
  compare each elements in array to given value
    if === return true
return false
*/

function includes(array, value) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (value === array[i]) {
        return true;
      }
    }
  }
  return false;
}
