// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  
  str.split('').forEach((char) => {
    if (char.toUpperCase() === 'X') {
      xCount += 1;
    } else if (char.toUpperCase() === 'O') {
      oCount += 1;
    }
  });
  
  return xCount === oCount;
}