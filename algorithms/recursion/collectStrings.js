/* 
Write a function called collectStrings which accepts
an object and returns an array of all the values in the
object that have a typeof string.
*/

const collectStrings = obj => {
  return Object.values(obj).reduce((arr, value) => {
    if (typeof value === 'string') return [...arr, value];
    if (typeof value === 'object') return [...arr, ...collectStrings(value)];
    return arr;
  }, []);
};

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj)); // ['foo', 'bar', 'baz']