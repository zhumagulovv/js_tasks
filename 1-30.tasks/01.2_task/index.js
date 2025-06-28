// Дано строка. Вывод последний символ строка

let str = "Hello World!";
let lastChar = str[str.length - 1];
console.log(lastChar);

let strSecond = "Zkayp";
let lastCharSecond = strSecond.at(-1);
console.log(lastCharSecond);

let strThird = "Zhumagulov";
let lastCharThird = strThird.slice(-1);
console.log(lastCharThird);

// Пример получения последнего символа в цикле:

let strings = ["banana", "apple", "juice"];

for (let i = 0; i < strings.length; i++) {
  let lastChar = strings[i].slice(-1); // at(-1), slice(-1)
  console.log(`Последний символ строки "${strings[i]}" - ${lastChar}`);
}
