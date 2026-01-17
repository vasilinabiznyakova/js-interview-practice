// ✅ Problem — Get First Positive Number

// You are given an asynchronous function loadNumbers(callback).

// function loadNumbers(callback) {
//   setTimeout(() => {
//     callback(null, [-3, -1, 0, 4, 7, -2]);
//   }, 100);
// }

// The callback follows the Node.js convention:
// callback(error, result)

// Task

// Write a function getFirstPositive(done) that:

// Calls loadNumbers

// Finds the first positive number in the array (greater than 0)

// Returns the number using done

// If there is no positive number, return null

// If an error occurs, return it immediately

function loadNumbers(callback) {
  setTimeout(() => {
    callback(null, [-3, -1, 0, 4, 7, -2]);
  }, 100);
}

function getFirstPositive(done) {
  // your code here
  loadNumbers((err, res) => {
    if (err) return done(err);
    const firstPositive = res.find((el) => el > 0);
    done(null, firstPositive);
  });
}

getFirstPositive((err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});
