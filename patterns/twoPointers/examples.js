/* Pattern #2: Two Pointers
Как узнать паттерн за 10 секунд

Two pointers почти всегда появляется, когда:

- есть массив или строка
- важен порядок
- мы сравниваем элементы с двух сторон
- или массив отсортирован

Ключевые слова в задаче:

sorted
palindrome
pair
two ends / from both sides

👉 Если данные отсортированы — почти наверняка two pointers. */

/* Типовая задача №1 (самая базовая)
Valid Palindrome

Given a string s, return true if it is a palindrome, false otherwise.
A palindrome reads the same forward and backward.

Examples:

"abba" → true
"racecar" → true
"hello" → false

Идея паттерна (как сказать на интервью)

“I’ll use two pointers: one starting from the beginning of the string and one from the end.
I’ll move them towards the center while comparing characters.”

🔥 Это ключевая фраза.

Скелет решения (без кода)

1️⃣ left = 0
2️⃣ right = s.length - 1
3️⃣ Пока left < right:

сравнить s[left] и s[right]
если не равны → false
иначе: left++, right--
4️⃣ Если дошли до середины → true

Почему это O(n)

один проход
без вложенных циклов
без доп. памяти

👉 Time O(n), Space O(1) — huge плюс. */

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

const string = 'hello';
const res = isPalindrome(string);
console.log(res);

/* 🔹 Two Pointers — Practice Task #2
Two Sum II (Sorted Array)

Given a sorted array of integers numbers and an integer target,
return the indices (1-based) of the two numbers such that they add up to target.

Rules:

The array is sorted in ascending order
Exactly one solution exists
You must use constant extra space O(1) space

Examples:

numbers = [2, 7, 11, 15], target = 9
→ [1, 2]

numbers = [1, 2, 3, 4, 6], target = 6
→ [2, 4]

🧠 How to recognize the pattern (say this)
- Array is sorted
- Need a pair

👉 Two pointers
🧭 Approach (mental model)

- left starts at the beginning
- right starts at the end

While left < right:

sum = numbers[left] + numbers[right]

if sum === target → return indices

if sum < target → left++

if sum > target → right-- */

const numbers = [2, 7, 11, 15];
const target = 9;

function getIndexes(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left, right];
    if (sum > target) {
      --right;
    } else {
      ++left;
    }
  }
  return [];
}

const res2 = getIndexes(numbers, target);
console.log(res2);

// 🔹 Two Pointers — Practice Task #3
// Remove Duplicates from Sorted Array

// Given a sorted array of integers nums,
// remove the duplicates in-place so that each element appears only once.

// Return the new length of the array after removing duplicates.

// Rules:
// You must modify the array in place
// Extra space should be O(1)
// The order of elements must be preserved

// Examples:

// nums = [1, 1, 2]
// → return 2, nums becomes [1, 2, _]

// nums = [0,0,1,1,1,2,2,3,3,4]
// → return 5, nums becomes [0,1,2,3,4, _, _, _, _, _]

// (underscores mean values beyond the new length don’t matter)

// 🧠 Как узнать, что это Two Pointers

// массив отсортирован
// нужно сохранить порядок
// работаем in place

// есть “медленный” и “быстрый” указатель
// 🧭 Подсказка (очень мягкая)
// один указатель (slow) — куда писать следующий уникальный элемент
// второй (fast) — читает массив

function uniqueArr(arr) {
  if (arr.length === 0) return 0;

  let ixToReplace = 1;
  let currentIx = 1;

  while (currentIx < arr.length) {
    const prevNum = arr[currentIx - 1];
    const curNum = arr[currentIx];
    if (prevNum !== curNum) {
      arr[ixToReplace] = curNum;
      ixToReplace++;
    }
    currentIx++;
  }
  return nums.slice(0, ixToReplace);
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const res3 = uniqueArr(nums);
console.log('res3', res3);

/* 🔹 Two Pointers — Practice Task #4
Reverse String (in-place)

Write a function that reverses a string in place.
You may assume the input is an array of characters.

Examples:

["h","e","l","l","o"] → ["o","l","l","e","h"]
["a"] → ["a"]
 */

function reverseString(string) {
  let leftIx = 0;
  let rightIx = string.length - 1;

  while (leftIx < rightIx) {
    const l = string[leftIx];
    const r = string[rightIx];
    string[rightIx] = l;
    string[leftIx] = r;
    ++leftIx;
    --rightIx;
  }
  return string;
}

const string2 = ['h', 'e', 'l', 'l', 'o'];
const res4 = reverseString(string2);
console.log('res4', res4);

// 🔹 Two Pointers — FINAL Task
// Move Zeroes

// Given an array of integers nums,
// move all 0s to the end of the array in place,
// while maintaining the relative order of the non-zero elements.

// Rules:

// You must do this in place

// Extra space must be O(1)

// Examples:

// [0,1,0,3,12] → [1,3,12,0,0]
// [0,0,1] → [1,0,0]
// [1,2,3] → [1,2,3]

function moveZero(arr) {
  let curIx = 0;
  let replaceIx = 0;
  while (curIx < arr.length) {
    if (arr[curIx] !== 0) {
      arr[replaceIx] = arr[curIx];
      ++replaceIx;
    }
    ++curIx;
  }
  console.log(curIx);
  console.log(replaceIx);

  while (replaceIx < arr.length) {
    arr[replaceIx] = 0;
    replaceIx++;
  }

  return arr;
}

const arr = [0, 1, 0, 3, 12];
const result = moveZero(arr);

console.log(result);

// 🔹 Two Pointers — Practice Task #5
// Squares of a Sorted Array

// Given a sorted array of integers nums (can include negative numbers),
// return a new array of the squares of each number, also sorted in non-decreasing order.

// Examples:

// [-4, -1, 0, 3, 10] → [0, 1, 9, 16, 100]
// [-7, -3, 2, 3, 11] → [4, 9, 9, 49, 121]


// not good one as square time complexity

const arr3 = [-4, -1, 0, 3, 10];

function squaresArr(arr) {
  let left = 0;
  let right = arr.length - 1;
  const newArr = [];

  while (left <= right) {
    if (left === right) {
      const pawRes = Math.pow(arr[left], 2);
      newArr.unshift(pawRes);
    } else {
      const leftPow = Math.pow(arr[left], 2);
      const rightPow = Math.pow(arr[right], 2);

      if (leftPow > rightPow) {
        newArr.unshift(rightPow, leftPow);
      } else {
        newArr.unshift(leftPow, rightPow);
      }
        
    }
    left++;
    right--;
  }

  return newArr;
}

const result2 = squaresArr(arr3);
console.log('result2', result2);



function squaresArr(arr) {
  let left = 0;
  let right = arr.length - 1;
  let pos = arr.length - 1;
  const result = new Array(arr.length);

  while (left <= right) {
    const leftPow = arr[left] * arr[left];
    const rightPow = arr[right] * arr[right];

    if (leftPow > rightPow) {
      result[pos] = leftPow;
      left++;
    } else {
      result[pos] = rightPow;
      right--;
    }

    pos--;
  }

  return result;
}
