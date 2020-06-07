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
    const prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return this;
  }

  removeFirst() {
    if (this.isEmpty()) return null;
    const value = this.head.value;
    if (this.length === 1) this.head = this.tail = null;
    else this.head = this.head.next;
    this.length--;
    return value;
  }

  removeLast() {
    if (this.isEmpty()) return null;
    const value = this.tail.value;
    if (this.length === 1) this.head = this.tail = null;
    else {
      let cur = this.head;
      let prev = this.head;
      while (cur.next) {
        prev = cur;
        cur = cur.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }
    this.length--;
    return value;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    const prev = this.get(index - 1);
    const value = prev.next.value;
    prev.next = prev.next.next;
    this.length--;
    return value;
  }

  getFirst() {
    if (this.isEmpty()) return null;
    return this.head.value;
  }

  getLast() {
    if (this.isEmpty()) return null;
    return this.tail.value;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
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