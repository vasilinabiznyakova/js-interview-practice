/* Условие

Дан массив чисел и target.
Нужно вернуть индексы двух чисел, сумма которых равна target.
Индексы должны быть разными.
Можно считать, что решение всегда существует.

Пример
nums = [2, 7, 11, 15]
target = 9
// результат: [0, 1] */

// hasOwnProperty(prop); - check if obj prop exists

// “Complement lookup using a hash map”

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  // I iterate through the array and store previously seen numbers with their indices.
  // For each element, I calculate the complement and check if it already exists.
  // Time: O(n); линейная
  // Space: O(n); линейная
  const hashMap = {};
  //Шаг 1 — идём слева направо перебираем массив по порядку, индекс за индексом.
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    //Шаг 2 — считаем “недостающее” число
    const requiredNum = target - currentNum;
    //Шаг 3 — проверяем память (seen), А не видели ли мы искомое число раньше?
    if (hashMap.hasOwnProperty(requiredNum)) {
      // Шаг 4 — если нашли, сразу возвращаем ответ + заканчиваем выполнение.
      return [i, hashMap[requiredNum]];
    }
    // Шаг 5 — если не нашли, запоминаем текущее число
    hashMap[currentNum] = i;
  }
  // Шаг 6 — если ничего не нашли, запоминаем текущее число
  return null;
}

const result = twoSum(nums, target);
console.log(result);
