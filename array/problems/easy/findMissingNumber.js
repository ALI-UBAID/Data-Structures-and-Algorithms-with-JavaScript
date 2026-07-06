// question: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// -------------------------find missing number-------------------------//
// To find the missing number from the array, we can use the formula to find the sum of first n natural numbers,
// which is n(n+1)/2. We can calculate the sum of the given array and subtract it from the sum of first n natural numbers to get the missing number.
function findMissingNumber(arr) {
  let n = arr.length;
  let sum = ((n + 1) * (n + 2)) / 2; // formula to find the sum of first n natural numbers is n(n+1)/2
  let sumofArray = 0;
  for (let i = 0; i < n; i++) {
    sumofArray += arr[i];
  }
  return sum - sumofArray;
}
// time complexity is O(n) and space complexity is O(1) because we are not using any extra space.

// -------------------------Optimal Approach-------------------------//
// To find the missing number from the array, we can use the XOR operator.
function findMissingNumberOptimal(arr) {
  let n = arr.length;
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i < n; i++) {
    xor1 ^= arr[i]; // XOR of all the elements in the array
    xor2 ^= i + 1; // XOR of all the elements from 1 to n
  }
  xor2 ^= n + 1; // XOR of 0 with itself is 0, so we can ignore it
  return xor1 ^ xor2;
}

let arr = [1, 2, 4, 5];
// let result = findMissingNumber(arr);
let result = findMissingNumberOptimal(arr);
console.log(`Missing number from the array is ${result}`);
