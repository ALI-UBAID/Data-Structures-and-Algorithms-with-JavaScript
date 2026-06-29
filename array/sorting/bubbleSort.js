//question : sort an array using bubble sort

//-------------------------bubble sort-------------------------//
//bubble sort is a simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
//time complexity is O(n^2) and space complexity is O(1) because we are not using any extra space.

let arr = [64, 25, 12, 22, 11];
bubbleSort(arr);
console.log("Sorted array: " + arr);
