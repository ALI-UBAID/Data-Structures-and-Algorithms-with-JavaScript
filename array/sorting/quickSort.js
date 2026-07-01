// Question: sort an array using quick sort algorithm

//-------------------------quick sort-------------------------//
// Quick sort is a divide and conquer algorithm that selects a pivot element from the array
//  and partitions the other elements into two sub-arrays, according to whether they are less
//  than or greater than the pivot. The sub-arrays are then sorted recursively.

function quickSort(arr, low, high) {}

function partition(arr, low, high) {}

function main() {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  let result = partition(arr, 0, arr.length - 1);
  console.log(result);
}

main();
