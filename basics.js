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

// Sentence Capitalization
function capitalize(str) {
  let cap = true,
    sentence = ""

  for (let i = 0; i <= str.length - 1; i++) {
    if (cap) {
      sentence.concat(str[i].toUpperCase());
      cap = false;
    } else {
      if (str[i] !== " ") sentence.concat(str[i])
      else {
        sentence.concat(str[i])
        cap = true;
      }
    }
  }

  console.log(sentence);
}

capitalize("")
