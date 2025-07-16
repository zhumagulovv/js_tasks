// Дан массив. Найти сумму элементов этого массива.

let array = [
  [
    [11, 12, 13],
    [14, 15, 16],
    [17, 17, 19],
  ],
  [
    [21, 22, 23],
    [24, 25, 26],
    [27, 27, 29],
  ],
  [
    [31, 32, 33],
    [34, 35, 36],
    [37, 37, 39],
  ],
];

let sumArr = 0;
let buffer = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    for (let k = 0; k < array[i][j].length; k++) {
      sumArr += array[i][j][k];
    }
  }
}
console.log(sumArr);

function sumArray(arr) {
  return arr.flat(Infinity).reduce((sum, cur) => sum + cur, 0);
}

console.log(sumArray(array));
