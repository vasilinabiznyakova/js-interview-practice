/* Последняя задача — First Duplicate Number
📌 Условие

Дан массив чисел.
Нужно вернуть первое число, которое встречается повторно.

⚠️ Важно:

порядок массива важен
вернуть первое повторяющееся значение
если повторов нет — вернуть null

Примеры
[2, 1, 3, 5, 3, 2] → 3
// потому что 3 — первое число, которое повторилось

[1, 2, 3, 4] → null

[5, 5, 1, 2] → 5 */

const nums = [2, 1, 3, 5, 3, 2];
const target = 3;

function firstDuplicate(nums) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (seen.hasOwnProperty(current)) {
      return current;
    }
    seen[current] = true;
  }
  return null;
}

const result = firstDuplicate(nums);
console.log(result);

const result2 = firstDuplicate([1, 2, 3, 4]);
console.log(result2);

const result3 = firstDuplicate([5, 5, 1, 2]);
console.log(result3);