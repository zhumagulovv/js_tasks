// Дан некоторый массив. Поделить сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

let numbers = [1, 2, 3, 4, 5, 6];

const [evenNumbers, oddNumbers] = numbers.reduce(
  (acc, val) => {
    acc[val % 2].push(val);
    return acc;
  },
  [[], []]
);

const sumEvenNumbers = evenNumbers.reduce((acc, cur) => acc + cur, 0);
const sumOddNumbers = evenNumbers.reduce((acc, cur) => acc + cur, 0);

const result = sumEvenNumbers / sumOddNumbers;

console.log(evenNumbers);
console.log(oddNumbers);
console.log(sumEvenNumbers);
console.log(sumOddNumbers);
console.log(result);
