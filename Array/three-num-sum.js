/*
Find all possible triplets in an array that sum up to the target number

Solution O(n^2) time | O(n) space

- Sort the array in ascending order
- Create an array to store all triplets
- Use three indexes (left, right and i - from the loop)
- Nested loops involved (for and while)
- Loop to get i value till array.length - 2 
because the last two values will be read by the left and right indexes
- In a While loop, create a current number to hold the sum value of all 3
- If current number is the target sum, push triplets into the array
- If current number is smaller, increment the left index
- If current number is bigger, decrement the right index
*/

const threeNumSum = (array, targetSum) => {
    array.sort((a,b) => a-b);
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++){
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right--;
            }
        }
    }
    return triplets;

    // if the triplets have to be unique, return below:
    let set = new Set(triplets.map(JSON.stringify));
    return Array.from(set).map(JSON.parse);
}