// функция прнимает массив и колбэк, возвращает структуру

function groupBy(arr, callback) {
  const result = {};

  arr.forEach((item) => {
    const data = callback(item);
    if (!result.hasOwnProperty(data)) {
      result[data] = [];
    }
    result[data].push(item);
  });

  return result;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) 

// { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }