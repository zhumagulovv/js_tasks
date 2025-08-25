// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

function sumDivisors(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum;
}

let number = 20;
let result = sumDivisors(number);

console.log(`Сумма делителей числа ${number}: ${result}`);
