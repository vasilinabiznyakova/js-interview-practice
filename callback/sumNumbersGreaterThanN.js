// Problem — Sum Numbers Greater Than N
// You are given an asynchronous function fetchNumbers(callback).



// The callback follows the Node.js convention:
// callback(error, result)

// Task

// Write a function sumGreaterThan(limit, done) that:

// Calls fetchNumbers

// Filters numbers greater than limit

// Calculates their sum

// Returns the result using done

// If an error occurs, return it immediately

function fetchNumbers(callback) {
  setTimeout(() => {
    callback(null, [3, 7, 10, 2, 15, 1]);
  }, 100);
}

function sumGreaterThan(limit, done) {
    fetchNumbers((err, numbers) => {
      if (err) {
        return done(err);
      }

      const filteredNumbers = numbers.filter((el) => el > limit);
      done(null, filteredNumbers);
    });
}


sumGreaterThan(5, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
