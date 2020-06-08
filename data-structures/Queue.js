class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isEmpty()) this.first = this.last = new Node(value);
    else this.last = this.last.next = new Node(value);
    return ++this.size;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const oldFirst = this.first;
    if (this.length === 1) this.first = this.last = null;
    else {
      this.first = this.first.next
      oldFirst.next = null;
    }
    this.size--;
    return oldFirst.value;
  }

  peek() {
    if (this.isEmpty()) return;
    return this.first.value;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
};

module.exports = Queue;