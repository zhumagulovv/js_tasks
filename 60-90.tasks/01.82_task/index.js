// Даны два массива. Удалить из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
let result = [];

if (arr1.length > arr2.length) {
  arr1.length = arr2.length;
} else if (arr2.length > arr1.length) {
  arr2.length = arr1.length;
}

console.log(arr1);
console.log(arr2);
