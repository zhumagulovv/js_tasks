// Дано некоторое число. Проверить, что цифры этого числа расположены по возрастанию.

let numbers = 192837465;
let numbersStr = numbers.toString().split("");

let numbersSort = Number(numbersStr.sort());

console.log(numbersStr.join(" "));
