/*
Given an array of number and a number, move to the end 
all numbers in the array that are the same number in the second argument

Solution O(n) time | O(1) space

Steps:
- Create two indexes for leftmost and rightmost value of the array
- If value pointed at rightmost index is the target, shift the index to the left
- If value pointed at leftmost index is the target, swap the value with rightmost value
- Before while loop is over, the leftmost index shifts to the right
*/

const moveElementToTheEnd = (array, target) => {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        if (array[j] === target) j++;
        if (array[i] === target) swap(i, j, array);
        i++; // regardless what happened in if statements above, i will always shift to the right
    }
    return array;
};

const swap = (i, j, array) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
};