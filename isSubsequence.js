// MULTIPLE POINTERS - isSubsequence
/*
  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING.
 */

// Time O(n) - Space O(1)
function isSubsequence(str, strTwo) {
  let i = 0;
  let j = 0;
  if (!str) return true;
  while (j < strTwo.length) {
    if (str[j] === strTwo[i]) i++;
    if (i === strTwo.length) return true;
    j++;
  }
  return false;
}

isSubsequence("sti", "sting");



