/* 
Time Complexity = How the execution time of an algorithm grows as the input size n increases.
Space Complexity = How much extra memory an algorithm uses as n increases.

As of Time Complexity:
Quadratic and exponential complexities are not suitable for large inputs because they become too slow.

O(1) — Constant Time

The algorithm always takes the same amount of time.
arr[0]


O(log n) — Logarithmic Time
The input size is reduced by half each step.
Examples:
- Binary search
- Divide and conquer algorithms

while (n > 1) {
  n = n / 2;
}


O(n) — Linear Time = The algorithm processes each element once.
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
✔ Very common
✔ Efficient


O(n log n) — Linearithmic Time = Commonly appears in sorting algorithms.
Examples:
- Merge sort
- Quick sort (average case)

arr.sort();



O(n²) — Quadratic Time = Each element is compared with every other element.

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}

❌ Too slow for large n
❌ Typical brute force approach


🔴 O(2ⁿ) — Exponential Time = The number of operations doubles with each additional input.

Examples:
- Generating all subsets
- Recursive solutions without memoization

❌ Very inefficient

🔴 O(n!) — Factorial Time = All permutations of elements are generated.

Examples:
Traveling Salesman (brute force)
Permutation problems

❌ Practically unusable


How to recognize time complexity quickly? 
One loop → O(n)
Nested loops → O(n²)
Halving input → O(log n)
Recursive calls without caching → 🚨
*/



// Space Complexity	Название
// O(1)	Constant
// O(n)	Linear
// O(n²)	Quadratic
// O(log n)	Logarithmic