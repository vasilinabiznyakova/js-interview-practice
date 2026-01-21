// Задача 2 — Two Sum (вернуть значения, не индексы)
// 📌 Условие

// Дан массив чисел и target.
// Нужно вернуть два числа из массива, сумма которых равна target.
// Если решений несколько — вернуть любую пару.
// Если нет — вернуть null.

// Примеры
// nums = [3, 1, 4, 2]
// target = 6
// // результат: [4, 2] или [2, 4]

// nums = [5, 5, 1]
// target = 10
// // результат: [5, 5]

// nums = [1, 2, 3]
// target = 7
// // результат: null

// используем тот же принцип complement lookup
// We could use an array as a lookup table if the values were small and non-negative,
//but an object is safer and more flexible.

const nums = [3, 1, 4, 2];
const target = 7;

function twoSumValues(nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complimentary = target - current;

    if (seen.hasOwnProperty(complimentary)) {
      return [complimentary, current];
    }
    seen[current] = true;
  }

  return null;

  //create hashMap to write seen numbers
}

const res = twoSumValues(nums, target);
console.log(res);
const res2 = twoSumValues([5, 5, 1], 10);
console.log(res2);
