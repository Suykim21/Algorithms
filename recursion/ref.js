// Recursive example
// Recursion always have base case - when the recursion end

// example #1
function countDown(num) {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

// example #2
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// Factorial - iteratively
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

// Factorial - recursively
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Helper recursion method example
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) { // as long as arr contains value - keep going
      return;
    }

    if (helperInput[0] % 2 !== 0) { // push odd number
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1)) // cut off first index.
  }

  helper(arr);

  return result;
}

// Pure recursion without helper
function collectOddValuesTwo(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuesTwo(arr.slice(1)));
  return newArr;
}

// RECURSION TIPS
// Arrays - use slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// Strings - are immutable, - use slice, substr, substring to make copies of strings
// Objects - use Object.assign, spread operator to make copies