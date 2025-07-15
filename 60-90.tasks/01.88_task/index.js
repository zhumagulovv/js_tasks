// Дан массив со словами. Удалить из него слова, состоящие более чем из трех символов.

let arr = ["banana", "juice", "cat", "cup", "dog", "apple"];
let result = arr.filter((word) => word.length > 3);

console.log(result);
