// Даны числа, разделенные запятыми. Найти сумму этих чисел.

function sumNumbers(numArr) {
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }

  return sum;
}

let num = "12,34,56";
const numArray = num.split(",").map(Number);

console.log(numArray);
console.log(sumNumbers(numArray));
