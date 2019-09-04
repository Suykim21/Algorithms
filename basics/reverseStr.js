// Built-in method way

// function reverseStr(str) {
//   return str.split('').reverse().join('');
// }

//reverseStr('hello');


// For loop

// function reverseStr(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// Reduce method
function reverseStr(str) {
  return str.split('').reduce((reversed, char) => char + reversed, "");
}
reverseStr('hello');