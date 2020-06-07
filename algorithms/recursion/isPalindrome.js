/* 
Write a function called isPalindrome which returns
true if the string passed to it is a palindrome,
otherwise if returns false.
*/

const isPalindrome = str => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
};