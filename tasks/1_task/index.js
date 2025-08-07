let numbers = [1, 2, 3, [4, 5, 6], [[3], 4], 6, 7, 8];

function bubbleSort(numbers) {
  let slate = numbers.flat(Infinity);

  for (let i = 0; i < slate.length; i++) {
    for (let j = 0; j < slate.length - 1 - i; j++) {
      if (slate[j] > slate[j + 1]) {
        let tempo = slate[j];
        slate[j] = slate[j + 1];
        slate[j + 1] = tempo;
      }
    }
  }

  return slate;
}

let result = bubbleSort(numbers);

let res = result.reduce((acc, i) => {
  if (acc.hasOwnProperty(i)) {
    acc[i] += 1;
  } else {
    acc[i] = 1;
  }

  return acc;
}, {});

console.log(numbers);
console.log(bubbleSort(numbers));
console.log(res);
