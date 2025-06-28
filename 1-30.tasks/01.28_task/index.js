// Дано некоторое число. Получить массив цифр этого числа.

let num = 123456;

// variant 1
let numStrArr = num.toString().split("");
console.log(numStrArr);

// variant 2
let arr = String(num).split("").map(Number);
console.log(arr);

// variant 3
let arrNum = Array.from(String(num), Number);
console.log(arrNum);
