/* 
Write a function called linearSearch which accepts an
array and a value, and returns the index at which the
value exists. If the value does not exist in the array,
return -1.
*/

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};