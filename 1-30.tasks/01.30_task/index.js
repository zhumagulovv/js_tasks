// Дано некоторое число. Найти сумму цифр этого числа.

let num = 12345;

let sum = num
  .toString()
  .split("")
  .reduce((acc, digit) => acc + Number(digit), 0);

console.log(sum);
