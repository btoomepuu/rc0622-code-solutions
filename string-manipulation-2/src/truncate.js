/* exported truncate */
/*
input: integer(length), string
output: shortened string (length characters long)
concat with ...
function truncate
  assign '' to truncatedString
  use for loop to loop through string
    concat to truncatedString until length
  return truncatedStrig += '...'
 */
function truncate(length, string) {
  let truncatedString = '';
  if (length > string.length || string === '') {
    truncatedString = string;
  } else {
    for (let i = 0; i < length; i++) {
      truncatedString += string[i];
    }
  }
  truncatedString += '...';
  return truncatedString;
}

/* exported truncate */
/*
input: integer(length), string
output: shortened string (length characters long)
concat with ...
function truncate
  assign '' to truncatedString
  use for loop to loop through string
    check if length > string.length or ''
      truncatedString = string;
    concat to truncatedString until length
  return truncatedString += '...'

 */
