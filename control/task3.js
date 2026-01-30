// 🟦 Task 3 — First Unique Character in a String

// Problem:

// Given a string s, return the index of the first non-repeating character.
// If it does not exist, return -1.

// Examples

// "leetcode" → 0
// "loveleetcode" → 2
// "aabb" → -1

//frequency map + second pass
//despite we used for loop twice still remain linear complexity for time  and same for space
function firstUniqChar(s) {
  const frequencyMap = {};

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (frequencyMap.hasOwnProperty(current)) {
      ++frequencyMap[current];
    } else {
      frequencyMap[current] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (frequencyMap[current] === 1) {
      return i;
    }
  }
  return -1;
}

const s = 'aabb';
const result = firstUniqChar(s);
console.log(result);
