/*
brute force is considered a pattern,
but it is a baseline / naive pattern, not an optimized one.

  Brute force is an approach where we try all possible combinations
  to find the correct answer.

  This often leads to O(n²) time complexity, which is not suitable
  for large input sizes because the program becomes too slow.

  Example:

```js
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    // check every pair
  }
}
```

This approach is simple and often correct, but it can be inefficient.

---

## Why is quadratic time complexity bad for large `n`?

A brute force solution often has **quadratic time complexity — `O(n²)`**, which means the number of operations grows very fast as `n` increases.

For large input sizes:

* the program performs too many operations
* it becomes very slow
* it may not finish within the allowed time limit

Therefore, **`O(n²)` solutions are not suitable for problems with large `n`**, and we need more efficient algorithms such as `O(n)` or `O(n log n)`.

*/
