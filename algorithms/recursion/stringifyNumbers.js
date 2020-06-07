/* 
Write a function called stringifyNumbers which takes
in an object and finds all of the values which are
numbers and converts them to strings.
*/

const stringifyNumbers = obj => {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) newObj[key] = stringifyNumbers(value);
    else if (typeof value === 'number') newObj[key] = value.toString();
    else newObj[key] = value;
    return newObj;
  }, {});
};

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(obj));

/* 
{
  num: '1',
  test: [],
  data: {
    val: '4',
      info: {
      isRight: true,
        random: '66'
    }
  }
}
*/
