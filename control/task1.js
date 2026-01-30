// 🟦 Task 1 — Two Sum (Hash Map)

// Problem (as on interview):

// Given an array of integers nums and an integer target,
// return the indices (0-based) of the two numbers such that they add up to target.

// You may assume that exactly one solution exists,
// and you may not use the same element twice.

// Examples
// nums = [2, 7, 11, 15], target = 9
// → [0, 1]

// nums = [3, 2, 4], target = 6
// → [1, 2]

// Constraints

// Return indices, not the values

// Order of indices does not matter

// Use JavaScript

//time complexity  - linear
//space complexity  - linear
//pattern = hashmap to avoid quadratic time complexity
function twoSum(arr, target) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
      const complementary = target - current;


    if (map.hasOwnProperty(complementary)) {
      return [map[complementary], i];
    } else {
      map[current] = i;
    }
  }

  return null;
}

const arr = [2, 7, 11, 15];
const target = 9;
const res = twoSum(arr, target);
console.log(res);

