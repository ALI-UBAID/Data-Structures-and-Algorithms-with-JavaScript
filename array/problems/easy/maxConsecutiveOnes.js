// Question : Given a binary array, find the maximum number of consecutive 1s in this array.

// -------------------------Brute Force Approach-------------------------//
// To find the maximum number of consecutive 1s in a binary array, we can use a nested loop
//  to iterate through the array and count the number of consecutive 1s. We can keep track
//  of the maximum count found so far and return it at the end.
function findMaxConsecutiveOnes(arr) {
  let n = arr.length;
  let max = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      let count = 0;
      for (let j = i; j < n; j++) {
        if (arr[j] == 1) {
          count++;
        } else {
          break;
        }
      }
      max = Math.max(count, max);
    }
  }
  return max;
}
// time complexity is O(n^2) and space complexity is O(1) because we are not using any extra space.

// -------------------------Optimal Approach-------------------------//
function findMaxConsecutiveOnesOptimal(arr) {
  let n = arr.length;
  let max = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return max;
}

let arr = [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1];
// console.log(findMaxConsecutiveOnes(arr));
console.log(findMaxConsecutiveOnesOptimal(arr));
