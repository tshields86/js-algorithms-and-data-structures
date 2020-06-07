/* 
Implement a function called areThereDuplicates which
accepts a variable number of arguments, and checks
whether there are any duplicates among the arguments
passed in.
*/

const areThereDuplicates = (...args) => {
  return args.length !== new Set(args).size;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
console.log(areThereDuplicates('a', 'b', 'c', 'd')); // false