// Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.

function dividerCounter(n) {
  let count = 0;

  for (let i = 0; i <= n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }
  }

  return count;
}

console.log(dividerCounter(4)); // 4: (1, 2, 4)
console.log(dividerCounter(6)); // 6: (1, 2, 3, 6)
