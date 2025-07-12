// Дан массив. Удалить из массива все пустые строки.

let array = [1, "", 2, 3, "", 5];
let filteredArr = array.filter((num) => num !== "");

console.log(filteredArr);
