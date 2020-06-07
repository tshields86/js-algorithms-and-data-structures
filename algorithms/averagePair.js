/* 
Write a functions called averagePair. Given a
sorted array of integers and a target average,
determine if there is a pair of values in the array
where the average of the pair equals the target agerage.
*/

const averagePair = (array, average) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let avg = (array[start] + array[end]) / 2 ;
    if (avg === average) return true;
    else if (avg < average) start++;
    else end--;
  }
  return false;
};

console.log(averagePair([1,2,3], 2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([], 4)); // false