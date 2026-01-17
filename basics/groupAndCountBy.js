/**
 * Task:
 * Write a function groupAndCountBy(arr, key) that:
 * - takes an array of objects
 * - groups the elements by the given key
 * - for each group returns:
 *   - count: the number of elements in the group
 *   - items: an array of elements belonging to the group
 *
 * Requirements:
 * - use Array.prototype.reduce
 * - use an object as the accumulator
 * - always return the accumulator from the reducer
 * - do not mutate the input array
 *
 * Example:
 *
 * const products = [
 *   { category: 'books', name: 'JS Guide' },
 *   { category: 'books', name: 'TS Handbook' },
 *   { category: 'games', name: 'Chess' },
 *   { category: 'games', name: 'Monopoly' },
 *   { category: 'games', name: 'Poker' },
 * ];
 *
 * groupAndCountBy(products, 'category') should return:
 *
 * {
 *   books: {
 *     count: 2,
 *     items: [
 *       { category: 'books', name: 'JS Guide' },
 *       { category: 'books', name: 'TS Handbook' }
 *     ]
 *   },
 *   games: {
 *     count: 3,
 *     items: [
 *       { category: 'games', name: 'Chess' },
 *       { category: 'games', name: 'Monopoly' },
 *       { category: 'games', name: 'Poker' }
 *     ]
 *   }
 * }
 */

const products = [
  { category: 'books', name: 'JS Guide' },
  { category: 'books', name: 'TS Handbook' },
  { category: 'games', name: 'Chess' },
  { category: 'games', name: 'Monopoly' },
  { category: 'games', name: 'Poker' },
];

const category = 'category';

function groupAndCountBy(arr, key) {
  // I use reduce with an object accumulator.
  // For each element, I check whether a group already exists.
  // If the group doesn’t exist, I create it; if it does, I increment the counter and add the element to the group.
  // The input array is not mutated, and the accumulator is returned on every iteration.

  // We could use push for arr just bec we mutatate the object that was created inside accum, its safe and doesn't cause any side effects

  const result = arr.reduce((accum, currentEl) => {
    const categoryVal = currentEl[key];

    if (!accum[categoryVal]) {
      accum[categoryVal] = {
        count: 1,
        items: [currentEl],
      };
    } else {
      console.log(accum[categoryVal].count);

      accum[categoryVal].count++;
      accum[categoryVal].items = [...accum[categoryVal].items, currentEl];
    }
    return accum;
  }, {});
  return result;
}
const result = groupAndCountBy(products, category);

console.dir(result, { depth: null });
console.assert(result.books.count === 2);
console.assert(result.games.count === 3);
