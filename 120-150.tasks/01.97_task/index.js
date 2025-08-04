// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let devider = 2;
let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % devider === 0) {
    result.push(numbers[i]);
  }
}

console.log(result);
