/* exported toObject */
/*
input: An Array containing two elements; a String key and any other JavaScript value
output: Object with one property consisting of the passed keyValuePair
-create an empty object use dot notation to add array at index 0 as the key and array at index 1 as the value
*/

function toObject(keyValuePair) {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

/*
input: An Array containing two elements; a String key and any other JavaScript value
output: Object with one property consisting of the passed keyValuePair
-create an empty object use bracket notation to add array at index 0 as the key and array at index 1 as the value
*/
