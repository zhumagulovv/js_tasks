// Даны два числа. Проверить, что первые цифры этих чисел совпадают.

function checkFirstNumbers(firstNumber, secondNumber) {
  const firstStrNumber = Math.abs(firstNumber).toString();
  const secondStrNumber = Math.abs(secondNumber).toString();

  return firstStrNumber[0] === secondStrNumber[0];
}

console.log(checkFirstNumbers(333, 345));
console.log(checkFirstNumbers(456, 345));

function compareFirstDigits(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length > 0 && str2.length > 0) {
    return str1[0] === str2[0];
  } else {
    return false;
  }
}

console.log(compareFirstDigits(234, 342));
console.log(compareFirstDigits(234, 243));
