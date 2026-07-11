// Question: Convert Integer to Roman

function integerToRoman(num) {
  let chars = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = "";

  for (let i = 0; i < numbers.length; i++) {
    while (num >= numbers[i]) {
      roman += chars[i];
      num -= numbers[i];
    }
  }
  return roman;
}
// Time Complexity: O(1) — The arrays have only 13 fixed values, so the loop runs a constant number of times regardless of the input.
// Space Complexity: O(1) — Only two fixed-size arrays are used (13 elements each). (If counting the output string, it's still O(1).

let num = 49;
let result = integerToRoman(num);
console.log(result);
