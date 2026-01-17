// Ок, следующая задача — **backend-ориентированная**, часто встречается (ETL/логирование/аналитика).

// ---

// ## ✅ Task: `groupByMulti(arr, keys)` (reduce + object accumulator)

// **Write a function `groupByMulti(arr, keys)` that:**

// * takes an array of objects
// * groups elements by **multiple keys**
// * returns an object where:

//   * the **composite key** is built as `key1=value1|key2=value2|...`
//   * each group contains:

//     * `count`
//     * `items`

// ### Requirements

// * use `Array.prototype.reduce`
// * accumulator must be an object
// * always return the accumulator from reducer
// * do not mutate the input array
// * handle missing keys safely: if value is `undefined`/`null`, use `"__missing__"`

// ### Example

// ```js
// const logs = [
//   { service: 'api', level: 'error', msg: 'Failed to fetch', userId: 1 },
//   { service: 'api', level: 'info', msg: 'Started', userId: 2 },
//   { service: 'worker', level: 'error', msg: 'Job failed', userId: 1 },
//   { service: 'api', level: 'error', msg: 'Timeout', userId: 3 },
//   { service: 'worker', level: 'info', msg: 'Job done', userId: 1 },
// ];

// groupByMulti(logs, ['service', 'level']);
// ```

// Expected shape:

// ```js
// {
//   "service=api|level=error": { count: 2, items: [/* 2 items */] },
//   "service=api|level=info": { count: 1, items: [/* 1 item */] },
//   "service=worker|level=error": { count: 1, items: [/* 1 item */] },
//   "service=worker|level=info": { count: 1, items: [/* 1 item */] },
// }
// ```

// ---
