// 📌 Условие

// Дан массив чисел.
// Нужно вернуть массив уникальных чисел, сохранив порядок первого появления.

// Примеры
// [3, 1, 3, 2, 1, 4] → [3, 1, 2, 4]
// [7, 7, 7] → [7]
// [] → []

const arr = [3, 1, 3, 2, 1, 4];

function uniqueNumbers(arr) {
  const res = arr.reduce((accum, currentEl) => {
    if (!accum.includes(currentEl)) accum.push(currentEl);
    return accum;
  }, []);

  return res;
}

const res = uniqueNumbers(arr);
console.log(res);

function uniqueNumbersLinear(arr) {
  const checked = new Set();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!checked.has(arr[i])) {
      checked.add(arr[i]);
      result.push(arr[i]);
    }
  }
  return result;
}

const resLinear = uniqueNumbersLinear(arr);
console.log(resLinear);
