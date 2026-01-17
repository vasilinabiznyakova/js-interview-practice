// Coding (FizzBuzz)
// Problem
// Write a function fizzBuzz(n) that prints the numbers from 1 to n.

// For each number:

// Print "FizzBuzz" if the number is divisible by 3 and 5
// Print "Fizz" if the number is divisible by 3
// Print "Buzz" if the number is divisible by 5
// Otherwise, print the number
// Each value must be printed on a new line using console.log.

function fizzBuzz(n) {
  // use for loop
  for (let i = 1; i <= n; i++) {
    // check the most specific condition first
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
