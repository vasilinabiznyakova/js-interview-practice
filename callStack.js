// СИНХРОННЫЙ КОД (чистый call stack, LIFO)
function a() {
  console.log('a: start');
  b();
  console.log('a: end');
}

function b() {
  console.log('b: start');
  c();
  console.log('b: end');
}

function c() {
  console.log('c');
}

a();

// $ node callStack.js
// a: start
// b: start
// c
// b: end
// a: end

// Что происходит в call stack

// 1. a()  → push
// 2. b()  → push
// 3. c()  → push
// 4. c()  → pop
// 5. b()  → pop
// 6. a()  → pop

function a() {
  console.log('a: start');
  b();
  console.log('a: end');
}

function b() {
  console.log('b: start');
  c();
  console.log('b: end');
}

function c() {
  setTimeout(() => {
    console.log('c (async)');
  }, 0);
}

a();

// console.log('a: start');
// console.log('b: start');
// console.log('b: end');
// console.log('a: end');
// c (async)'
