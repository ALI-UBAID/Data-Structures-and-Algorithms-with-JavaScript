// Question: Convert roman characters to Integers

function romanToInteger(str) {
  let sum = 0;
  let map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  //converting into a integer
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) < map.get(str[i + 1])) {
      sum -= map.get(str[i]);
    } else {
      sum += map.get(str[i]);
    }
  }
  return sum;
}
// time complexity is O(n) because we are iterating the whole string.
// space complexity is O(1) because we are always storing 7 entries for roman characters.

let str = "MCMXIV";
let result = romanToInteger(str);
console.log(`Roman to Integers: ${result}`);
