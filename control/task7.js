// 🧩 Problem: Longest Substring Without Repeating Characters
// Description

// Given a string s, find the length of the longest substring without repeating characters.


function lengthOfLongestSubstring(s) {
  const last = {}; // char -> last index
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // важно: проверяем на undefined, а не просто if (last[ch])
    if (last[ch] !== undefined && last[ch] >= left) {
      left = last[ch] + 1;
    }

    last[ch] = right;
    best = Math.max(best, right - left + 1);
  }

  return best;
}
