// 🟦 Task 5 — Valid Palindrome

// Problem (interview-style):

// Given a string s, return true if it is a palindrome,
// considering only alphanumeric characters and ignoring cases.

// Examples
// "A man, a plan, a canal: Panama" → true
// "race a car" → false
// " " → true

// left с начала, right с конца
// пропускаем не-буквы/цифры
// сравниваем в lowercase

//two pointers
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (!/[a-z0-9]/i.test(leftChar)) {
      left++;
      continue;
    }

    if (!/[a-z0-9]/i.test(rightChar)) {
      right--;
      continue;
    }

    if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const s = 'A man, a plan, a canal: Panama';
const res = isPalindrome(s);
console.log(res);
