// Заполнить массив четными числами из промежутка от 1 до 100.

let numbers = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    numbers.push(i);
  }
}

console.log(numbers);
