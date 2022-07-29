function sum(a) {
  console.log(a);
  return function(b) {
    const resultAB = a + b;
    console.log(resultAB);
    return function(c) {
      const resultABC = resultAB + c;
      console.log(resultABC);
    } 
  };
}

console.log(sum(5)(4)(11));
