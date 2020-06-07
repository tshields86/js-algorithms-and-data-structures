/*
Write a function called sameFrequencySquared, which accespts
two arrays. The function should return true if every value
in the array has it's corresponding value squared in the second
array. The frequency of values must be the same.
*/

const countFrequency = (arr, fxn) => {
  const map = new Map();
  for (let x of arr) {
    if (fxn) x = fxn(x);
    map.set(x, (map.get(x) || 0) + 1);
  }
  return map;
};

const checkFrequencies = (map1, map2) => {
  for (let [key, val] of map1) {
    if (map2.get(key) !== val) return false;
  }

  return true;
};

const sameFrequencySquared = (arr1, arrStr) => {
  if (arr1.length !== arrStr.length) return false;

  const freq1 = countFrequency(arr1, x => x * x);
  const freq2 = countFrequency(arrStr);

  return checkFrequencies(freq1, freq2);
};

console.log(sameFrequencySquared([1,2,3], [4,1,9])); // true
console.log(sameFrequencySquared([1,2,3], [1,9])); // false
console.log(sameFrequencySquared([1,2,1], [4,4,1])); // false
console.log(sameFrequencySquared([1,2,3,2], [9,1,4,4])); // true