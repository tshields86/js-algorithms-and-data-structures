class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  insertFirst(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.head = new Node(value, this.head);
    this.length++;
    return this;
  }

  insertLast(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.insertFirst(value);
    if (index === this.length) return this.insertLast(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    this.length++;
    return this;
  }

  removeFirst() {
    if (this.isEmpty()) return;
    const oldHead = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next
      oldHead.next = null;
    };
    this.length--;
    return oldHead;
  }

  removeLast() {
    if (this.isEmpty()) return;
    const oldTail = this.tail;
    if (this.length === 1) this.head = this.tail = null;
    else {
      const beforeNode = this.get(this.length - 2);
      this.tail = beforeNode;
      this.tail.next = null;
    }
    this.length--;
    return oldTail;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    const beforeNode = this.get(index - 1);
    const node = beforeNode.next;
    beforeNode.next = node.next;
    node.next = null;
    this.length--;
    return node;
  }

  getFirst() {
    if (this.isEmpty()) return;
    return this.head;
  }

  getLast() {
    if (this.isEmpty()) return;
    return this.tail;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return null;
    node.value = value;
    return this;
  }

  has(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  clear() {
    this.head = this.tail = null;
    this.length = 0;
    return this;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  forEach(fxn) {
    if (this.isEmpty()) return;
    let node = this.head;
    while (node) {
      fxn(node.value);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }

  print() {
    this.forEach(console.log);
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
};

module.exports = SinglyLinkedList;