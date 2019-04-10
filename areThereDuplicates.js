// Frequency Counter / Multiple Pointers - areThereDuplicates
/*
  Implment a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

  Ex: areThereDuplicates(1,2,3) - False
      areThereDuplicates(1,2,2) - True
      areThereDuplicates('a', 'b', 'c', 'd')
 */

// Initial Solution - Time O(n) Space O(n)
function areThereDuplicates() {
  const arr = [].sort.call(arguments, (a, b) => a - b);
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      return true;
    }
    i++;
  }
  return false;
}

// Two Pointers Solution (Frequency Counter) - O(n) Time O(n) Space
function areThereDuplicates() {
  let collection = {}
  for (const val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (const key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// Multiple Pointers - Time O(n) Space O(n)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++
    next++
  }
  return true;
}

// Linear Solution Best - Time O(n log n) Space O(1)
function areThereDuplicates2() {
  console.log(new Set(arguments))
  return new Set(arguments).size !== arguments.length;
}

areThereDuplicates2(1, 2, 3, 5, 5, 6, 7);