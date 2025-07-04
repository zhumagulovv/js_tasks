// Дано число. Выводить в консоль количество четных цифр в этом числе.

let num = 123456;
let numStr = num.toString();

let count = 0;

for (let i = 0; i < numStr.length; i++) {
  if (+numStr[i] % 2 === 0) {
    count++;
  }
}

console.log(count);
