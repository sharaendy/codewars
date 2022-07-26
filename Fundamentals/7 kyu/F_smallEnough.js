// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// 1
function smallEnough(coll, limit){
  const sourceLen = coll.length;
  const checkedLen = coll.filter((num) => num <= limit).length;
  return sourceLen === checkedLen;
}

// 2
function smallEnough(a, limit) {
  let result = true;
  a.forEach((num) => {
    if (num > limit) {
      result = false;
    }
  });  
  return result;
}

