// Reverse string
function revString(str) {
  //return str.split('').reverse().join('');
  let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }

  return revString;
}

// Palindrome
function palindrome(str) {
  const revString = str.split('').reverse().join('');
  return revString === str;
}

// Reverse Int
function revInt(int) {
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int); // Inputs negative or positive sign
}
