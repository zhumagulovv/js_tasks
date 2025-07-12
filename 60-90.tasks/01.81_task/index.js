// Дан массив. Сортировать элементы в каждом подмассиве.

let array = [
  [2, 1, 4, 3, 5],
  [3, 5, 2, 4, 1],
  [4, 3, 1, 5, 2],
];

for (let i = 0; i < array.length; i++) {
  array[i].sort((a, b) => a - b);
}

console.log(array);
