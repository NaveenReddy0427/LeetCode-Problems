/**
 * https://leetcode.com/problems/3sum/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    let result = [];
    n = nums.length
    nums.sort((a, b) => a - b);  // Sort the array

    for (let i = 0; i < n - 2; i++) {
        // If the current value is the same as the one before, skip it
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                
                // Move j and k to the next distinct values
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return result;
};
