// Дано число. Получите массив делителей этого числа.

function findDivisors(number) {
  let divisors = [];

  for (let i = 0; i <= number / 2; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  divisors.push(number);

  return divisors;
}

let num = 20;
let result = findDivisors(num);
console.log(result);
