class LinkedList {
  #arr;
  constructor() {
    this.#arr = [];
    this.head = null;
    this.tail = null;
  }
  append(element) {
    const node = { data:element, pointer: null };
    if (this.head == null) {
      this.head = node;
    }
    if (this.tail == null) {
      this.tail = node;
    } else {
      this.tail.pointer = node;
      this.tail = node;
    }
    this.#arr.push(node);
  }
}

const list = new LinkedList();
for (let i = 0; i < 25; i++) {
  list.append(i);
}
for (let i = list.head; i.pointer != null; i = i.pointer) {
  console.log(i.data);
}
console.log(list);
