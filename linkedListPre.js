class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      
      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  get size() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      current = current.nextNode;
      count++;
    }

    return count;
  }

  get headNode() {
    if (this.head !== null) {
      return this.head;
    } else {
      return 'This linked list is empty';
    }
  }

  get tail() {
    if (this.head === null) return 'This linked list is empty';

      let current = this.head;

      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      return current;
  }

  at(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      if (current === null) return null;

      current = current.nextNode;
    }

    return current
  }

  get pop() {
    let removed = null;

    if (this.head === null) {
      return 'This linked list is empty'
    } else if (this.head.nextNode === null) {
      removed = this.head.value;
      this.head = null;
      return removed;
    }

    let current = this.head;
    let prev = null;

    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = null;
    return current;
  }

  contains(val) {
    if (this.head === null) return false;

    let current = this.head;

    while (current !== null) {
      if (current.value === val) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(val) {
    if (this.head === null) return "empty linked list";

    let count = 1;
    let current = this.head;

    while (current !== null) {
      if (current.value === val) return `The node with value ${val} is at node ${count}`
      current = current.nextNode;
      count++;
    }

    return "value not found";
  }

  get toString() {
    if (this.head === null) return "empty linked list";

    let current = this.head;
    let content = ""

    while (current !== null) {
      content += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    content += "null"

    return content;
  }
}

