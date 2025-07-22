// Через запятую написаны числа. Получите максимальное из этих чисел.

function getMaxNumberFromString(str) {
  const numbersArray = str.replace(/\s/g, "").split(",");
  const numbers = numbersArray.map(Number);
  return Math.max(...numbers);
}

let str = "2,4,5,6,7,8,89";

console.log(getMaxNumberFromString(str));
