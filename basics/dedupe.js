// Дан массив чисел.
// Нужно вернуть новый массив без дубликатов, сохранив порядок.

// Пример
// [1, 2, 2, 3, 1] → [1, 2, 3]

// O(n²) — квадратичная сложность

const arr = [1, 2, 2, 3, 1];

function dedupe(arr) {
  const res = arr.reduce((accum, currentEl) => {
    if (!accum.includes(currentEl)) accum.push(currentEl);
    return accum;
  }, []);
    
  return res;
}

const res = dedupe(arr);

console.log(res);


// This solution uses a Set to track seen values.
// Set lookups are O(1), so the overall complexity is linear.
// O(n) — линейная сложность

function dedupe(arr) {
  const seen = new Set();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      result.push(arr[i]);
    }
  }

  return result;
}
