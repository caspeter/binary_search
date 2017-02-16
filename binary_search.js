'use strict';

function binarySearch(arr, target){
  var low = 1;
  var high = arr.length;
  while (low <= high) {
    let middle = Math.floor(low + (high-low)/2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      low = middle + 1;
    } else{
      high = middle -1;
    }
  }
  return -1;
}

console.log(binarySearch([2,4,7,9,10,13,16,34,67,97], 4)); //1
console.log(binarySearch([2,4,7,9,10,13,16,34,67,97], 67)); //8
console.log(binarySearch([2,4,7,9,10,13,16,34,67,97], 100)); //-1

// Hi Teddi! You said that if I could write the code before lunch started it would be able to count for my binary search in under 20 minutes. Here it is! Thanks!
