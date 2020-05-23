/*
Find a value that is closest to the target 
in the Binary Search Tree

Solution 
Average: O(log(n)) time | O(1) space
Worst: O(n) time for one directional tree

Steps:
1. Set closest value initially to be infinity
In a while loop that stops when finding null or equal value:
2. Count the distance between current node and target
3. Count the distance between closest value and target
4. Closest value gets updated with current node if its distance is
smaller than previous closest value to the target
5. Keep traversing the tree until it gets to null value or finds target
*/

const findClosestValueInBst = (tree, target) => {
    let currentNode = tree;
    let closestValue = Infinity; // initial value
    while (currentNode) {
        let targetCurrentDistance = Math.abs(target - currentNode.value);
        let targetClosestDistance = Math.abs(target - closestValue);

        if (targetCurrentDistance < targetClosestDistance) {
            closestValue = currentNode.value;
        } else if (targetCurrentDistance === targetClosestDistance) {
            return currentNode.value;
        }
        // update currentNode by traversing the tree
        currentNode = target < currentNode.value
            ? currentNode.left // in this case it gets null at the end
            : currentNode.right;

    }
    return closestValue;
}

