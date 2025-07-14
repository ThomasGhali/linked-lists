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

  #looper(callback) {
    let current = this.head;
    let index = 0;

    while(current !== null) {
      if (callback(current, index)) break;
      current = current.nextNode;
      index++;
    }
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
    let count = 0;

    this.#looper(() => {
      count++;
    })

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
    let lastNode = null;

    this.#looper((current) => {
      lastNode = current;
    });

    return lastNode;
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
    
    this.#looper((node) => {
      if (node.nextNode.nextNode === null) {
        removed = node.nextNode
        node.nextNode = null;
        return true;
      }

    });

    return removed;
  }

  contains(val) {
    if (this.head === null) return false;

    let found = false;

    this.#looper((current) => {
      if (current.value === val) {
        found = true;
        return true
      }
    })

    return found;
  }

  find(val) {
    let count = null;

    // while (current !== null) {
    //   if (current.value === val) return `The node with value ${val} is at node ${count}`
    //   current = current.nextNode;
    //   count++;
    // }
    this.#looper((node, index) => {
      if (node.value === val) {
        count = index;
        return true;
      }
    });

    if (count === null) return "value not found";

    return `The node with value ${val} is at node of index ${count}`;
  }

  get toString() {
    if (this.head === null) return "empty linked list";
    let content = ""

    this.#looper((node) => {
      content += `( ${node.value} ) -> `;
    });

    content += "null"

    return content;
  }
}