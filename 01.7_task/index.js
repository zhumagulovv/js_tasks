// Дано число. Получить последнию цифру в числа

let num = 561;
console.log(num.toString().split("").pop());

// Последняя цифра - это остаток при делении на 10.
let lastDigit = 595 % 10;
console.log(lastDigit);

function getLastNumber(number) {
  return Math.abs(number) % 10;
}

console.log(getLastNumber(444));
console.log(getLastNumber(-444));
