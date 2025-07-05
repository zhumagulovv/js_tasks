// Дана некоторая строка. Удалить из этой строки каждый третий символ.

let str = "abcdefg";

let newStr = "";

for (let i = 0; i < str.length; i++) {
  if ((i + 1) % 3 !== 0) {
    newStr += str[i];
  }
}

console.log(newStr);
