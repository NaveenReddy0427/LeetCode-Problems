/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    n = nums.length
    i=0
    j=n-1
    while(i<j){
        if(nums[i] + nums[j] === target){
            return [i+1, j+1]
        }else if(nums[i] + nums[j] > target){
            j--
        }else{
            i++
        }
    }
};