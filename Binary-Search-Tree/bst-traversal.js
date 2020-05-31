/*
Traverse the BST in 3 different ways.
Solution O(n) time | O(n) space
*/

const inOrderTraverse = (tree, array) => {
    if (tree) {
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array);
    }
    return array;
}

const preOrderTraverse = (tree, array) => {
    if (tree) {
        array.push(tree.value);
        preOrderTraverse(tree.left, array);
        preOrderTraverse(tree.right, array);
    }
    return array;
}

const postOrderTraverse = (tree, array) => {
    if (tree) {
        postOrderTraverse(tree.left, array);
        postOrderTraverse(tree.right, array);
        array.push(tree.value);
    }
    return array;
}