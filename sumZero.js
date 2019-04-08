// SUM ZERO
/*
  Write a function called sumZero which accepts a sorted array of integers. The function shoul find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

// My original soluton - O(N);
// Limitation - Only works if array has even indices...
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    const leftNum = Math.abs(arr[i]);
    const rightNum = Math.abs(arr[arr.length - 1 - i]);

    if (leftNum - rightNum === 0) {
      const arrPair = [leftNum, rightNum];
      return arrPair
    }
  }
}

// Colt's solution - O(N) Time - O(1) - Space
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Loop as long as right pointer is greater than left pointer
  while (left < right) {
    let sum = arr[left] + arr[right];

    // Increment left pointer if less than 0
    // Decrement right pointer if greater than 0
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

