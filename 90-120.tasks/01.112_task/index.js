// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

let numbers = [1, 2, 5, 6, 8, 9, 40, 50];
let str = numbers.join(numbers.length);
let arrRes = str.split("");

console.log(arrRes);

let result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i]);
  if (numbers[i] >= 0 && numbers[i] < 10) {
    result.push(numbers[i]);
  }
}

console.log(result);
