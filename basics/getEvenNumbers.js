// Дан массив чисел.
// Нужно вернуть только чётные числа.

// Примеры
// [1, 2, 3, 4, 5] → [2, 4]
// [7, 9] → []
// [] → []

// 🧠 Паттерн

// Filter

// Идея:

// идём по массиву

// проверяем условие

// если подходит → добавляем в результат

// ✅ Пример решения (самый простой)
// function getEvenNumbers(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// 🗣️ Как объяснить на интервью

// I iterate through the array and push only numbers that satisfy the condition.

// ⏱️ Сложность

// Время: O(n)
// Память: O(n)

/* Дан массив чисел.
Верни только числа больше 10.

Примеры
[5, 12, 8, 20, 1] → [12, 20]
[1, 2, 3] → [] */
const arr = [5, 12, 8, 20, 1];
function greaterThan10(arr) {
  const filteredArr = arr.filter((el) => el > 10);
  return filteredArr;

  //   const filteredArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 10) filteredArr.push(arr[i]);
  //   }
  //   return filteredArr;
}

const res = greaterThan10(arr);
console.log(res);
