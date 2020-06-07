/* 
Wrtie a function called flatten which accepts an
array of arrays and returns a new array with all
values flattened.
*/

const flatten = ([x, ...xs]) => {
  return x ? [...Array.isArray(x) ? flatten(x) : [x], ...flatten(xs)] : [];
};

console.log(flatten([1, 2, 3, [4, 5] ])) // [1,2,3,4,5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1,2,3,4,5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]