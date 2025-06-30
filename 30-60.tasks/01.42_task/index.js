// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

function findNumbers() {
  const result = [];

  for (let i = 1; i <= 1000; i++) {
    let numStr = i.toString();

    if (numStr.length >= 2) {
      const firstDigit = parseInt(numStr[0]);
      const secondDigit = parseInt(numStr[1]);

      if (firstDigit + secondDigit === 5) {
        result.push(i);
      }
    } else if (numStr.length === 1 && parseInt(numStr[0]) === 5) {
      result.push(i);
    }
  }
  return result;
}

console.log(findNumbers());
