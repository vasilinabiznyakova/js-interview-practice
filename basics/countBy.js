// Condition
// Write a function countBy(arr, key) that:
// - takes an array of objects
// - groups by key
// - counts the number of elements in each group

const users = [
  { role: 'admin', name: 'Alice' },
  { role: 'user', name: 'Bob' },
  { role: 'admin', name: 'Charlie' },
  { role: 'user', name: 'David' },
  { role: 'guest', name: 'Eve' },
];

const key = 'role';

function countBy(users, key) {
  return users.reduce((accum, currVal) => {
    const curValProp = currVal[key];

    if (!accum[curValProp]) {
      accum[curValProp] = 1;
    } else {
      accum[curValProp] += 1;
    }

    return accum;
  }, {});
}

const result = countBy(users, key);
console.log(result);

//expected res {
//   admin: 2,
//   user: 2,
//   guest: 1
// }
console.assert(result.admin === 2);
console.assert(result.user === 2);
console.assert(result.guest === 1);
