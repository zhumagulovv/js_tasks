// Дано некоторое число. Надо сортировать цифры этого числа.

let num = 35142;
let numStr = num.toString().split("").sort().join("");

console.log(numStr);
