// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

function doubleElements(arr) {
  return arr.map((el) => [el, el]).flat();
}

let array = ["banana", "mango", "cherry", "apricot", "apple"];

console.log(doubleElements(array));
