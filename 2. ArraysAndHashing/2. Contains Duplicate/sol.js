/**
 * https://leetcode.com/problems/contains-duplicate/
 */


var containsDuplicate = function(nums) {
    let mp = {};

    for(let i = 0; i < nums.length; i++) {
        if(mp[nums[i]]) {
            return true; // Duplicate found, return true immediately
        } else {
            mp[nums[i]] = 1; // Mark the number as seen
        }
    }

    return false; // No duplicates found, return false
};
