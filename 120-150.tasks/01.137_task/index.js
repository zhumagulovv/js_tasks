// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

function uniqA(arr) {
  let seen = {};
  return arr.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

let numbers = [1, 1, 2, 3, 4, 4, 5, 6, 6];

console.log(uniqA(numbers));
