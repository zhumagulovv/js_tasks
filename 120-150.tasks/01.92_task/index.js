// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

let str = "0123456789";
let str2 = "246";

function isEven(str) {
  for (let i = 0; i < str.length; i++) {
    let digit = Number(str[i]);

    if (isNaN(digit) % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isEven(str));
console.log(isEven(str2));

//
