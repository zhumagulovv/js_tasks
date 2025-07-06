// Дана некоторая строка с числом. Отделить тройки цифр пробелами, начиная с конца числа.

function format(str) {
  const s = str.length;
  const chars = str.split("");
  const strWithSpaces = chars.reduceRight((acc, cur, i) => {
    const spaceOrNothing = (s - i) % 3 === 0 ? " " : "";
    return spaceOrNothing + cur + acc;
  }, "");

  return strWithSpaces[0] === " " ? strWithSpaces.slice(1) : strWithSpaces;
}

let numStr = "1234567";

console.log(format(numStr));
