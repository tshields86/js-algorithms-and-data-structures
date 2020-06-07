/* 
Write a function called sameFrequency. Given two
positive itegers, find out if the two numbers have
the same frequency of digits.
*/

const countFrequency = str => {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
};

const checkFrequency = (map, str) => {
  for (let char of str) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
  }
  return true;
};

const sameFrequency = (num1, num2) => {
  const frequency = countFrequency(num1.toString());
  return checkFrequency(frequency, num2.toString());
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false