// Question: sort an array using merge sort algorithm

//-------------------------merge sort-------------------------//
// Merge sort is a divide and conquer algorithm that divides the input array into two halves,
// calls itself for the two halves, and then merges the two sorted halves.

function sortAlgo(arr, left, mid, right) {
  let temp = [];
  let low = left;
  let high = mid + 1;
  while (low <= mid && high <= right) {
    if (arr[low] < arr[high]) {
      temp.push(arr[low]);
      low++;
    } else {
      temp.push(arr[high]);
      high++;
    }
  }
  while (low <= mid) {
    temp.push(arr[low]);
    low++;
  }
  while (high <= right) {
    temp.push(arr[high]);
    high++;
  }

  for (let i = left; i <= right; i++) {
    arr[i] = temp[i - left];
  }
  return arr;
}

function mergeSort(arr, left, right) {
  if (left == right) {
    return;
  }
  let mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  sortAlgo(arr, left, mid, right);
  return arr;
}

function main() {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", arr);
  let sortedArr = mergeSort(arr, 0, arr.length - 1);
  console.log("Sorted array:", sortedArr);
}

main();
