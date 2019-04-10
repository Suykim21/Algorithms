function sameFrequency(num, numTwo) {
  let numArr = num.toString().split('');
  let numArrTwo = numTwo.toString().split('');
  if (numArr.length !== numArrTwo.length) return false;

  let obj = {}
  for (const val of numArr) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for (const val of numArrTwo) {
    if (!obj[val]) {
      return false;
    }
    obj[val] -= 1
  }

  return true;
}