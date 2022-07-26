// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// 1
function countPositivesSumNegatives(input) {
  if (input === null) {
    return [];
  }
  
  let positiveCount = 0;
  let negativeSum = 0;
  
  input.forEach((num) => {
    if (num > 0) {
      positiveCount += 1;      
    } 
    if (num < 0) {
      negativeSum += num;
    }
  });
  
  if (positiveCount === 0 && negativeSum === 0) {
    return [];
  }
  return [positiveCount, negativeSum];
}

// 2
function countPositivesSumNegatives(input) {
  if (input === null) {
    return [];
  }
  
  const positiveCount = input.filter((num) => num > 0).length;
  const negativeSum = input.reduce((sum, num) => {
    if (num < 0) {
      sum += num;
      return sum;
    }
    return sum;
  }, 0);
  if (positiveCount === 0 && negativeSum === 0) {
    return [];
  }
  return [positiveCount, negativeSum];
}