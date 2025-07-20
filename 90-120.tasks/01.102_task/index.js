// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
let array = [1, 20, 2, 45, 200, 100, 123, 12, 4567];
let arrayFilter = array.filter((num) => num.toFixed().length <= 3);

console.log(arrayFilter);
