// JavaScript uses an event loop to manage the execution order of synchronous code, microtasks, and macrotasks.
// 1. Sync code
// 2. process.nextTick queue
// 3. Microtasks (Promises)
// 4. Macrotasks (setTimeout, setImmediate)
// 5. Repeat


// timers → poll → check
// setImmediate may run before setTimeout(0), especially when scheduled inside an I/O callback.

console.log(1); // 1

setTimeout(() => {
  console.log('I am setTimeout 100');   //7
}, 100);

console.log(2); // 2

Promise.resolve().then(() => { // 4
  console.log('I am promise1');
});

process.nextTick(() => console.log("I am process.nextTick")); //3

Promise.resolve().then(() => {  // 5
  console.log('I am promise2');
});


setTimeout(() => {    // 6
  console.log('I am setTimeout 0');  
}, 0);