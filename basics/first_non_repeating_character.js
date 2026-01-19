/* Задача №4 — First non-repeating character
📌 Условие (как на интервью)

Дана строка.
Нужно вернуть первый символ, который встречается ровно один раз.
Если такого нет — вернуть null.

Примеры
"abac"  → "b"
"aabb"  → null
"swiss" → "w"

🧠 Идея / паттерн

Two-pass frequency pattern

1️⃣ Сначала считаем частоты
2️⃣ Потом идём по строке в исходном порядке и ищем первый символ с count === 1

👉 Важно: одного прохода недостаточно, потому что мы не знаем заранее, повторится символ или нет.

✅ Пример решения (ПРОСТО, interview-safe)
function firstUniqueChar(str) {
  const freq = {};

  // 1. Count occurrences
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freq[char] = (freq[char] || 0) + 1;
  }

  // 2. Find first unique
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

🗣️ Как объяснить на интервью (2 предложения)

First, I count how many times each character appears.
Then I iterate through the string again and return the first character with frequency one.

💯 Этого достаточно.

⏱️ Сложность

Время: O(n) (два прохода, но это всё равно линейно)

Память: O(n) */

// Дан массив чисел.
// Нужно вернуть первое число, которое встречается только один раз.
// Если такого нет — вернуть null.

// Примеры
// [1, 2, 2, 3, 1] → 3
// [4, 4, 4] → null
// [] → null

const arr = [1, 2, 2, 3, 1];

function returnNum(arr) {
  const freq = {};
  // this we create MAP
  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    if (freq[currentEl]) {
      ++freq[currentEl];
    } else {
      freq[currentEl] = 1;
    }
  }
  // here we go through arr again and check in freq obj if there were repeated el
  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    console.log();

    if (freq[currentEl] === 1) return currentEl;
  }
}

const result = returnNum(arr);
console.log(result);
