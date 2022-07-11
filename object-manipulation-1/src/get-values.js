/* exported getValues */
/*
input: object
output: array with given objects keys
-create empty array
-use for in to access values in the object[key]
  push values to array
-return array
*/

function getValues(object) {
  const valuesArray = [];
  for (const keys in object) {
    valuesArray.push(object[keys]);
  }
  return valuesArray;
}
