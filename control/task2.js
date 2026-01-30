// 🟦 Task 2 — Valid Anagram

// Problem:

// Given two strings s and t, return true if t is an anagram of s.

// Examples

// s = "anagram", t = "nagaram" → true
// s = "rat", t = "car" → false

//pattern frequency map
//despite we used for loop twice still remain linear complexity for time  and same for space
function isAnagram(s, t) {
  const frequencyMap = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (frequencyMap.hasOwnProperty(current)) {
      ++frequencyMap[current];
    } else {
      frequencyMap[current] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const current = t[i];
    if (frequencyMap.hasOwnProperty(current)) {
      if (!frequencyMap[current]) return false;
      --frequencyMap[current];
    } else {
      return false;
    }
  }
  return true;
}

const s = 'anagram';
const t = 'nagaram';

const result = isAnagram(s, t);
console.log(result);
