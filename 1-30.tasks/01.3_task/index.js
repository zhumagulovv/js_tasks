// Дано число. Проверьте, четное оно или нет.

let numFirst = 29;
let numSecond = 30;

console.log(numFirst % 2 === 0); // false - нечетный
console.log(numSecond % 2 === 0); // true - четный

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(3)); // false - нечетный
console.log(isEven(4)); // true - четный

for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
