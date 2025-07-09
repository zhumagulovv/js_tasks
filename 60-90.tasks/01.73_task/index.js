// Дано некоторое число. Найти сумму пар цифр числа.

let num = 123456;
let str = num.toString();
let sum = 0;

for (let i = 0; i < str.length; i += 2) {
  sum += Number("" + str[i] + str[i + 1]);
}

console.log(str);
console.log(sum);
