class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return this; // returns node
    }

    // traversal
    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

function validate(node, min = null, max = null) {
  // when node data is greater than max (parent node data) - bst not valid
  if (max !== null && node.data > max) {
    return false;
  }

  // when node data is less than min (parent node data) - bst not valid
  if (min !== null && node.data < min) {
    return false;
  }

  // when left child node exist - call validate recursively
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  // when right child node exist - call validate recursively
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

// Finding element inside the array using bst
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}