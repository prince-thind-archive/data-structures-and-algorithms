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
    const stack = [];

    //start with full tree inside stack;
    stack.push(this);

    do {
      //peek the top of stack;
      const top = stack[stack.length - 1];

      //if leftnode exists
      if (top.left) {
        const subTree = stack.pop();

        //if rightnode exists break right part and push it
        if (subTree.right) {
          stack.push(subTree.right);
        }
        // push broken left part and lone data node
        stack.push(new Node(subTree.data), subTree.left);
      }  
      else { //only data node exists
        const data = stack.pop();
        res.push(data);
      }
    } while (stack.length > 0);

    //return data from the array of nodes
    return res.map(e=>e.data);
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
