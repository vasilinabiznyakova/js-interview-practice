/* Идём дальше — Типовая задача №6

Sum / Max / Min (очень частая и очень простая)

🔹 Задача №6 — Sum of numbers
📌 Условие

Дан массив чисел.
Нужно вернуть сумму всех чисел.

Примеры
[1, 2, 3] → 6
[] → 0
[-1, 5, 2] → 6


Можно:

for

reduce
 */

const arr = [1, 2, 3];

function calcSum(arr) {
  const sum = arr.reduce((accum, currentEl) => {
    accum += currentEl;
    return accum;
  }, 0);

  return sum;
}

const result = calcSum(arr);
console.log(result);

