// Дано число. Вывести в консоль сумму первой и последней цифр этого числа.

function plusFirstAndLastNumber(number) {
  const stringNumber = String(Math.abs(number)); // Получить число в виде строки.
  const getFirstNumber = Number(stringNumber[0]); // Преобразуем строку в число и получим первую цифру.
  const getLastNumber = number % 10; // // Последняя цифра
  return parseInt(getFirstNumber + getLastNumber);
}

console.log(plusFirstAndLastNumber(444));
console.log(plusFirstAndLastNumber(345));

function sumFirstAndLastNumber(number) {
  const numStr = number.toString();
  const firstDigit = parseInt(numStr[0]);
  const lastDigit = parseInt(numStr[numStr.length - 1]);
  return firstDigit + lastDigit;
}

console.log(sumFirstAndLastNumber(987));
