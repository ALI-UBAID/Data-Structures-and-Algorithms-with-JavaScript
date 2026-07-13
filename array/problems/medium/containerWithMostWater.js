// question : find the container with most water

function Container(arr) {
  let n = arr.length;
  let maxCon = 0;
  let i = 0,
    j = n - 1;
  while (i < j) {
    let contain = Math.min(arr[i], arr[j]) * (j - i);
    maxCon = Math.max(contain, maxCon);
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxCon;
}
// time complexity is n/2 and space complexity is O(1);

let arr = [1, 8, 4, 5, 6, 7];
console.log(Container(arr));
