/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

// solution1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    n = nums.length
    let i = 0
    let j = n-1
    let k = n-1
    let arr = []
    
    while(i<=j){
        let leftSquare = nums[i]**2
        let rightSquare = nums[j]**2
        if(leftSquare > rightSquare){
            arr[k] = leftSquare
            i++
        }else{
            arr[k] = rightSquare
            j--
        }
        k--
    }
    return arr
};


// solution2
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    n = nums.length
    let arr = []
    for(let i=0; i<=n-1; i++){
        nums[i] = nums[i]**2
        arr.push(nums[i])
    }
    return arr.sort((a,b)=>a-b)
};

