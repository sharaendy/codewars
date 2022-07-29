//найти объекдинение объектов и обновить свойства

const obj1 = {
  key1: 'value1',
  key2: 'value2',
};

const obj2 = {
  key2: 'newValue',
  key3: 'value3',
};

function abs(obj1, obj2) {
  const obj1Entries = Object.keys(obj1);
  const obj2Entries = Object.keys(obj2);
  const commonObj = Object.assign({}, obj1);

  obj2Entries.forEach((key) => {
    if (obj1Entries.includes('key')) {
      commonObj.key = obj2.key;
    }
  });

  return commonObj;
}

console.log(abs(obj1, obj2));

