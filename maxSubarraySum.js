// MAX SUB-ARRAY SUM
/*
  Write a function called maxSubarraySum which accepts an array of intergers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

  Ex: mSubArrSum([1,2,4,2,8], 2) returns 10
*/

// Initial solution - Time O(n^2) Space 0(1)
function mSubArrSum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

// Optimization - Time O(n)
function mSubArrSum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  // Sum first n integers
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  // Deleting previous first index and adding new index
  // ex: [2,3,5,6,7], 2
  //      i     j   
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum); // Updates max sum - returns higher value
  }

  return maxSum;
}


function random(num, numTwo) {
  let numArr = num.toString().split('');
  let numArrTwo = numTwo.toString().split('');
  if (numArr.length !== numArrTwo.length) return false;

  let obj = {};
  for (const val of numArr) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for (const val of numArrTwo) {
    if (!obj[val]) {
      return false;
    }

    obj[val] -= 1;
  }

  console.log(true);
}

random(18214, 28114);