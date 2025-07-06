// Дан массив с некоторыми числами. Надо писать код, который перевернет числа в массиве.

let arr = [123, 456, 789];

let reversedArr = arr.map((number) => {
  const numStr = number.toString();
  const reversed = numStr.split("").reverse("").join("");
  return parseInt(reversed, 10);
});

console.log(arr);
console.log(reversedArr);
