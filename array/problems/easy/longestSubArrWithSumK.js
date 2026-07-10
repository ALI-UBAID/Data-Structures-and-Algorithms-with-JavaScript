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
// time complexity is O(n^2) and space complexity is O(1) because we are not using any extra space.

// -------------------------Optimal Approach-------------------------//
function longestSubArrWithSumOptimal(arr, k) {
  let n = arr.length;
  let length = 0;
  let sum = arr[0];
  let i = 0;
  let j = 0;
  while (j < n) {
    j++;
    sum += arr[j];
    if (sum == k) {
      length = Math.max(length, j - i + 1);
      sum = 0;
      i = j;
    } else if (sum > k) {
      i++;
    }
  }

  return length;
}
// time complexity is O(n)

// -------------------------Optimal Approach for negatives and positive-------------------------//
function longestSubArrWithMap(arr, k) {
  let sum = 0;
  let map = new Map();
  let maxlen = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sum == k) {
      maxlenlen = i + 1;
    }

    if (map.has(sum - k)) {
      maxlen = Math.max(maxlen, i - map.get(sum - k));
    } else {
      map.set(sum, i);
    }
  }
  return maxlen;
}
// time complexity is O(n) because we are iterating the whole array.
//space complexity is O(k) where k is the number of elements stored in the map.

let arr = [1, 2, 3, 4, 5, 1, 1, 0, 1, 1, 1, 5, 5];
let k = 10;
// console.log(longestSubArrWithSum(arr, k));
// console.log(longestSubArrWithSumOptimal(arr, k));
console.log(longestSubArrWithMap(arr, k));
