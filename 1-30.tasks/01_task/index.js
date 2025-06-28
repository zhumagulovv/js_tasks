// Дано число. Проверка отрицательное или нет

let numFirst = 999;
let numSecond = "999";

console.log(typeof numFirst);
console.log(typeof numFirst === "number");
console.log(typeof numFirst === "string");
console.log("------");
console.log(typeof numSecond);
console.log(typeof numSecond === "number");
console.log(typeof numSecond === "string");

console.log("-------");

function isNegativeWithSign(num) {
  return Math.sign(num) === -1;
}

console.log(isNegativeWithSign(-4));
console.log(isNegativeWithSign(4));

console.log("-------");

function isNegativeNumber(num) {
  return Number.isNaN(num) ? false : num < 0;
}

console.log(isNegativeNumber(-5));
console.log(isNegativeNumber(5));
