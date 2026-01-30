// Description

// You are given a 1-indexed array of integers numbers that is sorted in non-decreasing order, and an integer target.
// Find two numbers such that they add up to target and return their indices (0-based).
// You may assume that exactly one solution exists, and you may not use the same element twice.

//since array sorted we will use two pointers
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

const numbers = [2, 7, 11, 15];
const target = 9; // Output: [1, 2]

const result = twoSum(numbers, target);

console.log(result);

