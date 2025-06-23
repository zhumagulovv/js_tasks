// Дано число. Вывести количества цифр

let num = 123456;

console.log(num.toString().length);

function getDigitCount(number) {
  const numStr = Math.abs(number).toString();
  return numStr.length;
}

console.log(getDigitCount(9988889));
console.log(getDigitCount(9));
