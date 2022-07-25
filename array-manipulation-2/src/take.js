/* exported take */
/*
input: an array and a positive integer
output: an array containing the first number of elements,given integer
-create an empty array
-create a for loop and starting at index 0 with and the condition that i < count
*/

function take(array, count) {
  const nElements = [];
  if (array.length > 0) {
    for (let i = 0; i < count; i++) {
      nElements.push(array[i]);
    }
  }
  return nElements;
}

/*
input: an array and a positive integer
output: an array containing the first number of elements,given integer
-create an empty array
-check if array is empty
-create a for loop and starting at index 0 with and the condition that i < count
-return new array
*/
