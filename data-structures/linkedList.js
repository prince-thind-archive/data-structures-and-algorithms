class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(element) {
    const node = { data: element, pointer: null };

    // if head doesnt' exist
    if (this.head == null) {
      this.head = node;
    }

    //if tail doesn't exist
    if (this.tail == null) {
      this.tail = node;
      return;
    }

    //if tail exists update pointers;
    this.tail.pointer = node;
    this.tail = node;
  }

  [Symbol.iterator]() {
    // list is empty do nothing
    if (this.head == null) {
      return {
        next() {
          return { done: true };
        },
      };
    }

    //list contains items
    return {
      current: this.head,
      next() {
        if (this.current != null) {
          const obj = { done: false, value: this.current.data };
          this.current = this.current.pointer;
          return obj;
        } else {
          return { done: true };
        }
      },
    };
  }
}

const list = new LinkedList();
for (let i = 0; i < 25; i++) {
  list.append(i);
}

for(const i of list){
  console.log(i)
}
