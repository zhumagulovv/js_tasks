// Дано число. Получить первую четную цифру с конца числа.

let numbers = 12345678;
let numbersStr = numbers.toString();
let result = null;

for (let i = numbersStr.length - 1; i >= 0; i--) {
  let digit = Number(numbersStr[i]);
  if (digit % 2 === 0) {
    result = digit;
    break;
  }
}

console.log(numbersStr);
console.log(result);
