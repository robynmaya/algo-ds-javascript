/* 
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/

const maximumWealth = function(arr) {
    let wealthiest
    let result = []
    const reducer = (acc, curr) => acc + curr
  
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].reduce(reducer))
      wealthiest = Math.max(...result)
    }
    return wealthiest
  }
  
//maximumWealth([[1,2,3],[3,2,1]])
//maximumWealth([[1,5],[7,3],[3,5]])