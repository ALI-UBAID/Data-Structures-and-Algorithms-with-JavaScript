// question : find the second largest element in an array

//-------------------------second largest element-------------------------//
// The second largest element in an array is the element that is greater than all other elements except for the largest one.
// To find the second largest element, we can iterate through the array and keep track of the largest and second largest elements.
function secondLargest(arr) {
  let largest = -Infinity; // Initialize largest to the smallest possible value
  let secondLargestlargest = -Infinity;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
//time complexity is O(n) and space complexity is O(1) because we are not using any extra space.

let arr = [10, 15, 14, 20, 45, 22, 24, 25, 22];
let result = secondLargest(arr);
console.log(`second largest element: ${result}`);
