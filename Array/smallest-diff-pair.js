/*
Find a pair from two arrays which difference is closest to zero

Solution O(nlog(n)) + m(log(m)) } 0(1) space
Variables needed: idxOne, idxTwo, smallestDiff, currentDiff, pair array

Steps: 
- Sort both arrays
- While loop till either arrays exhausted using &&
- Find current difference by comparing value at idxOne and value at idxTwo
- Increment whichever index which value is the smallest, because the array
is sorted in ascending order, we want to increment to reduce the difference between two values
- If current diff is smaller than the previous diff, replace smallest with current difference

*/

const smallestDiff = (arrayOne, arrayTwo) => {
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);
    let current;
    let smallest = Infinity; // so that at first iteration, it's only bigger than the current diff
    let idxOne = 0;
    let idxTwo = 0;
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];
        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            idxOne++;
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum;
            idxTwo++;
        } else if (firstNum === secondNum) {
            return [firstNum, secondNum];
        }
        if (current < smallest) {
            smallest = current;
            pair = [firstNum, secondNum];
        }
    }
    return pair;
}