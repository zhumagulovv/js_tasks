// Дано некоторое число. Удалить из числа все нечетные цифры

let num = 123789;
let numArr = [...num.toString()];
let result = [];

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 === 0) {
    result.push(parseInt(numArr[i]));
  }
}

console.log(numArr);
console.log(result.join(""));
