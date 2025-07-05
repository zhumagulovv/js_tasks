// Дана некоторая строка. Получить массив позиций всех нулей в этой в строке.

let str = "023m0df0dfg0";
let arrPosition = [];
let postion = -1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "0") {
    arrPosition.push(i);
  }
}

console.log(arrPosition);
