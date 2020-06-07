/* 
Write a function called maxSubarraySum which accepts
an array of intergers and a number called n. The function
should calculate the maximum sum of n consecutive
elements in the array.
*/

const maxSubarraySum = (array, n) => {
  if (array.length < n) return null;

  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  let tempSum = maxSum;
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
};

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)); // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxSubarraySum([4,2,1,6], 1)); // 6
console.log(maxSubarraySum([4,2,1,6,2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null