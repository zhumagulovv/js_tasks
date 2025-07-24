// Найдите сумму элементов этой структуры.
let data = [
  {
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
  },
  {
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
  },
  {
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
  },
];

let total = 0;

for (let obj of data) {
  for (let key in obj) {
    for (let num of obj[key]) {
      total += num;
    }
  }
}

console.log(total);

// for(), for( in ), for( of )

