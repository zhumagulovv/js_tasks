// Дан массив. Удалить из него каждый пятый элемент.

function removeEveryFifthElement(arr) {
  for (let i = 4; i < arr.length; i += 4) {
    arr.splice(i, 1);
  }
  return arr;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeEveryFifthElement(array));
