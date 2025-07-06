// Дана некоторая строка со словами. Надо делать заглавным первый символ каждого второго слова в строке.

let str = "aaa bbb ccc eee fff";
let strArr = str.split(" ");

let result = [];

for (let i = 0; i < strArr.length; i++) {
  if (i % 2 === 1) {
    result.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));
  } else {
    result.push(strArr[i]);
  }
}

console.log(result.join(" "));
