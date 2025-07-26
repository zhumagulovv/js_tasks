// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

let numbers = [1, 2, 3, 49, 50, 23, 43, 45, 63];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let strNum = numbers[i].toString();
  if (strNum.includes(3)) {
    newNumbers.push(numbers[i]);
  }
}

console.log(numbers);
console.log(newNumbers);
