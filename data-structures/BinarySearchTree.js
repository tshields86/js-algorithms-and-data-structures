const Queue = require('./Queue');

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let node = this.root;
    while (node) {
      if (value === node.value) return;
      else if (value < node.value) {
        if (!node.left){
            node.left = newNode;
            return this;
        }
        node = node.left;
      } else {
        if (!node.right){
            node.right = newNode;
            return this;
        } 
        node = node.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let node = this.root;
    let found = false;
    while (node && !found) {
      if (value < node.value) node = node.left;
      else if (value > node.value) node = node.right;
      else found = true;
    }
    return found && node;
  }

  contains(value) {
    if (!this.root) return false;

    let node = this.root;
    let found = false;
    while (node && !found) {
      if (value < node.value) node = node.left;
      else if (value > node.value) node = node.right;
      else found = true;
    }
    return found;
  }

  bfs() {
    const result = [];
    if (!this.root) return result;
    const queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const { value, left, right } = queue.dequeue();
      result.push(value);
      if (left) queue.enqueue(left);
      if (right) queue.enqueue(right);
    }

    return result;
  }

  dfsPreOrder(node = this.root, result = []) {
    if (!node) return result;
    const { value, left, right } = node;
    result.push(value);
    if (left) this.dfsPreOrder(left, result);
    if (right) this.dfsPreOrder(right, result);
    return result;
  }

  dfsPostOrder(node = this.root, result = []) {
    if (!node) return result;
    const { value, left, right } = node;
    if (left) this.dfsPostOrder(left, result);
    if (right) this.dfsPostOrder(right, result);
    result.push(value);
    return result;
  }

  dfsInOrder(node = this.root, result = []) {
    if (!node) return result;
    const { value, left, right } = node;
    if (left) this.dfsInOrder(left, result);
    result.push(value);
    if (right) this.dfsInOrder(right, result);
    return result;
  }
};

module.exports = BinarySearchTree;