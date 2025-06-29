// Дан массив с числами. Надо увеличить каждое число из массива на 10 процентов.

let numbers = [3, 5, 6, 78, 90, 20];
let percent = 10;

const increasedNumbers = numbers.map((num) => num + (num * percent) / 100);

console.log(increasedNumbers);
