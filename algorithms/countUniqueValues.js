/* 
Implement a function called countUniqueValues,
which accepts a sorted array, and counts the
unique values in an array. There can be negative
numbers in the array, but it will always be sorted.
*/

const countUniqueValues = array => {
  if (!array.length) return 0;

  let count = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) count++;
  }

  return count;
};

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4