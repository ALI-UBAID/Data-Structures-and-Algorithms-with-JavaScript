// question: Check if an array is sorted in ascending order

// -------------------------check if array is sorted-------------------------//
// To check if an array is sorted in ascending order,
// we can iterate through the array and compare each element with the next one.
function sortCheck(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// time complexity is O(n) and space complexity is O(1) because we are not using any extra space.

let arr = [1, 2, 3, 4, 5];
let result = sortCheck(arr);
console.log(`Is the array sorted? ${result}`);
