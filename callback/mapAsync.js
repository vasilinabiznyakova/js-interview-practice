// Live Coding Task (Node.js, callbacks → Promises)
// Task

// Implement function mapAsync(items, asyncFn, callback):

// items: array of values

// asyncFn(item, cb): async function that uses error-first callback: cb(err, result)

// callback(err, results): final callback
// Requirements

// 1.Run asyncFn in parallel for all items
// 2.Keep the same order as items in the final results
// 3.If any call fails — call callback(err) immediately
// 4.Ensure callback is called exactly once
// 5.Do not mutate items

function mapAsync(items, asyncFn, callback) {
  // 1.Run asyncFn in parallel for all items (no wait for result)
  const results = new Array(items.length);
  let completed = 0;
  let done = false;

  if (items.length === 0) return callback(null, []);

  items.forEach((item, i) => {
    asyncFn(item, (err, res) => {
      if (done) return;

      // TODO: handle error
      if (err) {
        done = true;
        callback(err);
      }
      results[i] = res;
      completed += 1;

      if (completed === items.length) {
        done = true;
        return callback(null, results);
      }
      // TODO: when all completed -> callback(null, results)
    });
  });
}

// Example asyncFn
function doubleLater(n, cb) {
  setTimeout(() => {
    if (typeof n !== 'number') return cb(new Error('Not a number'));
    cb(null, n * 2);
  }, Math.random() * 30);
}

mapAsync([1, 2, 3], doubleLater, (err, res) => {
  if (err) console.error('ERR:', err.message);
  else console.log(res); // [2, 4, 6]
});

mapAsync([1, 'x', 3], doubleLater, (err, res) => {
  if (err)
    console.error('ERR:', err.message); // Not a number
  else console.log(res);
});
