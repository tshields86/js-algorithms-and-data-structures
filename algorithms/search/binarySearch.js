/* 
Write a function called binarySearch which accepts a
sorted array and a value and returns the index at which
the value exists. Otherwise, return -1.
*/

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] > val) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};