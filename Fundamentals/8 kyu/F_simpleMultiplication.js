//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const isEven = num => num % 2 === 0 ? true : false;

function simpleMultiplication(number) {
  return isEven(number) ? number * 8 : number * 9;  
}
