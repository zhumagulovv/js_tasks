// Дан некоторый массив, по очереди выводить в консоль подмассивы из двух элементов нашего массива

function sliceIntoChunk(arr, chunkSize) {
  let res = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }

  return res;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(sliceIntoChunk(arr, 2));
