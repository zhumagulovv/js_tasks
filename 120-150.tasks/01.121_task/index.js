// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

let numbers = [112, 123, 223, 345, 434, 567, 235, 236];

let result = numbers.filter((num) => {
  let digits = num.toString().split("");
  let uniqueDigits = new Set(digits);
  return digits.length === uniqueDigits.size;
});

console.log(result);
