// https://leetcode.com/problems/running-sum-of-1d-array/

/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums. 

# [1,2,3,4]
# [1, 1+2, 1+2+3, 1+2+3+4]
# [1,3,6,10]

*/

const runningSum = function(arr) {
    let prev = 0
    let result = []
    for (let i = 0; i < arr.length; i++) {
      prev = arr[i] + prev
      result.push(prev)
    }
    return result
  }
  
// runningSum([1,2,3,4])