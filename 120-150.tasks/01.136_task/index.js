// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.

function filterArrT(array) {
  let counts = {};
  let newArray = [];

  for (let item of array) {
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] <= 3) {
      newArray.push(item);
    }
  }

  return newArray;
}

let numbers = [1, 1, 1, 2, 3, 4, 5, 6, 7, 1, 4, 4, 5, 5, 4, 5];

console.log(filterArrT(numbers));
