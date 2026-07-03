// question: Rotate an array by K places to the right

// -------------------------rotate array by K places-------------------------//
// To rotate an array by K places to the right, we can use a temporary array to store
// the last K elements of the original array, then shift the remaining elements to the right,
// and finally copy the elements from the temporary array back to the original array.
function rotateArray(arr, k) {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }
  //time complexity is O(k) and space complexity is O(k) because we are using an extra array of size k to store the last k elements of the original array.

  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }
  //time complexity is O(n - k) and space complexity is O(1) because we are not using any extra space.

  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - (n - k)]; //i - (n - k) gives the zero-based index of the temp array, otherwise, it would be out of bounds.
  }
  //time complexity is O(k) and space complexity is O(1) because we are not using any extra space.

  return arr;
}

//time complexity is O(n) + O(k) and space complexity is O(k) because we are using an extra array
// of size k to store the last k elements of the original array.

// --------------------------optimal solution-------------------------//
// To rotate an array by K places to the right, we can reverse the entire array,
// then reverse the first K elements and finally reverse the remaining elements.
function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArrayOptimal(arr, k) {
  let n = arr.length;
  k = k % n; // to handle cases where k is greater than n
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}
// time complexity is O(n) and space complexity is O(1) because we are not using any extra space.

let arr = [1, 2, 3, 4, 5];
let k = 2;
// let result = rotateArray(arr, k);
let result = rotateArrayOptimal(arr, k);
console.log(`Array after rotating by ${k} places: ${result}`);
