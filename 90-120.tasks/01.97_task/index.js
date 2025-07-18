// Дан массив с числами. Оставить в нем только те числа, которые содержат цифру ноль.

let array = [1, 5, 10, 14, 20, 25, 30];
let newArray = [];

let filterArray = array.filter((num) => num.toString().includes("0"));

for (let i = 0; i < array.length; i++) {
  let numStr = array[i].toString();
  if (numStr.includes("0")) {
    newArray.push(array[i]);
  }
}

console.log(array);
console.log(filterArray);
console.log(newArray);
