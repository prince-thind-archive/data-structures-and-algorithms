class Stack {
  #arr;
  #capacity;
  constructor(capacity) {
    this.#arr = [];
    this.#capacity = capacity;
  }
  pop() {
    if (this.#arr.length == 0) return false;
    const element = this.#arr.pop();
    return element;
  }
  push(element) {
    if (this.#arr.length >= this.#capacity) return false;
    this.#arr.push(element);
    return true;
  }
  contains(element) {
    if (this.#arr.includes(element)) return true;
    return false;
  }
  getCapacity() {
    return this.#capacity;
  }
  getLength() {
    return this.#arr.length;
  }
}