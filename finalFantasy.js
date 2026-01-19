// Финальная live-coding задача (вслепую)
// 📌 Условие

// Дан массив чисел.
// Нужно вернуть первое число, которое встречается больше одного раза.
// Если такого числа нет — вернуть null.

// Примеры
// [1, 2, 3, 2, 5] → 2
// [4, 5, 6, 7] → null
// [9, 9, 1, 2] → 9
// [] → null

// 🔑 Правила (как на интервью)

// ❌ без Set

// ❌ без Map

// ✅ обычный объект

// ✅ простой for или reduce

// порядок важен

const arr = [1, 2, 3, 2, 5];
const arr2 = [4, 5, 6, 7];
const arr3 = [9, 9, 1, 2];
const arr4 = [];

function firstDuplicate(arr) {
  if (!arr.length) return null;

  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    if (freq[currentEl]) {
      ++freq[currentEl];
    } else {
      freq[currentEl] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];

    if (freq[currentEl] > 1) return currentEl;
  }

  return null;
}
const result = firstDuplicate(arr);
const result1 = firstDuplicate(arr2);
const result2 = firstDuplicate(arr3);
const result3 = firstDuplicate(arr4);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
