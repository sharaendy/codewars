//reverse string 

//! 1
function solution(str) {
  const reversedStr = [];
  str.split('').forEach(item => reversedStr.unshift(item));
  return reversedStr.join();
}

//! 2