// Question: Union of two sorted arrays

// -------------------------Brute Force Approach-------------------------//
// To find the union of two sorted arrays, we can use a set to store the unique elements of both arrays.
//  We can iterate through both arrays and add each element to the set. Finally,
//  we can convert the set to an array and sort it to get the final result.
function unionOfSortedArrays(arr1, arr2) {
  let n = arr1.length;
  let n1 = arr2.length;
  let st = new Set();
  for (let i = 0; i < n; i++) {
    st.add(arr1[i]);
  }

  for (let i = 0; i < n1; i++) {
    st.add(arr2[i]);
  }

  let result = [];
  for (let item of st) {
    result.push(item); //time complexity is O(k) where k is the number of unique elements in the union of the two arrays, and in the worst case O(n + n1) when all elements are unique.
  }
  result.sort((a, b) => a - b); // time complexity of sorting is O(k log k) where k is the number of unique elements in the union of the two arrays.
  return result;
}
// time complexity is O(n + n1) + O(k) + O(k log k) where k is the number of unique elements in the union of the two arrays
/* space complexity is O(k) and in the worst case O(n + n1) when all elements are unique,
 because we are using a set to store the unique elements of the two arrays. */

//  -------------------------Optimal Approach-------------------------//
// To find the union of two sorted arrays, we can use a two-pointer approach. We can iterate
//  through both arrays simultaneously and compare the elements. If the element in the first array
//  is smaller, we add it to the result and move the pointer in the first array. If the element
//  in the second array is smaller, we add it to the result and move the pointer in the second array.
//  If both elements are equal, we add one of them to the result and move both pointers.
// We also need to check for duplicates before adding an element to the result.
function unionOfSortedArraysOptimal(arr1, arr2) {
  let n = arr1.length;
  let n1 = arr2.length;
  let result = [];
  let i = 0;
  let j = 0;
  while (i < n && j < n1) {
    if (arr1[i] < arr2[j] && result.includes(arr1[i]) === false) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] && result.includes(arr2[j]) === false) {
      result.push(arr2[j]);
      j++;
    } else {
      if (!result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  while (i < n) {
    if (result.includes(arr1[i]) === false) {
      result.push(arr1[i]);
    }
    i++;
  }

  while (j < n1) {
    if (result.includes(arr2[j]) === false) {
      result.push(arr2[j]);
    }
    j++;
  }
  return result;
}
// time complexity is O(n + n1) because even after adding two while loops, we are just completing the iteration through both arrays only once
// space complexity is O(k) and in the worst case O(n + n1) when all elements are unique

let arr1 = [1, 2, 4, 5, 6];
let arr2 = [2, 3, 5, 7];
// let result = unionOfSortedArrays(arr1, arr2);
let result = unionOfSortedArraysOptimal(arr1, arr2);
console.log("Union of two sorted arrays: " + result);
