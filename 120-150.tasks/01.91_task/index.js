// Дана строка. Проверьте, что эта строка состоит только из цифр.

// Регулярные выражения

let str = "a1b2c3I";

const isDigitsOnly = (str) =>
  str.split("").every((char) => char >= "0" && char <= "9");

console.log(isDigitsOnly(str));

String.prototype.isDigitsOnly = function () {
  return /^\d+$/.test(this);
};

let string = "123456";

console.log(string.isDigitsOnly());
