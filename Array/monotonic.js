/*
Determine if the array is monotonic / values are entirely either:
- less than or equal to the element before
- bigger than or equal to the element before

Solution O(n) time | O(1) space

Steps:
- Create two bool variables set to true 
It's more efficient to assume that the array is monotonic, 
no need to bookkeep the previous comparison
- The goal of the for loop is to flip any of the bool variables to false
*/

const isMonotonic = (array) => {
    let isIncrement = true;
    let isDecrement = true;

    for (let i = 1; i < array.length; i++) {
        let firstNum = array[i-1];
        let secondNum = array[i];
        if (secondNum < firstNum) {
            isIncrement = false;
        } else if (secondNum > firstNum) {
            isDecrement = false;
        }
    }
    return isIncrement || isDecrement;
};