/* 🟦 Task 4 — Contains Duplicate

Problem:

Given an integer array nums, return true if any value appears at least twice, otherwise return false.

Examples

[1,2,3,1] → true
[1,2,3,4] → false


👉 Напиши: */
// frequency map + second pass
// time complexity - linear
function containsDuplicate(nums) {
  const frequencyMap = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (frequencyMap.hasOwnProperty(current)) {
      ++frequencyMap[current];
    } else {
      frequencyMap[current] = 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (frequencyMap[current] > 1) return true;
  }
  return false;
}

const nums = [1, 2, 3, 4];
const res = containsDuplicate(nums);
console.log(res);

function containsDuplicate2(nums) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (seen.hasOwnProperty(current)) {
      return true;
    } else {
      seen[current] = true;
    }
  }
  return false;
}

const nums2 = [1, 2, 3, 4];
const res2 = containsDuplicate(nums);
console.log(res2);
