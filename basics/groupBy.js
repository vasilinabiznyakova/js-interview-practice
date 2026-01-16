// Problem:
// Implement a function groupBy that groups array elements by a given key.
//
// Input:
// - arr: array of objects
// - key: string
//
// Output:
// - object grouped by key values
//
// Example:
// groupBy(
//   [
//     { id: 1, role: 'admin' },
//     { id: 2, role: 'user' },
//     { id: 3, role: 'admin' }
//   ],
//   'role'
// )
//
// Result:
// {
//   admin: [{ id: 1, role: 'admin' }, { id: 3, role: 'admin' }],
//   user: [{ id: 2, role: 'user' }]
// }

const arr = [
  { id: 1, role: 'admin', name: 'Vitaly' },
  { id: 2, role: 'user', name: 'Vasylyna' },
  { id: 3, role: 'admin', name: 'Olga' },
  { id: 4, role: 'superUser', name: 'Olga' },
];
const prop = 'name';

//WAY#1 - working but not best one
function groupBy(arr, key) {
  // your implementation
  // create new obj
  const groupedObj = {};
  // iterate objs through arr one by one - for of loop
  for (const el of arr) {
    //get keys arr
    const keysArr = Object.keys(groupedObj);

    //check if key in obj
    if (keysArr.includes(el[key])) {
      //add obj as a value to arr
      groupedObj[el[key]].push(el);
    } else {
      groupedObj[el[key]] = [el];
      //add new prop to + obj as a value to arr
    }
  }
  return groupedObj;
}

// const result = groupBy(arr, prop);
// console.log(result);

//WAY#2 (its better than way1  as originally we had unnecessary operation Object.keys for every itteration which is not good as we create new arr every time) and shorter as well
function groupBy2(arr, key) {
  // your implementation
  // create new obj
  const groupedObj = {};
  // iterate objs through arr one by one - for of loop
  for (const el of arr) {
    //get keys arr
    const groupKey = el[key];

    //check if key in obj
    if (!groupedObj[groupKey]) {
      //add obj as a value to arr
      groupedObj[groupKey] = [];
    }

    groupedObj[groupKey].push(el);
  }
  return groupedObj;
}

// const result2 = groupBy2(arr, prop);
// console.log(result2);

// WAY#3 same logic with reduce

function groupBy3(arr, key) {
  //1. assign initial value for accum = {}
  //2. itterate through every el chec if the corresponding property exist in aacum already
  //3.  no => create corresponding prop with val = arr, always add el to value arr;
  //4. do not forget return accum!
  return arr.reduce((accumulator, currentEl) => {
    const groupKey = currentEl[key];

    if (!accumulator[groupKey]) {
      accumulator[groupKey] = [];
    }
    accumulator[groupKey].push(currentEl);
    return accumulator;
  }, {});
}

const result3 = groupBy3(arr, prop);
console.log(result3);
