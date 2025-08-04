// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

let numbers = 123453637;

let numbersStrArr = numbers.toString().split("");

let result = [];

for (let i = 0; i < numbersStrArr.length; i++) {
  if (numbersStrArr[i] === "3") {
    result.push(i);
  }
}
console.log(numbersStrArr);
console.log(result);
