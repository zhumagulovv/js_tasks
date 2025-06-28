// Дано число. Получить первую цифру в числа

function getFirstNumber(number) {
  const numberString = String(Math.abs(number));
  return parseInt(numberString[0]); // дает мне как числа
}

console.log(getFirstNumber(99));
console.log(getFirstNumber(199.9));

function getFirstN(number) {
  const str = Math.abs(number).toString();

  return str[0]; // дает мне как строка
}

console.log(getFirstN(444));
console.log(getFirstN(-222));
