// COUNT UNIQUE VALUES
/*
  Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
*/

// Initial solution - Time O(N) Space O(N)
function countUniqueValues(arr) {
  if (arr.length === 1) {
    return 1;
  }

  let i = 1;
  let j = 2;
  let uniqueNums = [arr[0]];

  while (i < arr.length - 1) {
    if (arr[i] === arr[j]) {
      j++;
    } else if (arr[i] !== arr[j]) {

      if (!uniqueNums.includes(arr[j])) {
        uniqueNums.push(arr[j]);
      }
      i++
    }
  }
  console.log(uniqueNums.length);
  return uniqueNums.length;
}


// Final solution - Time O(N) Space O(1)
function countUniqueValuesFinal(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  //console.log(arr.splice(0, i + 1))
  return i + 1
}
countUniqueValuesFinal([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);