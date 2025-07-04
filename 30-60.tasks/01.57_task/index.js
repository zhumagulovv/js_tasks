// Дана некоторая строка со словами. Сделать заглавным первый символ каждого слова в этой строке. В нашем случае должно получить следующее: Aaa Bbb Ccc

const str = "aaa bbb ccc";
let result = str
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(result);
