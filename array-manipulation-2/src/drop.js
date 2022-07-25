/* exported drop */
/*
input: an array and a positive integer
output: A new Array containing the elements of array after the first count elements
-create an empty array
-check if array is empty
-create a for loop and starting at index count with and the condition that i < array.length
-return new array
*/

function drop(array, count) {
  const nElements = [];
  if (array.length > 0) {
    for (let i = count; i < array.length; i++) {
      nElements.push(array[i]);
    }
  }
  return nElements;
}
