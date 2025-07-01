// Дан массив с числами. Оставить в нем только положительные числа.

let arr = [-1, -2, 3, 4, 5, 6, -7, 8];
const result = arr.filter((item) => item > 0).sort((a, b) => a - b);

console.log(result); // [3,4,5,6,8]
