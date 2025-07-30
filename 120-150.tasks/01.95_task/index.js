// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

let result = [];
let count = 1;

for (let i = 0; i < 3; i++) {
  let inner = [];
  for (let j = 1; j <= 3; j++) {
    inner.push(count);
    count++;
  }
  result.push(inner);
}

console.log(result);
