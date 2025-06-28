// Дан массив с числами. Найти сумму тех элементов массива, которые больше нуля и меньше десяти.

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let newNum = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] < 10) {
    newNum.push(numbers[i]);
  }
}

console.log(newNum);
