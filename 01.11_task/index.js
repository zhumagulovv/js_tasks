// Дано строка. Если в строке более одного символа, выводить в консоль предпоследний символ строки.

function printPenultimateChar(str) {
  if (str.length > 1) {
    return str[str.length - 2];
  } else {
    return str[0];
  }
}

console.log(printPenultimateChar("Маша"));
console.log(printPenultimateChar("Том"));
