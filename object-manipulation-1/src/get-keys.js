/* exported getKeys */
/*
input: object
output: array with given objects keys
-create empty array
-use for in to access keys in the object
  push keys to array
-return array
*/

function getKeys(object) {
  const keysArray = [];
  for (const keys in object) {
    keysArray.push(keys);
  }
  return keysArray;
}

/*
input: object
output: array with given objects keys
-create empty array
-use for in to access keys in the object
  push keys to array
-return array
*/
