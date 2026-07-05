// Question: Move all zeros to the end of an array while maintaining the relative order of the non-zero elements.

// -------------------------move zeros to end-------------------------//
// -------------------------Brute Force Approach-------------------------//
// To move all zeros to the end of an array while maintaining the relative order of the non-zero elements,
//  we can use a temporary array to store the non-zero elements and then fill the remaining positions with zeros.
function moveZerosToEnd(arr) {
  let n = arr.length;
  let temp = [];
  let index = 0;
  for (let i = 0; i < n; i++) {
    //time complexity is O(n) where n is the number of elements in the array
    if (arr[i] !== 0) {
      temp[index++] = arr[i];
    }
  }

  for (let i = n - count; i < n; i++) {
    //time complexity is O(k) where k is the number of zero elements
    if (arr[i] === 0) {
      temp[index++] = arr[i];
    }
  }
  return temp;
}
// time complexity is O(n) + O(k) and space complexity is O(n) because we are using an extra array of size n to store the non-zero elements of the original array.

// -------------------------Optimal Approach-------------------------//
// To move all zeros to the end of an array while maintaining the relative order of the non-zero elements,
// we can use a two-pointer approach. We can iterate through the array and keep track of the position
// to place the next non-zero element. After placing all non-zero elements,
// we can fill the remaining positions with zeros.
function moveZerosToEndOptimal(arr) {
  let n = arr.length;
  let count = 0; // Count of non-zero elements
  let index = 0;
  for (let i = 0; i < n; i++) {
    //time complexity is O(n) where n is the number of elements in the array
    if (arr[i] !== 0) {
      arr[index++] = arr[i];
    } else {
      count++;
    }

    for (let i = n - count; i < n; i++) {
      //time complexity is O(k) where k is the number of zero elements
      arr[i] = 0;
    }

    return arr;
  }
}
// time complexity is O(n) + O(k) and space complexity is O(1) because we are not using any extra space.

let arr = [0, 1, 0, 3, 12];
// arr = moveZerosToEnd(arr);
arr = moveZerosToEndOptimal(arr);
console.log("Array after moving zeros to the end: " + arr);
