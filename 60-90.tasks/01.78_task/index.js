// Дан массив с числами. Проверить, что в этом массиве есть два одинаковых элемента подряд.

let array = [1, 2, 3, 3, 4, 5];

// Первый пример
const countItems = {};

for (const item of array) {
  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}

const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
console.log(result);

// Второй пример
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      console.log(`${array[i]}, ${array[j]} yes`);
    } else {
      console.log(`${array[i]}, ${array[j]} no`);
    }
  }
}
