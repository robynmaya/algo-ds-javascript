const nodeDepths = (tree, depth = 0) => {
    if (!tree) {
        return 0;
    }
    return depth + nodeDepths(tree.left, depth + 1) + nodeDepths(tree.right, depth + 1);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
