// ✅ Sliding Window — пример с решением
// Задача 1 (самая базовая)
// Maximum Sum Subarray of Size K

// Given an array of integers nums and an integer k,
// find the maximum sum of any contiguous subarray of size k.

// Example
// nums = [2, 1, 5, 1, 3, 2], k = 3
// → 9   (subarray [5, 1, 3])

// Решение (простое и чистое)
function maxSubarraySum(nums, k) {
  let windowSum = 0;
  let maxSum = -Infinity; // бесконечно малое число

  // считаем сумму первого окна
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  // двигаем окно
  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right]; // добавили справа
    windowSum -= nums[right - k]; // убрали слева
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Что тут важно понять (без формальностей)

// мы один раз считаем первое окно

// дальше не считаем всё заново

// каждый шаг:

// + новый элемент

// - старый элемент

// окно всегда размера k

// Визуально
// [2, 1, 5] → 8
// [1, 5, 1] → 7
// [5, 1, 3] → 9  ← max
// [1, 3, 2] → 6

// Задача 2 (ты решаешь)
// Average of Subarrays of Size K

// Given an array of integers nums and an integer k,
// return an array of the average of all contiguous subarrays of size k.

// Example
// nums = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 5
// → [2.2, 2.8, 2.4, 3.6, 2.8]

function getSubarraysAver(arr, k) {
  let windowSum = 0;
  const newArr = [];
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  const firstAverage = windowSum / k;
  newArr.push(firstAverage);

  for (let right = k; right < arr.length; right++) {
    windowSum += arr[right];
    windowSum -= arr[right - k];

    const average = windowSum / k;
    newArr.push(average);
  }

  return newArr;
}

const nums = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;
const result = getSubarraysAver(nums, k);
console.log(result);



/* Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Examples
"abcabcbb" → 3   ("abc")
"bbbbb"    → 1   ("b")
"pwwkew"   → 3   ("wke")

🧠 Почему это sliding window

substring → непрерывный

longest → ищем максимум

“without repeating” → нужно следить за состоянием окна

👉 Это sliding window + hash map. */