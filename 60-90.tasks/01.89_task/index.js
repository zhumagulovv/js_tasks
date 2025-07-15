// Дано некоторое число. Проверить, что все цифры этого числа являются нечетными.

let num = 1357;
let numStr = num.toString();
let allOdd = true;

for (let i = 0; i < numStr.length; i++) {
  if (Number(numStr[i]) % 2 === 0) {
    allOdd = false;
    break;
  }
}

console.log(allOdd);
