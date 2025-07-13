// Дана некоторая строка со словами. Удалить из этой строки каждое второе слово

let strings = "aaa bbb ccc eee fff";
let stringsArray = strings.split(" ");
let result = [];

for (let i = 0; i < stringsArray.length; i++) {
  if ((i + 1) % 2 !== 0) {
    result.push(stringsArray[i]);
  }
}

console.log(stringsArray);
console.log(result.join(" "));
