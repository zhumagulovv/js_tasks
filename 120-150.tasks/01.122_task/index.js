// Дан массив, ожидаемый результат [1, 2, 3, 4, 5, 6, 7, 8, 9]

let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let array = [1, 2, [3, 4], 5, [3, [4]]];

function drainArray(arr) {
  return arr.flat(Infinity);
}

console.log(drainArray(numbers));
console.log(drainArray(array));
