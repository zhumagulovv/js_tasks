// Дан некоторый массив, Поделить сумму первой половины элементов этого массива на сумму второй половины элементов.

let arr = [1, 2, 3, 4, 5, 6];

const mid = Math.floor(arr.length / 2);

console.log(mid);

const firstHalf = arr.slice(0, mid);
const secondHalf = arr.slice(mid);

const sumFirstHalf = firstHalf.reduce((acc, cur) => acc + cur, 0);
const sumSecondHalf = secondHalf.reduce((acc, cur) => acc + cur, 0);

const result = sumFirstHalf / sumSecondHalf;

console.log(result);
