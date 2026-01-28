/* Если в условии есть слова:

- first / duplicate / unique
- check if exists
- find pair
- count frequency

👉 99% это Hash Map или Set */

/* 
First Duplicate Number

Given an array of integers, return the first number that appears more than once.
The order of the array matters.
If there are no duplicates, return null.;

Examples;
[2, 1, 3, 5, 3, 2] → 3
[1, 2, 3, 4] → null
[5, 5, 1, 2] → 5
 */

/* “Since I need to detect the first repeated element while preserving order, I need fast lookups.
A hash-based structure like a Set is a good fit here.” */

function firstDuplicate(nums) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (seen.hasOwnProperty(current)) {
      return current;
    }

    seen[current] = true;
  }

  return null;
}

// Time & space complexity

// “Time complexity is O(n).
// Space complexity is O(n), since the map may store all elements.”

// Edge cases (mention briefly)

// empty array → null

// single element → null

// no duplicates → null

// Two Sum

// Given an array of integers nums and an integer target,
// return the indices of the two numbers such that they add up to target.

// Rules:
// You may assume that exactly one solution exists.
// You cannot use the same element twice.

// Return the indices in any order.

// Example:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

const arr = [2, 7, 11, 15];
const target = 9;

function getIndexes(arr, target) {
  // “I iterate through the array once.
  // For each number, I calculate the complement needed to reach the target.
  // I store previously seen numbers and their indices in a hash map, which allows O(1) lookups.
  // Once I find the complement, I return the pair of indices.”

  // I will use a hash map to keep track of numbers we already checked and their indexes
  // as we assume that exactly one solution exists we would use early return
  // if nothing found we will return null
  //time complexity - linear
  //space complexity - linear
  // another approach would be to iterate through the array twice but its not the best way to proceed if we work with long array as the function would have quadratic time complexity

  const checked = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const required = target - current;

    if (checked.hasOwnProperty(required)) {
      return [checked[required], i];
    } else {
      checked[current] = i;
    }
  }
  return null;
}

const res = getIndexes(arr, target);
// console.log(res);

/* Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word formed by rearranging the letters of another word, using all the original letters exactly once.

Examples:

s = "anagram", t = "nagaram" → true
s = "rat", t = "car" → false

🔍 Constraints (like on interview)

Strings consist of lowercase English letters.

Order does not matter.

Frequency matters.

🧭 Hints (not solution, just guidance)

First check: length

Use a hash map (object) to count characters

One pass to count, one pass to decrement

🎯 What I want from you

When you answer, try to include:

How you recognize the pattern

Your approach (short, in English)

Code using a plain object

Time & space complexity */

// “Although there are two loops, they are sequential, not nested, so the overall time complexity is still linear.”
//“Time complexity is O(n), since we iterate through both strings once.
// Space complexity is O(k), where k is the number of unique characters.”
s = 'anagram';
t = 'nagaram';

function checkAnagram(s, t) {
  const count = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (count.hasOwnProperty(current)) {
      ++count[current];
    } else {
      count[current] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    const current = t[i];
    //“falsy check is sufficient because counts are positive integers.”
    if (!count[current]) {
      return false;
    } else {
      --count[current];
    }
  }
  return true;
}

const res2 = checkAnagram(s, t);
console.log(res2);

// First Unique Character in a String

// Given a string s, return the index of the first non-repeating character.
// If it does not exist, return -1.

// Examples:

// "leetcode" → 0
// "loveleetcode" → 2
// "aabb" → -1


// “Time complexity is O(n), space complexity is O(k), where k is the number of unique characters.”

const string = 'leetcode'; // "0"
function getUniqueCharIx(string) {
  const frequency = {};

  for (let i = 0; i < string.length; i++) {
    const current = string[i];
    if (frequency.hasOwnProperty(current)) {
      ++frequency[current];
    } else {
      frequency[current] = 1;
    }
  }
  for (let i = 0; i < string.length; i++) {
    const current = string[i];
    if (frequency[current] === 1) {
      return i;
    }
  }
  return -1;
}

const res3 = getUniqueCharIx(string);
console.log(res3);
