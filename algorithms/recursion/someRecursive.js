/* 
Write a functions called someRecursive which accepts
an array and a callback. The function returns true
if a single value in the array returns true when passed
to the callback, otherwise it returns false.
*/

const someRecursive = (arr, fxn) => {
  if (!arr.length) return false;
  if (fxn(arr[0])) return true;
  return someRecursive(arr.slice(1), fxn);
};