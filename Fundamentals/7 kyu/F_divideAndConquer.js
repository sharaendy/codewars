// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
  let numbers = 0;
  let strings = 0;
  
  x.forEach(item => typeof item === 'number' ? numbers += item : strings += Number(item));
  
  return numbers - strings;
}

