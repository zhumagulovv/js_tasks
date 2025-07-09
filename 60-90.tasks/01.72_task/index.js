// Даны два массива. Надо склеить эти массивы в новый массив.

let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];

let arr = [...arr1.slice(0, 2), ...arr2, ...arr1.slice(2)];

console.log(arr);
