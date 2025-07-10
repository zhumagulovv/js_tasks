// Дана некоторая строка. Заменить в ней первый символ каждого слова на '!'

let string = "abcde abcde abcde";
let stringArray = string.split(" ");
let resultArray = [];

for (let i = 0; i < stringArray.length; i++) {
  let word = stringArray[i];
  let newWord = "!" + word.slice(1);

  resultArray.push(newWord);
}

console.log(stringArray);
console.log(resultArray);
