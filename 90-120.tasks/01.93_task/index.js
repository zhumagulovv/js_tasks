// Дан некоторый массив. Поменяйте местами пары элементов массива.

let arr = [1, 2, 3, 4, 5, 6];
const result = [];

while (arr.length > 0) {
  [a, b, ...arr] = arr;
  result.push(b, a);
}

console.log(result);
