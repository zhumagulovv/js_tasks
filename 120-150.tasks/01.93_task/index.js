// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

let numbers = [1, 2, 3, 10, 20, 30, 40, 200, 400, 1000];

function removeZero(arr) {
  let newNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let zeroCount = arr[i].toString().split("0").length - 1;
    if (zeroCount < 2) {
      newNumbers.push(arr[i]);
    }
  }

  return newNumbers;
}

console.log(removeZero(numbers));
