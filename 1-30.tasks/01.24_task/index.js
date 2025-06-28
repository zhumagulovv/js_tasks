// Дан массив с числами. Найти сумму квадратных корней элементов массива.

function squareRoot(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.sqrt(numbers[i]);
  }

  return sum;
}

console.log(squareRoot([20, 30, 40]));
console.log(squareRoot([10, 5, 2]));
