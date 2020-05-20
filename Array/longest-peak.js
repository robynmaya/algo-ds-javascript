/*
Find every peak in an array and return the length of the longest one.
A peak is a number that is higher than its adjacent numbers.
The adjacent numbers on its left side have to be strictly increasing
and decreasing for the numbers on its right side.

Solution O(n) time | O(1) space

Steps:
- Create a variable to store the highest peak length
- Loop throguh the array
- Determine the peak using three indexes (left, middle, right)
- If there is a peak, do while loops:
left index will be decremented until it reaches to index 0
right index will be incremeneted until it reaches the end of the array
-  After both while loops are done, 
count the distance between left and right index and add 1 to get the length
*/

const longestPeak = array => {
    let peakLength = 0;
    for (let middle = 1; middle < array.length; middle++) {
        let leftIdx = middle - 1;
        let rightIdx = middle + 1;
        const isPeak = array[leftIdx] < array[middle] && array[middle] > array[rightIdx];
        if (isPeak) {
            while (leftIdx > 0 && array[leftIdx - 1] < array[leftIdx]){
                leftIdx--;
            }
            while (rightIdx < array.length - 1 && array[rightIdx] > array[rightIdx + 1]){
                rightIdx++;
            }
            const currentPeakLength = rightIdx - leftIdx + 1;
            if (peakLength < currentPeakLength) {
                peakLength = currentPeakLength;
            }
        }

    }
    return peakLength;
};