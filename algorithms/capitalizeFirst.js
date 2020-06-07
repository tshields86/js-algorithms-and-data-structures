/* 
Write a recursive function called capitalizeFirst.
Given an  array of strings, capitalize the first
letter of each string in the array.
*/

const capitalizeFirst = ([x, ...xs]) => {
  if (!x) return [];
  const properCase = x[0].toUpperCase() + x.slice(1);
  return [properCase, ...capitalizeFirst(xs)];
};