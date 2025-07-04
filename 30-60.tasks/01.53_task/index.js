// Дана некоторая строка с буквами и цифрами. Получить позицию первой цифры в строке.

let str = "abcd1ad6";

let postion = -1;

for (let i = 0; i < str.length; i++) {
  if (!isNaN(str[i]) && str[i] !== " ") {
    postion = i;
    break;
  }
}

console.log(postion);
