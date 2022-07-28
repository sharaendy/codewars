// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(str) {
  const length = str.length;
  const isEven = length % 2 === 0;
  
  if (isEven) {
    const middlePoint = length / 2;
    return str[middlePoint - 1] + str[middlePoint];
  }
  
  return str[Math.floor(length / 2)];
}

