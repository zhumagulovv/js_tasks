// Дан массив с числами. Найти сумму положительных элементов массива.

let numbers = [1, -2, 3, -4, -5, 6, 7];
let newNum = [];

for (let i = 0; numbers.length; i++) {
  if (numbers[i] > 0) {
    newNum.push(numbers[i]);
  }
}

console.log(newNum);
