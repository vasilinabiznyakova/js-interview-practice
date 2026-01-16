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
