/**
 * https://leetcode.com/problems/reverse-string/description/
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    n = s.length
    i = 0
    j = n-1
 
    while(i<=j){
     temp = s[i]
     s[i] = s[j]
     s[j] = temp
     i++
     j--
    } 
 };