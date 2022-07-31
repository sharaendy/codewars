// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//! 1
function getCount(str) {
  return str.split('').filter((item) => {
    switch (item) {
      case 'a':
        return true;
      case 'e':
        return true;
      case 'i':
        return true;
      case 'o':
        return true;
      case 'u':
        return true;
      default:
        return false;
    }
  }).length;
}

//! 2
function getCount(str) {
  const template = 'aeiouAEIOU'
  return str.split('').filter(item => template.includes(item)).length;
}