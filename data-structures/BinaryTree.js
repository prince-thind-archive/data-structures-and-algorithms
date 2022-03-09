class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.data = value;
  }

  getInorder() {
    const res = [];
    const stack = [];

    stack.push(this);

    do {
      const top = stack[stack.length - 1];

      if (top.left) {
        const subTree = stack.pop();
        stack.push(subTree.right, new Node(subTree.data), subTree.left);
      } else {
        const data = stack.pop();
        res.push(data);
      }
    } while (stack.length > 0);

    return res;
  }
}

const tree = new Node(12);
tree.left = new Node(1);
tree.right = new Node(3);

tree.left.left = new Node(4);
tree.left.right = new Node(6);

tree.right.left = new Node(8);
tree.right.right = new Node(9);

console.log(tree.getInorder());
