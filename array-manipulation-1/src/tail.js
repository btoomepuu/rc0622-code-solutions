/* exported tail */
/*
input: array
output: new array
-assign [] to a newArray variable
-loop through array and add all elements except the first to newArray
-return newArray
*/

function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/*
input: array
output: new array
-assign [] to a newArray variable
-loop through array starting at index 1 and .push() all elements to newArray
-return
*/
