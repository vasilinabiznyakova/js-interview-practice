/* 🔹 Задача 3 — First Pair With Given Sum (порядок важен)
📌 Условие

Дан массив чисел и target.
Нужно вернуть первую пару значений, сумма которых равна target.

⚠️ Важно:

порядок массива важен

возвращаем ту пару, у которой второй элемент появляется как можно раньше

если пары нет — вернуть null

Примеры
nums = [1, 2, 3, 4, 2]
target = 5
// результат: [2, 3]
// а НЕ [1, 4], потому что 3 появляется раньше 4

nums = [5, 1, 5]
target = 10
// результат: [5, 5]

nums = [1, 2, 3]
target = 10
// результат: null
 */

// time complexity linear O(n)
// space complexity linear O(n)

const nums = [1, 2, 3, 4, 2];
const target = 5;

function firstPairSum(nums, target) {
  // create hash map of seen nums, num: true
  const seen = {};
  // iterate through arr, find missing number
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const missing = target - current;
    // check if we already went through it
    // if yes - return if no add to hash, if nothing return null
    if (seen.hasOwnProperty(missing)) {
      return [missing, current];
    }
    seen[current] = true;
  }
  return null;
}

const result = firstPairSum(nums, target);
console.log(result);
