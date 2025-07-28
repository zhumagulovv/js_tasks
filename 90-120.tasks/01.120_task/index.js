// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

let result = [];

for (let i = 0; i < 5; i++) {
  let inner = [];
  for (let j = 1; j <= 3; j++) {
    inner.push(j);
  }
  result.push(inner);
}

console.log(result);
