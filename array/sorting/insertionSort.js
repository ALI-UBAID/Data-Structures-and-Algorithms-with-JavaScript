//Question : sort an array using insertion sort

//-------------------------insertion sort-------------------------//
//insertion sort is a simple sorting algorithm that works by repeatedly taking an element from
// the unsorted part of the array and inserting it into the sorted part of the array.
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
}
/*time complexity: O(n^2) where n is the number of elements in the array. 
The outer loop runs n times, and the inner loop runs at most n times in the worst case,
resulting in a total of O(n^2) comparisons and swaps. */

//space complexity: O(1) - no additional space is required for the sorting process,
//as the sorting is done in place by swapping elements within the original array.

let arr = [64, 25, 12, 22, 11];
let result = insertionSort(arr);
console.log("Sorted array: " + result);
