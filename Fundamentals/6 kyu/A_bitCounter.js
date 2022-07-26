// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(num) {
  const binaryNum = [];
  let working = true;
  let current = num;
  
  while (working) {
    const rest = current % 2;
    binaryNum.push(rest);
    current = Math.floor(current / 2);
    if (current < 1) {
      working = false;
    }
  }
  return binaryNum.filter(num => num === 1).length;
};