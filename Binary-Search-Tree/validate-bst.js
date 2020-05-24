/*
Validate BST by checking if 
left child < current node <= right child

Solution O(n) time | O(d) space
Steps:
1. Use two variables to keep track of the old min value and old max value
2. When traversing down to the left, the max value is replaced with the current node's value
3. When traversion down to the right, the min value is replaced with the current node's value
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree, minValue = -Infinity, maxValue = Infinity) {
    if (!tree) return true;
    let currentValue = tree.value;

    if (minValue > currentValue || maxValue <= currentValue) return false;

    // max value is changed by leftIsValid
    // min value is changed by rightIsValid

    const leftIsValid = validateBst(tree.left, minValue, currentValue);

    const rightIsValid = validateBst(tree.right, currentValue, maxValue);

    return leftIsValid && rightIsValid;
}

