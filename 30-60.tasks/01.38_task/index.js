// Дано некоторое число. Выводить в консоль все его символы с конца.

let nums = 12345;
let numStr = String(nums);
let reversedStr = "";

for (let i = numStr.length - 1; i >= 0; i--) {
  reversedStr = numStr[i];
}

console.log(reversedStr);
