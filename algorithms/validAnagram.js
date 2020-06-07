/* 
Given two strings, write a function to determine if the
second string is an anagram of the first. An anagram is
a word, phrase, or name formed by rearranging the
letters of another, such as cinema, formed from iceman.
*/

const countFrequency = str => {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
};

const checkFrequencies = (map, str) => {
  for (let char of str) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
  }
  return true;
};

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const frequency = countFrequency(str1);

  return checkFrequencies(frequency, str2);
};

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true