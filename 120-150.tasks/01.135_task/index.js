// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

function filterArr(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

let numbers = [1, 1, 2, 3, 4, 5, 5, 6];
let fruits = ["banana", "banana", "apple", "cherry", "banana"];

console.log(filterArr(numbers));
console.log(filterArr(fruits));
