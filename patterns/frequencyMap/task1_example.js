/* 1) Frequency Map / Counting (самая частая)
Задача (пример)

Дано: строка.
Найди символ, который встречается чаще всего, и верни его (и/или количество).

Пример

"abcaac" → 'a' (3)

Решение (JS) + паттерн

Паттерн: Frequency Map (хеш-таблица / объект / Map).
Идея: один проход, считаем частоты.

function mostFrequentChar(str) {
  const freq = new Map();

  for (const ch of str) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }

  let bestChar = null;
  let bestCount = 0;

  for (const [ch, count] of freq) {
    if (count > bestCount) {
      bestChar = ch;
      bestCount = count;
    }
  }

  return bestChar; // или { bestChar, bestCount }
}

console.log(mostFrequentChar("abcaac")); // "a"


Почему это правильно:

один проход для подсчёта + один проход по map

время O(n), память O(k) (k = кол-во уникальных символов) */

// if perfomance is an issue I would use Set

function uniqueArray(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}
