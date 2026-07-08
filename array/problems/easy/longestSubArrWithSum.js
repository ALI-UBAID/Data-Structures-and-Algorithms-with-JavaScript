// Question : find the length of the longest subarray with sum equal to k

// -------------------------Brute Force Approach-------------------------//
function longestSubArrWithSum(arr, k) {
  let n = arr.length;
  let length = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum == k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
}

let arr = [1, 2, 3, 4, 5];
let k = 10;
console.log(longestSubArrWithSum(arr, k));
