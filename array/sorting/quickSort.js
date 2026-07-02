// Question: sort an array using quick sort algorithm

//-------------------------quick sort-------------------------//
// Quick sort is a divide and conquer algorithm that selects a pivot element from the array
//  and partitions the other elements into two sub-arrays, according to whether they are less
//  than or greater than the pivot. The sub-arrays are then sorted recursively.

function quickSort(arr, low, high) {
  let pivot = arr[low];
  let left = low;
  let right = high;
  while (left < right) {
    while (arr[left] <= pivot && left <= high - 1) {
      left++;
    }
    while (arr[right] > pivot && right >= low + 1) {
      right--;
    }
    if (left < right) {
      [arr[right], arr[left]] = [arr[left], arr[right]];
    }
  }
  [arr[right], arr[low]] = [arr[low], arr[right]];
  return right;
}
// time complexity of this function: O(n) where n is the number of elements in the array.

function partition(arr, low, high) {
  if (low < high) {
    let part = quickSort(arr, low, high);
    partition(arr, low, part - 1);
    partition(arr, part + 1, high);
  }
  return arr;
}
//time complexity of this function: O(log n) where n is the number of divisions made to the array.

function main() {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  let result = partition(arr, 0, arr.length - 1);
  console.log(result);
}
/*time complexity: O(n log n) where n is the number of elements in the array.
The quick sort algorithm divides the array into partitions recursively, which takes log n time,
and then sorts the partitions, which takes O(n) time. Therefore, the overall time complexity is O(n log n).*/

/*space complexity: O(1) - no additional space is required for the sorting process, but the recursive calls
will use stack space, which can be O(log n) in the average case and O(n) in the worst case.*/

main();
