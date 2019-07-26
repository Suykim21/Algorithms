function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    // Capitalize first letter and add the rest to it
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  // join by empty space
  return words.join(' ');
} 