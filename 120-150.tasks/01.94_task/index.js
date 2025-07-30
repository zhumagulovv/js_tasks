// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

let result = [];

for (let i = 0; i <= 1000; i++) {
  let sum = i
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
  if (sum === 13) {
    result.push(i);
  }
}

console.log(result);
