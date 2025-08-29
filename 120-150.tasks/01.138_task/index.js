// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
// {
// 	max: 9,
// 	min: 1,
// }

function findMaxAndMinNumber(array) {
  let maxNumber = Math.max(...array);
  let minNumber = Math.min(...array);

  return {
    max: maxNumber,
    min: minNumber,
  };
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findMaxAndMinNumber(numbers));
