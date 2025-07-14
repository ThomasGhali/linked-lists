# Linked List Implementation in JavaScript

This project provides a basic implementation of a singly linked list in JavaScript using classes. It includes standard linked list operations and a private helper method to reduce repetition in traversal logic.

## Features

- `append(value)` — Adds a new node containing `value` to the end of the list.
- `prepend(value)` — Adds a new node containing `value` to the start of the list.
- `size` — Returns the number of nodes in the list.
- `headNode` — Returns the first node in the list.
- `tail` — Returns the last node in the list.
- `at(index)` — Returns the node at the specified index (0-based).
- `pop` — Removes and returns the last node from the list.
- `contains(value)` — Returns `true` if a node with the given value exists, otherwise `false`.
- `find(value)` — Returns the index of the node with the given value, or a message if not found.
- `toString` — Returns a string representation of the list in the format:  
  `( value ) -> ( value ) -> ... -> null`

## Structure

### `Node` Class

Represents an individual node in the list.

```js
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
```
LinkedList Class
Manages the linked list and its operations.

Private Method
#looper(callback) — A private helper for traversing the list. Accepts a callback function and executes it on each node. Allows early exit when needed by returning true from the callback.

Example Usage
```js
const list = new LinkedList();
list.append('A');
list.append('B');
list.prepend('Start');

console.log(list.toString); // ( Start ) -> ( A ) -> ( B ) -> null
console.log(list.size);     // 3
console.log(list.tail);     // Node { value: 'B', nextNode: null }
console.log(list.pop);      // Node { value: 'B', nextNode: null }
console.log(list.contains('A')); // true
console.log(list.find('A'));     // The node with value A is at node of index 1
```
Notes
The implementation uses getters (get) for properties like size, headNode, tail, pop, and toString for convenient access.

The #looper() method helps avoid redundant loop logic across multiple methods.

License
This project is open-source and can be used for educational or personal use.

---

Let me know if you want a version with runnable test examples or a `package.json` setup too.
