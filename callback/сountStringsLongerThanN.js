// Problem — Count Strings Longer Than N

// You are given an asynchronous function loadStrings(callback).

function loadStrings(callback) {
  setTimeout(() => {
    callback(null, ['apple', 'kiwi', 'banana', 'pear', 'orange']);
  }, 100);
}

// The callback follows the Node.js convention:
// callback(error, result)

// Task

// Write a function countLongerThan(length, done) that:
// Calls loadStrings
// Counts how many strings have length greater than length
// Returns the count using done
// If an error occurs, return it immediately

function countLongerThan(length, done) {
  // your code here

  loadStrings((err, words) => {
    if (err) {
      return done(err);
    }

    const countedStrings = words.reduce((accum, currentVal) => {
      if (currentVal.length > length) accum++;

      return accum;
    }, 0);

    done(null, countedStrings);
  });
}

countLongerThan(5, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
