// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

let newArray = [];

for (let i = 10; i < 1000; i++) {
  let firstDigit = parseInt(i.toString()[0]);
  if (firstDigit % 2 === 0) {
    newArray.push(i);
  }
}

console.log(newArray);
