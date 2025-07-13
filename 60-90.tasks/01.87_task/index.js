// Дан массив. Найти сумму элементов этого массива.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sumArr = 0;
let buffer = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (buffer === i) {
      sumArr += arr[i][j];
    } else if (buffer < i) {
      buffer++;
      sumArr = arr[i][0];
    }
  }
  console.log(sumArr);
}
