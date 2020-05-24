/*
Return a list (array) of the sum of all nodes in the same branch
ordered from leftmost leaf to rightmost leaf

Solution O(n) time | O(n) space

Steps:
- use a current sum variable to bookkeep the sum of itself and previous sum
- previous sum of the root is 0
- push the sum of leaf node and previous sum so far into the final array
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const branchSums = (node, currentSum = 0, sums = []) => {
    if (!node) return;

    currentSum = node.value + currentSum;

    if (!node.left && !node.right) {
        sums.push(currentSum);
    }

    branchSums(node.left, currentSum, sums);
    branchSums(node.right, currentSum, sums);
    return sums;
}