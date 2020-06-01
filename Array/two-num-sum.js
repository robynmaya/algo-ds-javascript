/* 
Return one pair of integer from the array that sum up to the target number
Solution O(nlog(n)) time | O(1) space

Steps:
Sort the array in ascending order
Use two indexes (leftmost and rightmost) and sum the values
Loop stops when right and left indexes cross each other
If the sum is the target sum, returns the pair
If the sum is too small, increment the left index
if the sum is too big, decrement the right index
*/

const twoNumberSum = (array, targetSum) => {
    array.sort((a,b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) { // too small
            left++; // increase the left value
        } else if (currentSum > targetSum) { // too big
            right--; // decrease the right value
        }
    }
    return []; // loop breaks but no pair found
};