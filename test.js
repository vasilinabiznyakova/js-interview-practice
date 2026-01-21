/* Given an array of integers nums and an integer target;

return the indices i and j such that nums[i] + nums[j] == target and i != j.;

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
Return the answer with the smaller index first.
Example 1:
Input:
nums = [3,4,5,6], target = 7

Output: [0,1]

Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
Example 2:
Input: nums = [4,5,6], target = 10

Output: [0,2]

Example 3:
Input: nums = [5,5], target = 10

Output: [0,1]

Constraints:
2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
    - 10,000,000 <= target <= 10,000,000; */

function getIx(arr, target) {
  const result = [];
  const checked = {};

  for (let i = 0; i < arr.length; i++) {
    const elCheck = arr[i];

    const reminder = target - elCheck;
    if (checked.hasOwnProperty(reminder)) {
      result.push(checked[reminder], i);
    }
    checked[elCheck] = i;

    // for (let j = i + 1; j < arr.length; j++) {
    //   const elCompare = arr[j];
    //   if (elCheck + elCompare === target) {
    //     result.push(i, j);
    //   }
    // }
  }
  return result;
}

const nums = [3, 4, 5, 6];
const target = 7;

const nums2 = [4, 5, 6];
const target2 = 10;

const result = getIx(nums, target);
console.log(result);

const result2 = getIx(nums2, target2);
console.log(result2);
