/* exported initial */
/*
input: array
output: new array
-assign [] to a newArray variable
-loop through array and add all elements except the last to newArray
-return newArray
*/

function initial(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/*
input: array
output: new array
-assign [] to newArray variable
-loop through array and .push() all elements except the last to newArray
-return newArray
*/
