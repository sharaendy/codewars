// Write reverseList function that simply reverses lists.

function reverseList(arr) {
  let reversedArr = [];
  for (const item of arr) {
    reversedArr.unshift(item);
  }
  return reversedArr;
}