// question: https://leetcode.com/problems/palindrome-number/
/* A palindrome is a number that reads the same backward as forward. Given an integer x, 
return true if x is a palindrome, and false otherwise. */

//--------------------------solution-------------------------//
var isPalindrome = function (x) {
  let temp = x;
  let rev = 0;
  let sum = 0;
  if (x < 0) return false;
  while (temp != 0) {
    sum = Math.floor(temp % 10); // get the last digit of the number
    rev = rev * 10 + sum; // multiply the reverse number by 10 and add the last digit to it
    temp = Math.floor(temp / 10); // remove the last digit from the number.
  }
  return rev == x;
};

let x = 121;
console.log(isPalindrome(x));

/*time complexity: O(log10(n)) where n is the input number. The while loop runs until temp becomes 0, 
and in each iteration, we divide temp by 10, which reduces the number of digits by 1. 
Therefore, the number of iterations is proportional to the number of digits in the input number, 
which is log10(n). */

//space complexity : O(1) because we are using a constant amount of space to store the variables temp, rev, and sum.
