// Заполнить массив случайными числами из промежутка от 1 до 100.

let randomNumbers = [];

for (let i = 1; i <= 100; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(randomNumbers);
