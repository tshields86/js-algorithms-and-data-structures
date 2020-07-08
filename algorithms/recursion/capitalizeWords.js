/* 
Write a recursive function called capitalizeWords.
Given an array of words, return a new array containing
each word capitalized.
*/

const capitalizeWords = ([x, ...xs]) => {
  return x ? [x.toUpperCase(), ...capitalizeWords(xs)] : [];
};