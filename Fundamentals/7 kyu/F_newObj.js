// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

// For example:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

//! 1
function colourAssociation(array) {
  return array.map((item) => {
    const obj = {};
    obj[item[0]] = item[1];
    return obj;
  }); 
}

//! 2
function colourAssociation(array) {
  return array.map((item) => {
    return {[item[0]]: item[1]};
  }); 
}