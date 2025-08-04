// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

let a = 123456;
let b = 3456789;

let digitOne = a.toString().split("");
let digitTwo = b.toString().split("");

let common = digitOne.filter((d) => digitTwo.includes(d));

let result = [...new Set(common)].map(Number);

console.log(digitOne);
console.log(digitTwo);
console.log(common);
console.log(result);
