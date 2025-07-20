// Дано число, проверить, что все цифры числа больше нуля.

let num = 12345;
let numStrArr = num.toFixed().split("");

for (let i = 1; i < numStrArr.length; i++) {
  if (i > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(num);
console.log(numStrArr);
