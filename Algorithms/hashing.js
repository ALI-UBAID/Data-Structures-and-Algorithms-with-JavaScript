//-------------------------hashing-------------------------//
//hashing is a technique to store data in key value pairs. It is used to store data in a way that allows
// for fast retrieval. The key is used to access the value. The value can be of any type.
// The key is usually a string or a number. The value can be of any type.
// The key is unique, meaning that no two keys can have the same value. The value can be duplicated,
//  meaning that multiple keys can have the same value. The key is used to access the value,
// and the value is used to store the data.

//hashing stores data so that it can be accessed quickly, unlike linear search.
// It uses a hash function to convert the key into an index in an array.

//--------------------------hashing with array-------------------------//
let arr = [1, 2, 2, 3, 1];
let n = arr.length;

let hash = new Array(n + 1).fill(0); // create a hash array of size arr+1 and fill it with 0

//store frequency of each element in the hash array
for (let i = 0; i < n; i++) {
  hash[arr[i]]++; // increment the value at the index of the element in the hash array to store the frequency of the element//
}

//print the frequency of each element in the hash array
// for (let i = 0; i < hash.length; i++) {
//   if (hash[i] > 0) {
//     console.log(i + ": " + hash[i]);
//   }
// }

//--------------------------hashing with map-------------------------//
let map = new Map(); // create a map to store key value pairs

for (let num of arr) {
  map.set(num, (map.get(num) || 0) + 1);
}

for (let mp of map) {
  if (map.get(mp) > 1) {
    console.log(true);  
  }
}
