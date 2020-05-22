class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Average: O(log n) time | O(1) space
    // Worst: 0(n) time (if tree is one directional) | O(1) space 

    /*
    Steps to insert:
    - Use currentNode to traverse the tree
    - Loops has Keeps reassigning currentNode to 
    either its left/right child till the last node
    - Insert the instance of the class to replace the null value of the last node 
    */

    insert(value) {
        let currentNode = this;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }

    // Average: O(log n) time | O(1) space
    // Worst: 0(n) time (if tree is one directional) | O(1) space

    /* Steps to check if a node is in a tree: 
    - Create currentNode to trace the current value of the node we are at
    - The loop stops at the end of the tree (value is not found) OR
    when it finds a value that is not bigger/smaller than currentNode
    */

    contains(value) {
        let currentNode = this;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return true; // value is found!
            }
        }
        return false;
    }

    // Average: O(log n) time | O(1) space
    // Worst: 0(n) time (if tree is one directional) | O(1) space

    /* Steps to remove: 
    - Traverse the tree to move currentNode and parentNode
    - Copy the value of the smallest node in the right subtree to the currentNode
    - There are 4 possibilities:
    1. Remove a node that has children on left and right
    2. Remove the root node
    3. Remove a left node that has only 1/0 children
    4. Remove a right node that has only 1/0 children
    */

    remove(value, parentNode = null) {
        let currentNode = this;
        while (currentNode) {
            // traverse the tree until currentNode is the value to remove
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                // at this point, the currentNode has become the value to remove
                if (currentNode.left && currentNode.right) {
                    // Possibility 1: children on both sides exist
                    // copy the value of the smallest right subtree
                    currentNode.value = currentNode.right.getMinValue();
                    // loop, traverse, at last, it will run the Possibility #3 
                    currentNode.right.remove(currentNode.value, currentNode);
                } else if (!parentNode) {
                    // Possibility 2: removing the root node
                    // one of children or both don't exist
                    if (currentNode.left) {
                        // root node has a child on the left
                        currentNode.value = currentNode.left.value;
                        currentNode.right = currentNode.left.right;
                        currentNode.left = currentNode.left.left;
                    } else if (currentNode.right) {
                        // root node has a child on the right
                        currentNode.value = currentNode.right.value;
                        currentNode.left = currentNode.right.left;
                        currentNode.right = currentNode.right.right;
                    } else {
                        // This is a single-node tree; do nothing or return null
                    }
                } else if (currentNode === parentNode.left) {
                    // Possibility 3: node to remove is on the left side of its parent and has only 1/0 child
                    parentNode.left = currentNode.left ?? currentNode.right;
                } else if (currentNode === parentNode.right) {
                    // Possibility 4: node to remove is on the right side of its parent and has only 1/0 child
                    parentNode.right = currentNode.left ?? currentNode.right;
                }
                break;
            }
        }
        return this;
    }

    getMinValue() {
        let currentNode = this;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }
}

