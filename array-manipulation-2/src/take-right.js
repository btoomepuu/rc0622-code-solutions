/* exported takeRight */
/*
input: an array and a positive integer
output: A new Array containing the last count elements of array. If the count is larger than the length of the array, then a shallow copy of the entire array is returned.
-assign [] to newArray
-check if count > array.length
  assign array to newArray and return newArray
-use a for loop to loop through array. set i equal to count and push elements to newArray

*/

function takeRight(array, count) {
  const newArray = [];
  if (count > array.length) {
    array.forEach(element => newArray.push(element));
    return newArray;
  }
  for (let i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/*
input: an array and a positive integer
output: A new Array containing the last count elements of array. If the count is larger than the length of the array, then a shallow copy of the entire array is returned.
define function {
-assign [] to newArray
-check if count > array.length
  use foreEach to push values from array to newArray return newArray
-use a for loop to loop through array. set i = array.length - count and push elements to newArray
}

*/
