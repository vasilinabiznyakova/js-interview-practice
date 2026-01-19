// 🔹 Задача 3.1

// Дан массив чисел.
// Нужно вернуть объект с количеством каждого числа.

// Пример
// [1, 2, 2, 3] → { 1: 1, 2: 2, 3: 1 }
// [5, 5, 5] → { 5: 3 }
// [] → {}

// Временная сложность -  линейная
// Пространственная сложность - линейная

const arr = [1, 2, 2, 3];

function countAccurences(arr) {
  const res = arr.reduce((accum, currentEL) => {
    if (accum[currentEL]) {
      ++accum[currentEL];
    } else {
      accum[currentEL] = 1;
    }
    return accum;
  }, {});

  return res;
}

const res = countAccurences(arr);
console.log(res);
