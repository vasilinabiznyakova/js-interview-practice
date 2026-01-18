// Problem — Transform Numbers

// You are given an asynchronous function loadNumbers(callback).

function loadNumbers(callback) {
  setTimeout(() => {
    callback(null, [1, 2, 3, 4]);
  }, 100);
}

// The callback follows the Node.js convention:
// callback(error, result)

// Task

// Write a function doubleNumbers(done) that:

// Calls loadNumbers

// Creates a new array where each number is multiplied by 2

// Returns the new array using done

// If an error occurs, return it immediately

// Function signature
function doubleNumbers(done) {
  // your code here

  loadNumbers((err, res) => {
    if (err) return done(err);

    const multipliedArr = res.map((el) => el * 2);
    done(null, multipliedArr);
  });
}

doubleNumbers((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
// Expected result[2, 4, 6, 8]

// Constraints

// Do not use Promises

// Do not use async / await

// Use callbacks only

// Follow Node.js callback convention strictly

// Ensure the callback is called exactly once
