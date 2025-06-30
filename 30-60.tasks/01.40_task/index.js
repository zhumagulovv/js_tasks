// Даны два массива: Склеить эти массивы в новый массив

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(Array.from(new Set(arr1.concat(arr2))));

console.log([...new Set([...arr1, ...arr2])]);

const arr3 = arr1.concat(arr2);
console.log(arr3);
