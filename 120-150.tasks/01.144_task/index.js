// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

function sumOfDivisors(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % n === 0) {
      sum += n;
    }
  }

  return sum;
}

console.log(sumOfDivisors(11));
