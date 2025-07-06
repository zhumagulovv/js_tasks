// Дан некоторый массив с числами. Слейт пары элементов вместе.

let arr = [1, 2, 3, 4, 5, 6];
let result = [];

for (let i = 0; i < arr.length; i += 2) {
  let merged = Number("" + arr[i] + arr[i + 1]);
  result.push(merged);
}

console.log(result);
