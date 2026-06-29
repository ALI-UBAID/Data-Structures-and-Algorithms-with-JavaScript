//question : sort an array using selection sort

//-------------------------selection sort-------------------------//
//selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element
// from the unsorted part of the array and putting it at the right position.
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let mm = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[mm]) {
        mm = j;
      }
    }
    [arr[i], arr[mm]] = [arr[mm], arr[i]];
  }
}
//time complexity is O(n^2) and space complexity is O(1) because we are not using any extra space.

let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Sorted array: " + arr);
