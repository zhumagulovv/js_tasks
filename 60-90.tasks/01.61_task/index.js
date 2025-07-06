//  Дана некоторая строка с буквами и цифрами. Получить массив позиций всех цифр из строки.

let str = "1a2s3d4f5g6h";
let getNumbers = [];

for (let i = 0; i < str.length; i++) {
  if (!isNaN(str[i]) && str[i] !== " ") {
    getNumbers.push(Number(i));
  }
}

console.log(getNumbers);
