/* 
Write a recursive function called nestedEvenSum.
Return the sum of all even numbers in an object
which may contain nested object.
*/

const nestedEvenSum = obj => {
  return Object.values(obj).reduce((sum, value) => {
    if (typeof value === 'object') return sum + nestedEvenSum(value);
    if (typeof value === 'number' && value % 2 === 0) return sum + value;
    return sum;
  }, 0);
};

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup'
    }
  }
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10