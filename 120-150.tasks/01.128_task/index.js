// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

function sumOfDigits(num) {
  let numStr = String(num);

  const sum = numStr.split("").reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);

  return sum;
}

console.log(sumOfDigits(123456));
