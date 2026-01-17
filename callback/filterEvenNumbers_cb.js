// ✅ Problem — Filter Even Numbers (Callback)

// You are given an asynchronous function getNumbers(callback).

// function getNumbers(callback) {
//   setTimeout(() => {
//     callback(null, [1, 2, 3, 4, 5, 6]);
//   }, 100);
// }


// The callback follows the Node.js convention:
// callback(error, result)

// Task

// Write a function getEvenNumbers(done) that:

// Calls getNumbers

// Filters only even numbers

// Returns the result using done

// If an error occurs, return it immediately

function getNumbers(callback) {
  setTimeout(() => {
    callback(null, [1, 2, 3, 4, 5, 6]);
  }, 100);
}


function getEvenNumbers(done) {
  getNumbers((err, numbers) => {
    if (err) {
      return done(err);
    }

    const evenNumbers = numbers.filter((n) => n % 2 === 0);
    done(null, evenNumbers);
  });
}
