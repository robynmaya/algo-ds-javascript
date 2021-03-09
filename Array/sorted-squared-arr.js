/*
https://leetcode.com/problems/squares-of-a-sorted-array/

Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

function sortSquareArr(array) {
    let smallPointer = 0;
    let largePointer = array.length - 1;
    let result = [...array];
    let updatePointer = largePointer;

    while (smallPointer <= largePointer) {
        let smallAbs = Math.abs(array[smallPointer]);
        let largeAbs = Math.abs(array[largePointer]);

        function updateResult(absValue) {
        result[updatePointer] = Math.pow(absValue, 2);
        if (absValue === smallAbs) {
            smallPointer++;
        } else {
            largePointer--;
        }
        updatePointer--;
        }

        if (smallAbs > largeAbs) {
        updateResult(smallAbs);
        } else {
        updateResult(largeAbs);
        }
    }
    return result;
}