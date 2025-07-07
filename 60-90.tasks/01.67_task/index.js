// Дана некоторая строка. Переводить в верхний регистр все подстроки, в которых количество букв меньше или равно трем.
let str = "a bc def ghij";
let strArr = str.split(" ");
let result = [];

for (let i = 0; i < strArr.length; i++) {
  if (i < 3) {
    result.push(strArr[i].toUpperCase());
  }
}

console.log(strArr);
console.log(result.join(" "));
