// Find max character of the string ex: hello => l
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}