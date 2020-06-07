/* 
Write a recursive function called capitalizeWords.
GIven an array of words, return a new array containing
each word capitalized.
*/

const capitalizeWords = ([x, ...xs]) => {
  return x ? [x.toUpperCase(), ...capitalizeWords(xs)] : [];
};