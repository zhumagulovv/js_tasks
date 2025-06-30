// Дан массив. Удалите из него элементы с заданным значением.

let arr = [1, 2, 3, 4, 5, 6];

const numberToDelete = 4;

const filteredNumbers = arr.filter((num) => num !== numberToDelete);

delete arr[4];

console.log(filteredNumbers);
console.log(arr);
