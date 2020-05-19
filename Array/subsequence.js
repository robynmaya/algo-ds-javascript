/*
Given two arrays of integers,
return true if the second array is a subsequence of the first one

Sample input:
array = [3,8,10,2, 9,7]
sequence = [8,2,7]

Solution 0(n) time | O(1) space:
- Create an index to get the value of the sequence
- Loop through array
- Compare current value of the looped array
with the current value of the sequence
- If true, increment the sequence index
- Break out of the loop only
if the sequence index is the same number as the array length
- Because the sequence index gets incremented only after the value comparison is done
*/

const isValidSubsequence = (array, sequence) => {
    let idxSequence = 0;
    for (let value of array) {
        if (idxSequence === sequence.length) break;
        if (sequence[idxSequence] === value) idxSequence++;
    }
    return idxSequence === sequence.length;
}