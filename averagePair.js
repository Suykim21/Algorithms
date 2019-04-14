// AveragePair - Strategy Multiple Pointers
/*
  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

// Initial Solution - Constraint Time O(n) Space O(1)
function averagePair(arr, num) {

  if (arr.length < 2) return false;

  let i = 0;
  let average = 0;

  for (let j = 1; j < arr.length; j++) {
    average = average + arr[i] + arr[j];
    i++;
  }
  console.log(average);
  average = average / arr.length;
  console.log(average);
  if (average === num) {
    console.log(true)
  } else {
    console.log(false);
  }
  // console.log(false);
  // return false;

}
averagePair([-1, 0, 3, 4, 5, 6], 4.1)

// Colt's solution
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) { // To ensure pointers don't pass each other
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++; // increment start pos when less than num
    else end-- // decrement end pos when greater than num
  }

  return false;
}