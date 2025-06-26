// Даны два целых числа. Проверить, делится ли первое число на второе без остатка.

function checkDivisibility(num1, num2) {
  if (num2 === 0) {
    return false;
  }

  const rest = num1 % num2;

  if (rest === 0) {
    return rest;
  } else {
    console.log("Делиться с остатком", rest);
  }
}

console.log(checkDivisibility(20, 0));
console.log(checkDivisibility(20, 10));
console.log(checkDivisibility(30, 11));
