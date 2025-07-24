// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

let str = "I write code with JavaScript";

let result = str.split(" ").map((word) => {
  if (word.length === 0) return "";
  let lastChar = word.at(-1).toUpperCase();
  return word.slice(0, -1) + lastChar;
}).join(" ");

console.log(str.split(" "));
console.log(result);
