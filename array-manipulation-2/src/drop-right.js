/* exported dropRight */

/*
input: an array and a positive integer
output: A new Array containing the elements of array before the last count elements

define function {
  -assign [] to newArray
  - if check if array = []
    return newArray
-use a for loop to loop through array. initalize i to 0;  i < array.length - count and push elements to newArray
}
*/

function dropRight(array, count) {
  const newArray = [];
  if (array === []) {
    return newArray;
  }
  for (let i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
