const swap = require('./helpers');

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i, right);
  return i;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;

  const index = partition(arr, left, right);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);

  return arr;
};

module.exports = quickSort;