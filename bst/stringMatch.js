// Find portion of the string from the long string ex: "lol" = "lourie loled"

function findMatch(longStr, shortStr) {
  let match = 0;

  for (let i = 0; i <= longStr.length - 1; i++) {
    for (let j = 0; j <= shortStr.length - 1; j++) {
      if (shortStr[j] !== longStr[i + j]) break;
      if (j === shortStr.length - 1) match++;
    }
  }
  return match;
} 