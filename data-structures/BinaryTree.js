class Node {
  //create a new node
  constructor(value) {
    this.left = null;
    this.right = null;
    this.data = value;
  }

  //inorder transversal
  getInorder() {
    const res = [];
    inorder(this);

    function inorder(root) {
      if (root) {
        inorder(root.left);
        res.push(root.data);
        inorder(root.right);
      }
    }
    return res;
  }
}

const tree = new Node(12);
tree.left = new Node(1);
tree.right = new Node(3);

tree.left.left = new Node(4);
tree.left.right = new Node(6);

tree.right.left = new Node(8);

tree.right.right = null;
// tree.right.right = new Node(9);

console.log(tree.getInorder());
