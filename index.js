// Frequency Counter (Pattern)
/* 
  This patterns uses objects or sets to collect values/frequencies of values
  This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
*/

// **** My original Answer O(N) - 4 for loops
function same(arr, arrTwo) {
  const obj = {}

  if (arr.length === arrTwo.length) {
    arr = arr.sort((a, b) => a - b);
    arrTwo = arrTwo.sort((a, b) => a - b);

    arr.forEach((num, index) => {
      obj[index] = num * num;
    });

    for (let i = 0; i < arrTwo.length; i++) {
      if (obj[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;

  } else {
    return false;
  }
}

// Colt's Naive solution - O(N^2) - Worst Case
function sameTwo(arr, arrTwo) {
  // Checking length of the array;
  if (arr.length !== arrTwo.length) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    // Iterating first for loop and checking if squared num contains in ArrTwo
    let correctIndex = arrTwo.indexOf(arr[i] ** 2)
    // If it does not contain the number - it would return -1 which returns false
    if (correctIndex === -1) {
      return false;
    }
    // Removes found value from arrTwo
    arrTwo.splice(correctIndex, 1);
  }
  return true;
}

// Colt's Refactored version O(N) - Optimal - 3 for loops
function sameThree(arr, arrTwo) {
  if (arr.length !== arrTwo.length) {
    return false;
  }

  const frequencyCounterOne = {};
  const frequencyCounterTwo = {};

  for (const val of arr) {
    // If key doesn't exist start from one - if it does increment by 1
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }

  for (const val of arrTwo) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }

  // Iterating object
  for (const key in frequencyCounterOne) {

    // Verifying if key^2 exists in counterTwo obj
    if (!(key ** 2 in frequencyCounterTwo)) {
      return false;
    }

    // Verifying if value equals to each other
    if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
      return false;
    }
  }
  return true;
}

// ******* ANAGRAM Exercise 

// First Option - using built-in methods O(N)
function validAnagram(str, strTwo) {
  if (str.length !== strTwo.length) {
    return false;
  }

  str = str.split('').sort().join('');
  strTwo = strTwo.split('').sort().join('');

  if (str !== strTwo) {
    return false;
  }

  return true
}

// Second Option - without built-in methods O(N)
function validAnagramTwo(str, strTwo) {

  if (str.length !== strTwo.length) {
    return false;
  }

  const strObj = {};
  const strTwoObj = {};

  for (const val of str) {
    strObj[val] = (strObj[val] || 0) + 1;
  }

  for (const val of strTwo) {
    strTwoObj[val] = (strTwoObj[val] || 0) + 1;
  }

  for (const key in strObj) {
    // Verifying if key exists in strTwoObj - must have same keys
    if (!(key in strTwoObj)) {
      return false;
    }

    // Verifying if value equals to each other - Count must be equal
    if (strTwoObj[key] !== strObj[key]) {
      return false;
    }
  }

  return false;
}

// Colt's condensed answer 0 O(N)
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (const i = 0; i < first.lngth; i++) {
    const letter = first[i];
    // If letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (const i = 0; i < second.length; i++) {
    const letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) { // 0 - is falsey value
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}