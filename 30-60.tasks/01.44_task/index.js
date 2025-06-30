// Дан некоторый массив. Найти сумму первой половины элементов этого массива.

function sumFirstHalf(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  const middleIndex = Math.floor(arr.length / 2);

  let sum = 0;

  for (let i = 0; i < middleIndex; i++) {
    sum += arr[i];
  }

  return sum;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(sumFirstHalf(arr)); // 6
