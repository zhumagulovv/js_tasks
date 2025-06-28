// Дан массив чисел. Найти сумму квадратов элементов массива.

const numbers = [1, 2, 3, 4, -3, 4, 5, -6, 7];
const newNum = [];

for (let i = 0; i < numbers.length; i++) {
  let res = numbers[i] * numbers[i];
  newNum.push(res);
}

console.log(newNum);
