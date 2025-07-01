// Дан массив с числами. Подсчитать количество отрицательных чисел в этом массиве.

let arr = [1, 3, -2, -4, 5, -6, -7, 8];

const result = arr.filter((item) => item < 0);

console.log(result); // 4 [-2, -4, -6, -7]
console.log(result.length); // 4
