// Дан массив со числами. Проверить, что в нем есть число, содержащее в себе цифру 3.

let arrayNumbers = [1, 3, 4, 5, 6, 10, 13, 23, 35, 36];
let newArray = [];

for (let i = 0; i < arrayNumbers.length; i++) {
  let arrayNumbersStr = arrayNumbers[i].toString();
  if (arrayNumbersStr.includes(3)) {
    newArray.push(arrayNumbers[i]);
  }
}

console.log(arrayNumbers);
console.log(newArray);
