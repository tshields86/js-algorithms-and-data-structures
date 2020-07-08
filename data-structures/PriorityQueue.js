class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
};

class PriorityQueue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  enqueue(value, priority) {
    this.items[this.size] = new Node(value, priority);
    this.size++;
    this.heapifyUp();
  }

  dequeue() {
    if (this.isEmpty()) return;
    this.swap(0, this.size - 1);
    const item = this.items.pop();
    this.size--;
    this.heapifyDown();
    return item.value;
  }

  heapifyUp() {
    let idx = this.size - 1;
    while (this.hasParent(idx) && this.parent(idx).priority > this.items[idx].priority) {
      let parentIdx = this.parentIdx(idx);
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }

  heapifyDown() {
    let idx = 0;
    while (this.hasLeft(idx)) {
      let smallerChildIdx = this.leftIdx(idx);
      if (this.hasRight(idx) && this.right(idx).priority < this.left(idx).priority) {
        smallerChildIdx = this.rightIdx(idx);
      }

      if (this.items[idx].priority < this.items[smallerChildIdx].priority) break;

      this.swap(idx, smallerChildIdx);
      idx = smallerChildIdx;
    }
  }

  peek() {
    if (this.isEmpty()) return;
    return this.items[0].value;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  leftIdx(parentIdx) { return 2 * parentIdx + 1; }
  rightIdx(parentIdx) { return 2 * parentIdx + 2; }
  parentIdx(childIdx) { return Math.floor((childIdx - 1) / 2); }

  hasLeft(idx) { return this.leftIdx(idx) < this.size; }
  hasRight(idx) { return this.rightIdx(idx) < this.size; }
  hasParent(idx) { return this.parentIdx(idx) >= 0; }

  left(idx) { return this.items[this.leftIdx(idx)]; }
  right(idx) { return this.items[this.rightIdx(idx)]; }
  parent(idx) { return this.items[this.parentIdx(idx)]; }
};

module.exports = PriorityQueue;