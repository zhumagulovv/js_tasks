// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

function getDivisorsRange(a, b) {
  if (a > b) {
    let temp = a;
    a = b;
    temp = b;
  }

  let result = new Array();
  let index = 0;

  for (let i = a; i < b; i++) {
    result.push({
      num: i,
      divisors: new Array(),
    });
    for (let j = a; j <= i; j++) {
      if (i % j === 0) {
        result[index].divisors.push(j);
        if (j * j != i) {
          result[index].divisors.push(i / j);
        }
      }
    }
    index++;
  }
  return result;
}

let numberOne = 10;
let numberTwo = 25;

let result = getDivisorsRange(numberOne, numberTwo);
console.log(result);
