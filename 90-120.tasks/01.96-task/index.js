// Дан массив с числами. Оставить в нем только те числа, которые делятся на 5.

let array = [5, 6, 10, 15, 20, 21, 25];
let newArray = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 5 === 0) {
    newArray.push(array[i]);
  }
}

console.log(array);
console.log(newArray);

let arrayFilter = array.filter((num) => num % 5 === 0);
console.log(arrayFilter);
