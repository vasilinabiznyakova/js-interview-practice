// 🔹 Типовая задача №7 — Max / Min
// 📌 Условие

// Дан массив чисел.
// Нужно вернуть максимальное и минимальное число.

// Примеры
// [3, 1, 5, 2] → max: 5, min: 1
// [-10, 0, 7] → max: 7, min: -10

// ✅ Вариант 1 — for (самый безопасный)
// function findMaxMin(arr) {
//   if (arr.length === 0) return null;

//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }

//   return { max, min };
// }

// 🗣️ Как объяснить

// I initialize max and min with the first element and iterate through the array updating them.

// ⏱️ Сложность

// Время: O(n)

// Память: O(1)

// 📌 Условие

// Дан массив чисел.
// Нужно вернуть максимальное и минимальное число.
// Если массив пустой — вернуть null.

// Примеры
// [3, 1, 5, 2] → { max: 5, min: 1 }
// [-10, 0, 7] → { max: 7, min: -10 }
// [] → null

// Правила

// ✅ обычный for

// ❌ без Math.max(...arr)

// просто и читаемо

const arr = [3, 1, 5, 2];
const arr1 = [-10, 0, 7];
const arr2 = [];

function findMinMax(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  }
  return { max, min };
}

const result = findMinMax(arr);

const result1 = findMinMax(arr1);
const result2 = findMinMax(arr2);

console.log(result);
console.log(result1);
console.log(result2);
