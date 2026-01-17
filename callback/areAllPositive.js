// ✅ Problem — Check If All Numbers Are Positive

// You are given an asynchronous function loadNumbers(callback).

function loadNumbers(callback) {
  setTimeout(() => {
    callback(null, [2, 5, 8, 1, 4]);
  }, 100);
}

// The callback follows the Node.js convention:
// callback(error, result)

// Task

// Write a function areAllPositive(done) that:

// Calls loadNumbers

// Checks whether all numbers are greater than 0

// Returns true or false using done

// If an error occurs, return it immediately

// Function signature
function areAllPositive(done) {
  // your code here
  loadNumbers((err, res) => {
    if (err) return done(err);
    const isNeg = res.find((el) => el < 0);

    let result;
    isNeg ? (result = false) : (result = true);
    done(null, result);
  });
}

areAllPositive((err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});
// Expected result
// true

// Constraints

// Do not use Promises

// Do not use async / await

// Use callbacks only

// Ensure the callback is called exactly once

// Follow Node.js callback convention strictly
