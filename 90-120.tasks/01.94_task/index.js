// Дан следующий объект. Найти сумму элементов объекта.

let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};

const sum = (val) =>
  val instanceof Object
    ? Object.values(val).reduce((acc, n) => acc + sum(n), 0)
    : typeof val === "number"
    ? val
    : 0;

console.log(sum(obj));
