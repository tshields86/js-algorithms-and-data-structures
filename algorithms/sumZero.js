/* 
Write a function called sumZero which accepts a sorted
array of integers. The function should find the first pair
where the sum is 0;. Return an array that includes both
values that sum to zero or undefined if a pair does not exist
*/

const sumZero = array => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];

    if (sum === 0) return [array[left], array[right]];
    else if (sum < 0) left++;
    else right--;
  }
};

console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3,3]
console.log(sumZero([-2,0,1,3])); // undefined
console.log(sumZero([1,2,3])); // undefined