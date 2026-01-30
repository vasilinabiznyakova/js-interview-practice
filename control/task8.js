// Problem: Maximum Sum of a Subarray of Size K
// Description

// Given an array of integers nums and an integer k, find the maximum sum of any contiguous subarray of size k.

// Function Signature
function maxSubarraySum(nums, k) {
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
      windowSum += nums[i];
      
      //when window size reaches K
      if (i >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= nums[i - (k - 1)]; // remove left element
      }
  }
  return maxSum;
}

const nums = [2, 1, 5, 1, 3, 2];
const k = 3;

const res = maxSubarraySum(nums, k);
console.log(res);
