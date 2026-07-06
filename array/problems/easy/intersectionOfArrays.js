// Question : Given two arrays, write a function to compute their intersection.

// -------------------------Brute Force Approach-------------------------//
// To find the intersection of two arrays, we can use a nested loop to iterate through both arrays
//  and check if the elements are equal. If they are, we can add them to a new array and return it at the end.
function intersectionOfArrays(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let intersection = [];
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (arr1[i] == arr2[j]) {
        intersection.push(arr1[i]);
        break;
      }
    }
  }
  return intersection;
}
// time complexity is O(n^2) and space complexity is O(n)
// because we are using an extra array to store the intersection.

//-------------------------Optimal Approach-------------------------//
function intersectionOfArraysOptimal(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let intersection = [];
  let mp = new Map();
  for (let i = 0; i < n1; i++) {
    mp.set(arr1[i], (mp.get(arr1[i]) || 0) + 1);
  }

  for (let i = 0; i < n2; i++) {
    if (mp.has(arr2[i])) {
      intersection.push(arr2[i]);
    }
  }

  return intersection;
}

let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];
console.log(intersectionOfArrays(arr1, arr2));
console.log(intersectionOfArraysOptimal(arr1, arr2));
